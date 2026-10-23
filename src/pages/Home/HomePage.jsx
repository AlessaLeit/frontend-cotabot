import "./HomePage.scss";
import { useState, useEffect } from "react";
import CurrentQuote from "../../components/Home/CurrentQuote/CurrentQuote";
import QuoteCalculator from "../../components/Home/QuoteCalculator/QuoteCalculator";
import TargetValues from "../../components/Home/TargetValues/TargetValues";
import Graphic from "../../components/Home/Graphic/Graphic";

import {
    getQuoteRegistered,
    getQuoteRealTime,
    getQuoteOnPeriod
} from "../../services/quoteService";

import { coinsMask } from "../../services/coinsList";

export default function HomePage() {
    const [quote, setQuote] = useState(null);
    const [quoteList, setQuoteList] = useState(null);

    const [origin, setOrigin] = useState("Dólar Americano");
    const [target, setTarget] = useState("Real Brasileiro");

    useEffect(() => {
        const controller = new AbortController();

        async function loadQuotes() {
            const normalizedOrigin = coinsMask[origin];
            const normalizedTarget = coinsMask[target];

            if (!normalizedOrigin || !normalizedTarget) {
                setQuote(null);
                setQuoteList(null);
                return;
            }

            // Mesma moeda: cotação igual a 1.
            if (normalizedOrigin === normalizedTarget) {
                setQuote(1);
                setQuoteList([]);
                return;
            }

            const localOrigins = ["USD", "EUR", "BTC"];
            const localTargets = ["BRL"];

            const useRegistered =
                localOrigins.includes(normalizedOrigin) &&
                localTargets.includes(normalizedTarget);

            const getFunction = useRegistered
                ? getQuoteRegistered
                : getQuoteRealTime;

            try {
                // Busca a cotação atual e o histórico em paralelo.
                const [currentResult, periodResult] = await Promise.all([
                    getFunction(
                        normalizedOrigin,
                        normalizedTarget,
                        controller.signal
                    ),
                    getQuoteOnPeriod(
                        normalizedOrigin,
                        normalizedTarget,
                        30,
                        "day",
                        controller.signal
                    )
                ]);

                // Evita atualizar os estados com respostas antigas.
                if (controller.signal.aborted) return;

                setQuote(currentResult?.conversion ?? null);
                setQuoteList(periodResult);
            } catch (error) {
                if (controller.signal.aborted) return;

                console.error("Erro ao buscar cotações:", error);

                setQuote(null);
                setQuoteList(null);
            }
        }

        loadQuotes();

        return () => {
            controller.abort();
        };
    }, [origin, target]);

    return (
        <main>
            <p className="top-txt">
                Quem é vivo sempre aparece...
            </p>

            <div className="top-box">
                <CurrentQuote
                    origin={origin}
                    target={target}
                    quote={quote}
                    handlerOrigin={setOrigin}
                    handlerTarget={setTarget}
                />

                <QuoteCalculator
                    quote={quote}
                    origin={origin}
                    target={target}
                    handlerOrigin={setOrigin}
                    handlerTarget={setTarget}
                />
            </div>

            <div className="bottom-box">
                <TargetValues />

                <Graphic
                    quotePeriodList={quoteList}
                />
            </div>
        </main>
    );
}
