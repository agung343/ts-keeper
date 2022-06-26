class Memo {
    id: string
    title: string
    content: string

    constructor(memoTitle: string, memoContent:string) {
        this.id= new Date().toISOString()
        this.title = memoTitle
        this.content= memoContent
    }
}

export default Memo