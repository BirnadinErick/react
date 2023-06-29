/*
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
*/
/*
 * Game-loop
 *  1. Construct number-line
 *  2. ask for input
 *  3. measure time to complete
 *  4.
 *
 *  Abandon, as I have no idea how to measure the reflex.
 */
export default function NumInOrder() {
  /*
  const navigate = useNavigate();
  const TEXTS = "zero.one.two.three.four.five.six.seven.eight.nine".split(".");
  const NUM_MAP = Object.fromEntries(TEXTS.entries());
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeout = Math.ceil((Math.random() * 10000) % 4);

//    setTimeout(() => {}, timeout * 1000);
  }, [step]);
*/
  return (
    <main className="mx-8 my-4 h-full space-y-4">
      <h3 className="text-white font-sans uppercase">
        Click either j or f when background color changes
      </h3>
      {/*     <p className="text-sm text-white/50">Step: {step}/5</p>*/}
      <div>
        <input type="text" />
      </div>
    </main>
  );
}
