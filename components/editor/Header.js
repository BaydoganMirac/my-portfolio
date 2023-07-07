import { useState } from "react";
import Tab from "./Tab";

export default function Header({ page, pageList}){
    const [ pages, setPages ] = useState(pageList);
    const pageComponent = pages.map((element, index) => {
                 return <Tab key={index} active={element == page } name={element}></Tab>
            })
    
    return (
    <>
        <div className="w-[96%]">
            <div className="bg-[#191919] h-10 w-full flex flex-row justify-between gap-0 overflow-y-auto">
                <div className="h-10 flex flex-row gap-0 overflow-y-auto">
                    {
                        pageComponent
                    }
                </div>
            </div>
        </div>
    </>
    )
}