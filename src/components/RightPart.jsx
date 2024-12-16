import Dashboard from "./Dashboard";
import TotalBoard from "./TotalBoard";


export default function RightPart() {
  return (
    <div className="lg:col-span-2">
    {/* <!-- Total Balance Stat--> */}
    <TotalBoard/>

    {/* <!-- List Down --> */}
    <Dashboard/>
  </div>
  )
}
