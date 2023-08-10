import { Form, redirect } from "react-router-dom";
import type { ActionFunctionArgs } from "react-router-dom";

import Modal from "../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";

export default function NewNotePage() {
    return(<>
    <Modal>
        <Form method="post" className="p-4 w-[20rem] bg-teal-400 ">
            <Input inputType="title" name="title" label="Note Title" />
            <Input inputType="note" name="note"label="Your Note" />
            <div className="flex justify-end mt-2 gap-2">
                <Button type="button" buttonText="Cancel" />
                <Button type="submit" buttonText="Submit" />
            </div>
        </Form>
    </Modal>
    </>)
}

export async function action({request}: ActionFunctionArgs) {
    const formData = await request.formData()
    const postData = Object.fromEntries(formData)

    await fetch("http://localhost:8080/notes", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return redirect("/")
}