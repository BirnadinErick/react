import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/*
 * Game-loop
 *  1. Construct number-line and hide within 2s
 *  2. ask for input
 *  3. measure time to complete
 *  4. iterate or exit the loop
 */

export default function NumInOrder() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [numberline, setNumberline] = useState("");
  const [line, setLine] = useState("");
  const [times, setTimes] = useState<Array<number>>([]);
  const [startTime, setStartTime] = useState(0);
  const TEXTS = "zero.one.two.three.four.five.six.seven.eight.nine".split(".");
  const NUM_MAP = Object.fromEntries(TEXTS.entries());

  // TODO: refactor the repeated lines
  function checkInput(input: string, numberline: string) {
    let s = parseInt(input);
    let l = [];
    while (s !== 0) {
      l.push(s % 10);
      s = Math.floor(s / 10);
    }

    if (
      l
        .reverse()
        .map((d) => NUM_MAP[d])
        .join(" - ") === numberline
    ) {
      setTimes([...times, Date.now() - startTime]);
      setNumberline("");
      setStep(step + 1);
    } else {
      setTimes([...times, 1000]);
      setNumberline("");
      setStep(step + 1);
    }
  }

  useEffect(() => {
    if (step === 5) {
      const param = btoa(
        JSON.stringify({
          reps: times,
          challenge: "num in order",
          threshold: 2000,
        })
      );
      navigate(`/result?r=${param}`);
    } else {
      const timeout = Math.ceil((Math.random() * 10000) % 4);
      setLine(() => "");
      setTimeout(() => {
        setNumberline(
          [0, 1, 2, 3]
            .map(() => TEXTS[Math.floor((Math.random() * 100) % 9)])
            .join(" - ")
        );
        setStartTime(Date.now());
      }, timeout * 1000);
    }
  }, [step]);

  return (
    <main className="mx-8 my-4 h-full space-y-4">
      <h3 className="text-white font-sans uppercase">
        Click either j or f when background color changes
      </h3>
      <p className="text-sm text-white/50">Step: {step}/5</p>
      <div className="uppercase text-xl font-bold text-white border border-white p-4">
        {numberline}
      </div>
      <div>
        <input
          type="text"
          autoFocus
          value={line}
          onChange={(e) => {
            if (e.target.value.length === 4) {
              checkInput(e.target.value, numberline);
            }
            setLine(e.target.value);
          }}
        />
      </div>
    </main>
  );
}
