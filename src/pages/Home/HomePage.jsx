
import "./HomePage.scss";
import { useState, useEffect } from "react";
import CurrentQuote from "../../components/Home/CurrentQuote/CurrentQuote";
import QuoteCalculator from "../../components/Home/QuoteCalculator/QuoteCalculator";
import TargetValues from "../../components/Home/TargetValues/TargetValues";
import Graphic from "../../components/Home/Graphic/Graphic";
import {
    getQuoteRegistered,
    getQuoteRealTime
} from "../../services/quoteService";
import { coinsMask } from "../../services/coinsList";

export default function HomePage() {
    const [quote, setQuote] = useState(null);
    const [origin, setOrigin] = useState("Dólar Americano");
    const [target, setTarget] = useState("Real Brasileiro");

    useEffect(() => {
        let cancelled = false;

        async function loadQuote() {
            const normalizedOrigin = coinsMask[origin];
            const normalizedTarget = coinsMask[target];

            if (!normalizedOrigin || !normalizedTarget) {
                setQuote(null);
                return;
            }

            if (normalizedOrigin === normalizedTarget) {
                setQuote(1);
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
                const result = await getFunction(
                    normalizedOrigin,
                    normalizedTarget
                );

                if (!cancelled) {
                    setQuote(result?.conversion ?? null);
                }
            } catch (error) {
                if (!cancelled) {
                    setQuote(null);
                }

                console.error("Erro ao buscar cotação:", error);
            }
        }

        loadQuote();

        return () => {
            cancelled = true;
        };
    }, [origin, target]);

    return (
        <main>
            <p className="top-txt">Quem é vivo sempre aparece...</p>

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
                <Graphic />
            </div>
        </main>
    );
}
