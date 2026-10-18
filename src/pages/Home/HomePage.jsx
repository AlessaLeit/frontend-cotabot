import "./HomePage.scss";
import { useState } from "react";
import { useEffect } from "react";
import CurrentQuote from "../../components/Home/CurrentQuote/CurrentQuote"
import QuoteCalculator from "../../components/Home/QuoteCalculator/QuoteCalculator";
import TargetValues from "../../components/Home/TargetValues/TargetValues";
import Graphic from "../../components/Home/Graphic/Graphic";
import { getQuoteRegistered } from "../../services/quoteService";
import { getQuoteRealTime } from "../../services/quoteService";
import { coinsMask } from "../../services/coinsList";

export default function HomePage() {

  const [quote, setQuote] = useState(null);
  const [origin, setOrigin] = useState("Dólar Americano");
  const [target, setTarget] = useState("Real Brasileiro");

  async function handleGetQuote(origin, target, getFunction) {
    if (origin == target) {
      setQuote(1)
      return
    }
    let result = await getFunction(origin, target)

    setQuote(result.conversion)
  }

  useEffect(() => {
    let handlerFunction = getQuoteRegistered
    let normalizedOrigin = coinsMask[origin]
    let normalizedTarget = coinsMask[target]

    const localOrigins = ["USD", "EUR", "BTC"];
    const localTargets = ["BRL"];

    if (!localOrigins.includes(normalizedOrigin)){
      handlerFunction = getQuoteRealTime
    }

    if (!localTargets.includes(normalizedOrigin)){
      handlerFunction = getQuoteRealTime
    }

    handleGetQuote(
      normalizedOrigin, 
      normalizedTarget,
      handlerFunction
    )
  }, [origin, target]);

  return (
    <main>
      <p className="top-txt">Quem é vivo sempre aparece...</p>

      <div className="top-box">

        <CurrentQuote 
          origin="Dólar Americano"
          target="Real Brasileiro"
          quote={quote}
          handlerOrigin={setOrigin}
          handlerTarget={setTarget}
        />

        <QuoteCalculator />

      </div>

      <div className="bottom-box">
        
        <TargetValues />

        <Graphic />

      </div>
    </main>
  );
}