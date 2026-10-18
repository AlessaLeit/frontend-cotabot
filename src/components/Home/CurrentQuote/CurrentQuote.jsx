import "./CurrentQuote.scss";
import DropDown from "../../DropDown/DropDown"
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
                <img src="src/assets/money.png" alt="money icon" />
                <p>Escolha a moeda</p>
            </header>

            <DropDown 
                coins={coinsNames}
                type={origin}
                handler={handlerOrigin}
            />

            <div className="quote-box">
                <span className="total-label">Total Convertido</span>
                <div className="show-quote">
                    <span></span>
                    <p>R$ {quote}</p>
                    <DropDown
                        coins={coinsNames}
                        type={target}
                        variant="code"
                        width="250px"
                        handler={handlerTarget}
                    />
                </div>
            </div>
        </section>
    );
}