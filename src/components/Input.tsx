type Props = {
    inputType: "title" | "note"
    name: string
    label: string
    type?: string
}

const classes = "block w-full p-2 bg-teal-400 border bg-slate-100 text-slate-700"

export default function Input({inputType, name, label, type}: Props) {
    return(<>
    <label htmlFor={name} className="block my-1 text-slate-700 font-bold">{label}</label>
    {inputType === "title" && (
        <input id={name} name={name} className={classes} />
    )}
    {inputType === "note" && (
        <textarea id={name} name={name} className={classes} rows={3} />
    )}

    </>)
}