import "./HomePage.scss";
import CurrentQuote from "../../components/Home/CurrentQuote"


export default function HomePage() {

  return (
    <main>
      <p className="top-txt">Quem é vivo sempre aparece...</p>

      <div className="top-box">
        <CurrentQuote />

        <section className="target-values"></section>
      </div>

      <div className="bottom-box">
        <section className="quotes-list"></section>
        <section className="graphic"></section>
      </div>
    </main>
  );
}