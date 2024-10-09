

interface TextBadgeProps {
    text: string;
}

export const TextBadge = ({ text }: TextBadgeProps) => {
    return (
        <div className="bg-slate-100 px-2 py-1 rounded-md shadow-md" >
            {text}
        </div >
    )
}
