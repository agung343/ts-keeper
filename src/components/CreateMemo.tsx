import React, { ChangeEvent, useContext, useState } from "react";
import { MemoContext } from "../store/memo-context";
import "./CreateMemo.css"

const CreateMemo: React.FC = () => {
    const memoCtx = useContext(MemoContext)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    // const titleRef = useRef<HTMLInputElement>(null)
    // const contentRef = useRef<HTMLTextAreaElement>(null)

    //validate
    const memoInvalid = title.trim().length === 0 || content.trim().length === 0

    function titleHandler (e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value)
    }

    function contentHandler (e:ChangeEvent<HTMLTextAreaElement>) {
        setContent(e.target.value)
    }

    function submitHandler (event: React.FormEvent) {
        event.preventDefault();

        if (memoInvalid) {
            return;
        }
        memoCtx.addMemo(title, content)
        setTitle("")
        setContent("")
    }

    const formClass = memoInvalid ? "form invalid" : "form"

    return (
        <form onSubmit={submitHandler} className={formClass}>
            <label htmlFor="Keeper">New Memo</label>
            <input id="title" placeholder="Title" value={title} name="title" onChange={titleHandler} />
            <textarea id="content" rows={3} placeholder="Memo" value={content} name="content" onChange={contentHandler} />
            {memoInvalid ? <p className="invalid">Please insert both title and content</p> : null}
            <button>+</button>
        </form>
    )
}
export default CreateMemo