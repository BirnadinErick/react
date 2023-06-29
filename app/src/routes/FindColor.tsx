import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/*
 * Game-loop
 *  1. create a color
 *  2. disply the color
 *  3. get user input
 *  4. measure time being
 *  5. iterate or end the loop given the no of steps
 */
export default function FindColor() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [times, setTimes] = useState<Array<number>>([]);
  const [color, setColor] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [input, setInput] = useState("");

  const colors = ["bg-red", "bg-orange", "bg-blue", "bg-yellow", "bg-torquise"];
  const COLOR_MAP = Object.fromEntries(colors.entries());

  useEffect(() => {
    if (step === 5) {
      const params = btoa(
        JSON.stringify({
          reps: times,
          challenge: "find color",
          threshold: 850,
        })
      );

      navigate(`/result?r=${params}`);
    }

    const timeout = Math.ceil((Math.random() * 10000) % 4);

    setTimeout(() => {
      let targetColor = Math.floor((Math.random() * 100) % 5);
      while (color === colors[targetColor]) {
        targetColor = Math.floor((Math.random() * 100) % 5);
      }
      setColor(colors[targetColor]);
      setStartTime(Date.now());
    }, timeout * 1000);
  }, [step]);

  return (
    <main className="mx-8 my-4 h-full space-y-4">
      <h3 className="text-white font-sans uppercase">
        When the color of the box below changes, enter the corresponding number
        from below, inside the text input
      </h3>
      <p className="text-sm text-white/50">Step: {step}/5</p>
      <div className="space-y-2">
        <div
          className={`p-4 w-full border-white h-[256px] border ${color}`}
        ></div>
        <input
          type="text"
          className="p-2 bg-transparent my-4 border-white border text-white"
          value={input}
          autoFocus
          onChange={(e) => {
            if (COLOR_MAP[parseInt(e.target.value) - 1] === color) {
              setTimes((prev) => [...prev, Date.now() - startTime]);
              setColor("");
              setInput("");
              setStep(step + 1);
            } else {
              setTimes((prev) => [...prev, 1000]);
              setColor("");
              setInput("");
              setStep(step + 1);
            }
          }}
        />
        <div className="font-mono grid grid-cols-2 gap-x-4 gap-y-3 my-4">
          {colors.map((c: string, i: number) => (
            <span key={i} className={`${c} p-3 `}>
              {i + 1}
              {":"}
              {c.split("-")[1].toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
