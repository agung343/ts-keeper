import React, { useContext, useState } from "react";
import { MemoContext } from "../store/memo-context";
import "./CreateMemo.css"

const CreateMemo = () => {
    const memoCtx = useContext(MemoContext)

    // const [title, setTitle] = useState("")
    // const [content, setContent] = useState("")

    const [userInput, setUserInput] = useState({
        title: "",
        content: ""
    })

    // const titleRef = useRef<HTMLInputElement>(null)
    // const contentRef = useRef<HTMLTextAreaElement>(null)

    //validate
    const memoInvalid = userInput.title.trim().length === 0 || userInput.content.trim().length === 0
    // const memoInvalid = title.trim().length === 0 || content.trim().length === 0

    function changeHandler (e) {
        const {id, value} = e.target;
        setUserInput(prevMemo => {
            return {
                ...prevMemo,
                [id]: value
            }
        })
    }
    
    // function titleHandler (e) {
    //     setTitle(e.target.value)
    // }

    // function contentHandler (e) {
    //     setContent(e.target.value)
    // }

    function submitHandler (event) {
        event.preventDefault();

        if (memoInvalid) {
            return;
        }
        // memoCtx.addMemo(title, content)
        memoCtx.addMemo(userInput.title, userInput.content)
        // setTitle("")
        // setContent("")
        setUserInput({
            title:"",
            content:""
        })
    }

    const formClass = memoInvalid ? "form invalid" : "form"

    return (
        <form onSubmit={submitHandler} className={formClass}>
            <label htmlFor="Keeper">New Memo</label>
            <input id="title" placeholder="Title" value={userInput.title} onChange={changeHandler} />
            <textarea id="content" rows={3} placeholder="Memo" value={userInput.content} onChange={changeHandler} />
            {memoInvalid ? <p className="invalid">Please insert both title and content</p> : null}
            <button>+</button>
        </form>
    )
}
export default CreateMemo