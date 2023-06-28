import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// a game-loop
// has 5 steps
// each step:
//  1. starts timer
//  2. changes the color
//  3. measures duration when button clicked
//  4. advances to next step if applicable or exits

export default function ColorChange() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [color, setColor] = useState("transparent");
  const [times, setTimes] = useState<Array<number>>([]);
  const [startTime, setStartTime] = useState(0);
  //  const [result, setResult] = useState('')

  // need to include the usable styles, so that the tailwind
  // will not purge the output CSS. I saw this trick from youtube, btw.
  // link to video: https://youtu.be/aSlK3GhRuXA?t=244
  const colors = ["bg-red", "bg-orange", "bg-blue", "bg-yellow", "bg-torquise"];

  useEffect(() => {
    const timeout = Math.ceil((Math.random() * 10000) % 4);

    setTimeout(() => {
      console.debug("setting another timeout for step:", step);
      console.debug("timeout:", timeout);

      setStartTime(Date.now());

      let tagetColor = Math.floor((Math.random() * 100) % 5);
      while (color === colors[tagetColor]) {
        tagetColor = Math.floor((Math.random() * 100) % 5);
      }
      setColor(colors[tagetColor]);
    }, timeout * 1000);
  }, [step]);

  return (
    <main className="mx-8 my-4 h-full">
      <h3 className="text-white font-sans uppercase">
        click on the button as soon as the color changes
      </h3>
      <p className="text-sm text-white/50">Step: {step}/5</p>
      <div className={`h-[500px] my-6 border-2 border-white ${color}`}></div>
      <button
        className="bg-white font-bold p-6 text-3xl w-full my-4"
        onClick={() => {
          if (step + 1 < 6) {
            //      setResult(`you clicked in ${Date.now() - startTime}ms`);
            setTimes([Date.now() - startTime, ...times]);
            setStep(step + 1);
            setColor("transparent");
          } else {
            //       setResult('round end!');
            console.info(
              "avg is",
              times.reduce((x: number, y: number) => x + y) / 5
            );
            const param = btoa(
              JSON.stringify({
                reps: times,
                challenge: "color change",
                threshold: 450,
              })
            );
            setTimes([]);
            navigate(`/result?r=${param}`);
          }
        }}
      >
        Click Me
      </button>

      {/*
    <p className="text-white/80 font-mono uppercase">{result}</p>
    */}
    </main>
  );
}
