import { Link } from "react-router-dom";

import "../styles/Notes.css"

type Props = {
    title: string
    note: string
    id: string
}

export default function Notes({title, note, id}: Props) {
    return(<>
    <div className="my-0 mx-4 p-4 rounded-lg shadow-md note bg-sky-400">
        <Link to={id} className='no-underline'>
            <p className="m-0 uppercase font-bold text-xl text-neutral-800">{title}</p>
            <p className='mt-1 whitespace-pre-wrap italic text-neutral-700 text-lg'>{note}</p>
        </Link>
    </div>
    </>)
}