import { useState } from "react";
import InputOutput from "./InputOutput";
import RightPart from "./RightPart";

export default function MainBoard() {
  const data = [
    { category: "salary", ammount: 500,type:"income",date:"2021-09-01" },
    { category:"health", ammount: 1000 ,type:"expense",date:"2021-09-01"},
    { category:"food", ammount: 1500 ,type:"expense",date:"2021-09-01"},
    { category:"bond", ammount: 2500 ,type:"income",date:"2021-09-01"},
  

  
  ];


  const [trackData, setTrackData] = useState(data);
  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Submission Form --> */}

        <InputOutput />
        {/* <!-- Right Columndd --> */}
        <RightPart data={trackData}  />
      </section>
    </main>
  );
}
