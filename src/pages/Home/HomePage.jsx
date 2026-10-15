import "./HomePage.scss";
import CurrentQuote from "../../components/Home/CurrentQuote/CurrentQuote"
import QuoteCalculator from "../../components/Home/QuoteCalculator/QuoteCalculator";
import TargetValues from "../../components/Home/TargetValues/TargetValues";
import Graphic from "../../components/Home/Graphic/Graphic";

export default function HomePage() {

  return (
    <main>
      <p className="top-txt">Quem é vivo sempre aparece...</p>

      <div className="top-box">

        <CurrentQuote />

        <QuoteCalculator />

      </div>

      <div className="bottom-box">
        
        <TargetValues />

        <Graphic />

      </div>
    </main>
  );
}