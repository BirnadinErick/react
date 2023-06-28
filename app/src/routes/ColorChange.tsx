import { useEffect, useState } from "react"

export default function ColorChange() {

  const [color, setColor] = useState('red');
  const [startTime, setStartTime] = useState(0)
  const [result, setResult] = useState('')
  const timeout = Math.ceil(Math.random() * 10000 % 9)

  // need to include the usable styles, so that the tailwind
  // will not purge the output CSS. I saw this trick from youtube, btw.
  // link to video: https://youtu.be/aSlK3GhRuXA?t=244
  const tagetColor = Math.floor(Math.random() * 100 % 5)
  const colors = ['bg-red', 'bg-orange', 'bg-blue', 'bg-yellow', 'bg-torquise'];

  useEffect(()=>{
    console.log(timeout);
    
    setTimeout(()=>{
        setStartTime(Date.now());
        setColor(colors[tagetColor]);
      }, timeout * 1000);

    }, []);


  return (
  <main className='mx-8 my-4 h-full'>
    <h3 className="text-white font-sans uppercase">click on the button as soon as the color changes</h3>
    <div className={`h-[526px] my-6 border-2 border-white ${color}`}></div>
    <button className="bg-white font-bold p-6 text-3xl w-full my-4"
    onClick={()=>{
        setResult(`you clicked in ${Date.now() - startTime}ms`);
      }}
    >Click Me</button>

    <p className="text-white/80 font-mono uppercase">{result}</p>
  </main>
  )
}

