import "./QuoteCalculator.scss";
import DropDown from "../../DropDown/DropDown"
import { useState } from "react";

const coins = ["Dólar", "Euro", "Libra", "Iene", "Real", "Bitcoin"];
const coinsQuote = ["Dólar", "Euro", "Libra", "Iene", "Real", "Bitcoin"];

export default function QuoteCalculator(quoteInfo) {
    const [firstInput, setFirstInput] = useState(1);
    const [secondInput, setSecondInput] = useState(5.18);

    return (
        <section className="quote-calculator">
            <header>
                <img src="src/assets/calculator.png" alt="money icon" />
                <p>Calcular valores</p>
            </header>

            <div className="calculator-area">
                <div className="input-area">
                    <input 
                        type="number" 
                        name="" 
                        id=""
                        value={firstInput}
                        onChange={(event) => setFirstInput(
                            Number(event.target.value)
                        )}
                    />
                    <input 
                        type="number" 
                        name="" 
                        id="" 
                        value={secondInput}
                        onChange={(event) => setSecondInput(
                            Number(event.target.value)
                        )}
                    />
                </div>
                <div className="dropdown-area">
                    <DropDown
                        coins={coins}
                        type="Dólar"
                        variant="code"
                        width="150px"
                    />
                    <DropDown
                        coins={coinsQuote}
                        type="Real"
                        variant="code"
                        width="150px"
                    />
                </div>
            </div>
        </section>
    );
}