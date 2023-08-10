import NotesList from "../components/NotesList";
import { Outlet } from "react-router-dom";

export default function Home() {
    return(<>
        <Outlet />
        <main>
            <NotesList />
        </main>
    </>)
}

export async function loader() {
    const response = await fetch("http://localhost:8080/notes")
    const data = await response.json()
    return data.notes
}