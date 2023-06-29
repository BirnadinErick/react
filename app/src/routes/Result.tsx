import { Link, useSearchParams } from "react-router-dom";

export default function Result() {
  const [searchParams, _] = useSearchParams();
  const params = JSON.parse(atob(searchParams.get("r")!));
  const avg = params.reps.reduce((x: number, y: number) => x + y) / 5;

  return (
    <main className="mx-8 my-4 text-white">
      <h2 className="text-xl font-bold uppercase">
        Result for your {params.challenge}
      </h2>
      <section className="my-4">
        <div className="border border-white text-sm p-4 text-center space-y-2">
          <p>average time:</p>
          <h3 className="font-mono text-3xl">
            {avg}
            <span className="text-lg text-white">ms</span>
          </h3>
          <p
            className={`font-bold uppercase ${
              params.threshold >= avg ? "text-green" : "text-red"
            }`}
          >
            {params.threshold >= avg ? "congrats!" : "please try again"}
          </p>
        </div>

        <div className="text-center text-white/80 text-sm space-y-2 my-6">
          {params.reps.map((r: number, idx: number) => (
            <p key={idx}>
              repetition {idx + 1}: {r}
            </p>
          ))}
        </div>
      </section>

      <section className="space-x-2 w-full grid grid-cols-2">
        <Link to="/" className="bg-white text-black text-center my-2 p-4">
          go to home
        </Link>
        <Link
          to={`/${params.challenge.replaceAll(" ", "-")}`}
          className="bg-white text-black text-center my-2 p-4"
        >
          try again
        </Link>
      </section>
    </main>
  );
}
