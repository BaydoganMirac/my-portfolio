import Header from "./Header"
import Code from "./Code"
export default function Editor({ page, pageList, pageContent }){
    return (<>
    <div className="w-full h-full">
        <Header page={page} pageList={pageList}></Header>
        <Code pageSource={pageContent}></Code>
    </div>
    </>)
}
