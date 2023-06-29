import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/*
 * Game-loop
 *  1. display the text
 *  2. listen for keyEvent
 *  3. if right, then calculate the time being else add 1s penalty
 *  4. advance the step
 *  5. if steps done, redirect to results else iterate
 */

export default function ReconNum() {
  const TEXTS = "zero.one.two.three.four.five.six.seven.eight.nine".split(".");
  const NUM_MAP = Object.fromEntries(TEXTS.entries());
  const [step, setStep] = useState(0);
  const [number, setNumber] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [times, setTimes] = useState<Array<number>>([]);
  const [startTime, setStartTime] = useState(0);
  const [result, setResult] = useState("a number will automatically appear");
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = Math.ceil((Math.random() * 10000) % 4);

    setTimeout(() => {
      let targetNum = Math.floor((Math.random() * 100) % 9);
      while (number === TEXTS[targetNum]) {
        targetNum = Math.floor((Math.random() * 100) % 9);
      }

      setNumber(TEXTS[targetNum]);
      setStartTime(Date.now());
    }, timeout * 1000);
  }, [step]);

  return (
    <main className="mx-8 my-4 h-full text-white space-y-4">
      <h3 className="text-white font-sans uppercase">
        type the number from your keyboard
      </h3>
      <p className="text-sm text-white/50">Step: {step}/5</p>
      <div className="uppercase text-[64px] font-bold place-items-center">
        {number}
      </div>
      <input
        type="text"
        value={userNumber}
        onChange={(e) => {
          if (NUM_MAP[e.target.value] === number) {
            setTimes((prev) => [...prev, Date.now() - startTime]);
            setResult("Ok!");
            setNumber("Next round, keep the watch!");
            setStep((prev) => prev + 1);
            setUserNumber("");
          } else {
            setTimes((prev) => [...prev, 1000]);
            setResult("Penalty, 1s");
            setNumber("Next round, better luck this time!");
            setStep((prev) => prev + 1);
            setUserNumber("");
          }
          if (step > 5) {
            const params = btoa(
              JSON.stringify({
                reps: times,
                challenge: "recon num",
                threshold: 700,
              })
            );

            navigate(`/result?r=${params}`);
          }
        }}
        className="p-1 bg-gray border-white border"
        autoFocus
      ></input>
      <p>{result}</p>
    </main>
  );
}
