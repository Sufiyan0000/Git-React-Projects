import { useState } from "react";
import {GenRandom , Sum} from "./Helper";

export default function Lottery() {
  const [num, setNum] = useState(GenRandom(3));

  const handleBuy = () => {
    setNum(GenRandom(3));
  }

  return (
    <div className="w-full h-screen bg-white grid mt-10">
      <div className="bg-white place-items-center rounded-2xl w-80 h-50 mx-auto mt-4 drop-shadow-lg">
        <div className="">
          <h2 className="text-black text-3xl text-center ">Lottery Game !</h2>
        </div>
        <div className="mt-7">
          <span className="text-2xl bg-red-400 mx-4 p-2 rounded-full text-slate-600">{num[0]}</span>
          <span className="text-2xl bg-white mx-4 p-2 rounded-full text-slate-600">{num[1]}</span>
          <span className="text-2xl bg-green-400 mx-4 p-2 rounded-full text-slate-600">{num[2]}</span>
          <br />
        </div>
        <div>
        <button onClick={handleBuy} className="p-4 bg-slate-950
         text-white font-semibold mt-5 rounded-md hover:bg-slate-700 cursor-pointer">$ Buy Ticket</button>
        </div>
        <div>
            {Sum(num) === 15 && <h2 className="font-semibold text-amber-300 text-md">$$ Congratulations ! You won Lottery $$</h2>}
        </div>
      </div>
    </div>
  );
}
