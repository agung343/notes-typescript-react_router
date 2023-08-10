import { Link } from "react-router-dom"

type Props = {
    type: "button" | "submit"
    buttonText: string
}

export default function Button({type, buttonText}: Props) {
    return(<>
    
    {type === "button" && (
        <Link 
          to="/" type="button"
          className='px-6 py-2 bg-transparent hover:bg-slate-300'
        >
            {buttonText}
        </Link>
    )}

    {type === "submit" && (
        <button 
          type="submit"
          className='cursor-pointer border-none rounded-sm text-slate-100 bg-green-800 px-6 py-2 hover:bg-green-950'
        >
            {buttonText}
        </button>
    )}
    
    </>)
}