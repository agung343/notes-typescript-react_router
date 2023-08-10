import React, { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

type Props = {
    children : ReactNode
}

export default function Modal({children}: Props) {
    const navigate = useNavigate()
    function closeHandler() {
        navigate("/")
    }

    return(<>
    <div className='fixed top-0 left-0 z-10 w-full h-screen bg-opacity-60 bg-slate-700' onClick={closeHandler}>
        <dialog open className='border-none rounded-md shadow-md p-0 overflow-hidden z-10 absolute top-[12rem]'>
            {children}
        </dialog>
    </div>

    </>)
}