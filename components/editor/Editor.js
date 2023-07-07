import Header from "./Header"
import Code from "./Code"
import axios from "axios"
import { useEffect, useState } from "react"
export default function Editor({ page, pageList }){
    const [pageContent, setPageContent] = useState(null);
    useEffect(()=>{
        const updateContent = async () =>{
            let res = await axios.get('http://localhost:3000/api/content/'+page)
            setPageContent(res.data)
        }
        updateContent();
    }, [page])
    return (<>
    <div className="w-full h-full">
        <Header page={page} pageList={pageList}></Header>
        <Code pageSource={pageContent}></Code>
    </div>
    </>)
}