
export const ProjectInfoSkeletonCard = () => {
  return (
    <div className="flex w-full gap-2 bg-white shadow-md p-2 rounded-md my-4">
        <div className="w-14 h-14 shadow-md flex-shrink-0 rounded-full bg-gradient-to-r from-slate-50  to-slate-200 animate-pulse"></div>
        <div className="flex-grow flex flex-col gap-2">
            <div className="w-full h-4 shadow-md bg-gradient-to-r rounded-md from-slate-50  to-slate-200 animate-pulse"></div> 
            <div className="w-full h-4 shadow-md bg-gradient-to-r rounded-md from-slate-50  to-slate-200 animate-pulse"></div> 
            <div className="w-full h-4 shadow-md bg-gradient-to-r rounded-md from-slate-50  to-slate-200 animate-pulse"></div> 
        </div>

    </div>
  )
}
