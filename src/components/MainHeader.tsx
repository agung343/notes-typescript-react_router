import {MdPostAdd, MdMessage} from "react-icons/md"
import { Link } from "react-router-dom"

export default function MainHeader() {
    return (<>
        <header className="mx-8 my-[7%] p-4 flex text-center justify-between align-middle border-b-2 border-slate-100">
            <h1 className="flex gap-6 py-3 align-middle text-2xl">
                <MdMessage />
                React Notes-TS
            </h1>
            <p>
                <Link to="/add-note" 
                  className="gap-2 px-6 py-3 font-bold inline-flex align-middle no-underline rounded-md shadow-md cursor-pointer bg-sky-400 text-slate-100 hover:bg-sky-600"
                >
                    <MdPostAdd size={18} />
                    New Note
                </Link>
            </p>
        </header>
    </>)
}