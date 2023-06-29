import { Link } from "react-router-dom";

function SectionTitle({ title }: { title: string }) {
  return <h3 className="text-white font-bold text-xl">{title}</h3>;
}

function Game({ text }: { text: string }) {
  // TODO: add hover animation to indicate interaction
  return (
    <Link
      to={text.replaceAll(" ", "-").toLowerCase()}
      className="block border-4 text-lg p-4 border-white text-white uppercase hover:text-black hover:bg-white transition-colors duration-300 ease-in-out hover:font-bold"
    >
      {text}
    </Link>
  );
}
export default function Home() {
  const GAMES = [
    "Physical Button",
    "Find Color",
    "Recon Num",
    "Color Change",
    "Num In Order",
  ];

  // TODO: add stats

  return (
    <main className="mx-8 my-4 text-white">
      <section className="my-4">
        <h2 className="text-2xl uppercase font-bold">
          Welcome, let's check how much reactant you are
        </h2>
      </section>
      <section className="my-8">
        <SectionTitle title="Play Following Games" />
        <div className="my-4 space-y-3">
          {GAMES.map((g: string, i: number) => (
            <Game key={i} text={g} />
          ))}
        </div>
        <Link
          to={""}
          className="text-sm block lowercase text-white/70 underline underline-offset-4"
        >
          learn how each game goes
        </Link>
      </section>
      <hr className="border-[0.2px] border-white/30" />
      <section className="my-8 space-y-4">
        <SectionTitle title="Statistics" />
        <p>Your quickest respond overall: 300ms</p>
        <div className="my-4">
          <p>Your quickest respond overall: 300ms</p>
          <div className="my-2 pl-4 space-y-2 border-l-white/70 border-l">
            {GAMES.map((g: String, i: number) => (
              <p key={i}>{g}: 300ms</p>
            ))}
          </div>
        </div>
        <Link
          to={""}
          className="text-red my-4 underline-offset-2 underline text-sm"
        >
          reset statistics
        </Link>
      </section>
    </main>
  );
}
