
import "./CurrentQuote.scss";
import DropDown from "../../DropDown/DropDown";
import { coinsNames } from "../../../services/coinsList";

export default function CurrentQuote({
    quote,
    origin,
    target,
    handlerOrigin,
    handlerTarget,
}) {
    return (
        <section className="current-quote">
            <header>
                <img
                    src="src/assets/money.png"
                    alt="money icon"
                />
                <p>Escolha a moeda</p>
            </header>

            <DropDown
                coins={coinsNames}
                selected={origin}
                handler={handlerOrigin}
            />

            <div className="quote-box">
                <span className="total-label">
                    Total Convertido
                </span>

                <div className="show-quote">
                    <span></span>

                    <p>
                        {quote !== null && quote !== undefined
                            ? Number(quote).toLocaleString("pt-BR", {
                                  maximumFractionDigits: 6,
                              })
                            : "Carregando..."}
                    </p>

                    <DropDown
                        coins={coinsNames}
                        selected={target}
                        variant="name"
                        width="250px"
                        handler={handlerTarget}
                    />
                </div>
            </div>
        </section>
    );
}
