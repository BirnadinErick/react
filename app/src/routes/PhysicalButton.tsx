import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PhysicalButton() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [bg, setBg] = useState("bg-white");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(0);
  const colors = ["bg-red", "bg-orange", "bg-blue", "bg-yellow", "bg-torquise"];
  const [times, setTimes] = useState<Array<number>>([]);

  useEffect(() => {
    const timeout = Math.ceil((Math.random() * 10000) % 4);

    setTimeout(() => {
      let targetColor = Math.floor((Math.random() * 100) % 5);
      while (bg === colors[targetColor]) {
        targetColor = Math.floor((Math.random() * 100) % 5);
      }
      setBg(colors[targetColor]);
      setStartTime(Date.now());
    }, timeout * 1000);
  }, [step]);

  return (
    <main className="mx-8 my-4 h-full space-y-4">
      <h3 className="text-white font-sans uppercase">
        Click either j or f when background color changes
      </h3>
      <p className="text-sm text-white/50">Step: {step}/5</p>
      <div>
        <input
          className={`p-2 text-center border-white text-[28px] ${bg}`}
          type="text"
          value={input}
          onChange={() => {
            // TODO: check whether is it j or k
            if (step === 5) {
              const params = btoa(
                JSON.stringify({
                  reps: times,
                  challenge: "physical button",
                  threshold: 300,
                })
              );

              navigate(`/result?r=${params}`);
            } else {
              setTimes((prev) => [...prev, Date.now() - startTime]);
              setInput("");
              setBg("transparent");
              setStep((prev) => prev + 1);
            }
          }}
          autoFocus
        />
      </div>
    </main>
  );
}
