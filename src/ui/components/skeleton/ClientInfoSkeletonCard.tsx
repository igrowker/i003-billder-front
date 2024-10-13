
export const ClientInfoSkeletonCard = () => {
  return (
    <div className="flex w-full gap-2">
      <div className="w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-r from-slate-50  to-slate-200 animate-pulse"></div>
      <div className="flex-grow  ">
        <div className="w-full h-4 bg-gradient-to-r from-slate-50 rounded-md to-slate-200 animate-pulse"></div>
        <div className=" mt-1 w-full h-4 bg-gradient-to-r from-slate-50 rounded-md to-slate-200 animate-pulse"></div>
        <div className=" mt-1 w-full h-4 bg-gradient-to-r from-slate-50 rounded-md to-slate-200 animate-pulse"></div>
        <div className=" mt-1 w-full h-4 bg-gradient-to-r from-slate-50 rounded-md to-slate-200 animate-pulse"></div>

      </div>
    </div>
  )
}
