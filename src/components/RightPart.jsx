import Dashboard from "./Dashboard";
import TotalBoard from "./TotalBoard";

export default function RightPart({ data }) {
  const balance = data.reduce((acc, curr) => {
    if (curr.type === "income") {
      return acc + curr.ammount;
    } else {
      return acc - curr.ammount;
    }
  }, 0);

  const income = data.reduce((acc, curr) => {
    if (curr.type === "income") {
      return acc + curr.ammount;
    } else {
      return acc;
    }
  }, 0);

  const expense = data.reduce((acc, curr) => {
    if (curr.type === "expense") {
      return acc + curr.ammount;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className="lg:col-span-2">
      {/* <!-- Total Balance Stat--> */}
      <TotalBoard balance={balance} income={income} expense={expense} />

      {/* <!-- List Down --> */}
      <Dashboard data={data}/>
    </div>
  );
}
