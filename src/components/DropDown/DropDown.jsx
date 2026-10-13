import { useState } from "react";
import "./DropDown.scss";

export default function DropDown({
    coins,
    type,
    variant = "name",
    width,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCoin, setSelectedCoin] = useState(type ?? coins[0]);

    function handleSelectCoin(coin) {
        setSelectedCoin(coin);
        setIsOpen(false);
    }

    return (
        <div
            className={`coin-dropdown coin-dropdown--${variant} ${
                isOpen ? "open" : ""
            }`}
            style={width ? { "--dropdown-width": width } : undefined}
        >
            <button
                type="button"
                className="coin-selection"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Selecionar moeda"
            >
                <span>{selectedCoin}</span>

                <img src="src/assets/seta.png" alt="" />
            </button>

            <div className="coin-options">
                {coins.map((coin) => (
                    <button
                        type="button"
                        key={coin}
                        className={`coin-option ${
                            selectedCoin === coin ? "selected" : ""
                        }`}
                        onClick={() => handleSelectCoin(coin)}
                    >
                        {coin}
                    </button>
                ))}
            </div>
        </div>
    );
}