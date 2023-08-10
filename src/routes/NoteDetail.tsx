import { useLoaderData} from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

import Modal from "../components/Modal";

interface NOTE {
    id: string;
    title: string;
    note: string;
}

export default function NoteDetailPage() {
    const note = useLoaderData() as NOTE

    if (!note) {
        return (<>
        <Modal>
            <div className="p-4 w-[30rem]">
                <h1>Could not find note</h1>
                <p>Unfortunely, the requested note could not be found</p>
            </div>
        </Modal>
        </>)
    }

    return(<>
    <Modal>
        <main className="p-4 w-[30rem]">
            <p className="font-bold text-md uppercase text-slate-800 m-0">
                {note.title}
            </p>
            <p className="mx-0 mt-1 mb-0 whitespace-pre-wrap italic text-slate-700 text-lg">
                {note.note}
            </p>
        </main>
    </Modal>
    </>)
}

export async function loader({params}: LoaderFunctionArgs) {
    const response = await fetch("http://localhost:8080/notes/" + params.noteId)
    const data = await response.json()
    return data
}