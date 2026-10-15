import "./CurrentQuote.scss";
import DropDown from "../../DropDown/DropDown"

const coins = ["Dólar", "Euro", "Libra", "Iene", "Real", "Bitcoin"];
const coinsQuote = ["BRL", "USD"];

export default function CurrentQuote() {
    return (
        <section className="current-quote">
            <header>
                <img src="src/assets/money.png" alt="money icon" />
                <p>Escolha a moeda</p>
            </header>

            <DropDown 
                coins={coins}
                type="Dólar"
            />

            <div className="quote-box">
                <span className="total-label">Total Convertido</span>
                <div className="show-quote">
                    <span></span>
                    <p>R$ 5,18</p>
                    <DropDown
                        coins={coinsQuote}
                        type="BRL"
                        variant="code"
                        width="150px"
                    />
                </div>
            </div>
        </section>
    );
}