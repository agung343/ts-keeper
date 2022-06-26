import React, {useState} from "react";
import Memo from "../models/Memo";

type MemosObj = {
    memos: Memo[];
    addMemo: (title: string, content: string) => void
    deleteMemo: (id:string) => void
}

type Props = {
    children: React.ReactNode
}

export const MemoContext = React.createContext<MemosObj>({
    memos: [],
    addMemo:() => {},
    deleteMemo: (id:string) => {}   
})

export const MemoContextProvider: React.FC<Props> = (props) => {
    const [note, setNote] = useState<Memo[]>([])
    const addMemoHandler = (memoTitle: string, memoContext: string) => {
        const newNote = new Memo(memoTitle, memoContext);
        setNote((prevNote) => {
            return prevNote.concat(newNote)
        }) 
    }
    const deleteMemoHandler = (noteId: string) => {
        setNote((prevMemo) => {
            return prevMemo.filter(note => note.id !== noteId)
        })
    }

    const contextValue: MemosObj = {
         memos: note,
         addMemo: addMemoHandler,
         deleteMemo: deleteMemoHandler
    }

    return (
         <MemoContext.Provider value={contextValue}>
             {props.children}
         </MemoContext.Provider>
    )
} 