import "./Graphic.scss";
import ApexChart from "./LineGraph/ApexChart";

export default function Graphic({ quotePeriodList }) {
    return (
        <section className="graphic">
            <header>
                <img src="src/assets/graphic.png" alt="money icon" />
                <p>Análise</p>
            </header>
            <div className="graphs">
                <ApexChart 
                    graphData={quotePeriodList}
                />
            </div>
        </section>
    );
}