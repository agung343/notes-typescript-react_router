import { useLoaderData } from "react-router-dom";

import Notes from "./Notes";

import "../styles/notes-list.css"

interface NOTE {
    id: string;
    title: string;
    note: string
}

export default function NotesList() {
    const notes = useLoaderData() as NOTE[]
    return(<>
        {notes.length > 0 && (
            <ul className='post list-none my-4 mx-auto gap-4 py-4'>
                {notes.map(note => (
                    <Notes id={note.id} key={note.id} title={note.title} note={note.note} />
                ))}
            </ul>
        )} 
        
    </>)
}