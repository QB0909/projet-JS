type CvEntryProps ={
  title: string;
  date: string;
  description: string;
}

export default function CvEntry(props: CvEntryProps) {
  return (
    <div className="p-4 border border-slate-200 rounded-xl shadow-sm mx-4 my-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <span className="text-slate-500">{props.date}</span>
      </div>

      <p className="mt-2 text-slate-600 whitespace-pre-line">   //whitespace pour rajouter des sauts de ligne
        {props.description}
      </p>
    </div>
  );
}
