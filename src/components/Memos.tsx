import React, { useContext } from "react";
import MemoItem from "./MemoItem";
import { MemoContext } from "../store/memo-context";

const Memos:React.FC = () => {
    const memoCtx = useContext(MemoContext);

    return (<>
        {memoCtx.memos.map(memo => <MemoItem 
        key={memo.id} title={memo.title} 
        content={memo.content} 
        onDelete={memoCtx.deleteMemo.bind(null, memo.id)} />)}
    </>)
}

export default Memos