interface NotDataCreatedProps {
  text: string;
}

export const NotDataCreated = ({ text }: NotDataCreatedProps) => {
  return (
    <div className="rounded-md grid place-content-center h-16 bg-slate-100">
      <h4>{text}</h4>
    </div>
  );
};
