/* eslint-disable react/prop-types */


export default function ExpenseIncomeBtn({name ,isActive ,setIsActive,id}) {
  return (
    <div onClick={()=>setIsActive({
        ...isActive,
        id:id
    })} className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${isActive?.id==id?"active":""}`}>
          {name}
        </div>
  )
}
