import Image from "next/image";
import Link from "next/link";
import React, {  useEffect, useState } from "react";
function Navigation({ activePage, pageList, children }) {
    // TODO : Folder section will load from database
    const [sidebarStatus, setSidebarStatus] = useState(false);
    pageList = pageList === undefined ? [] : pageList;
    const pageListComponent = pageList.map((item, index) => {
        return <Link key={index} href={'/'+item}>
                        <a href="#" className={`flex items-center p-2 text-base font-normal rounded-lg text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 ${item == activePage ? 'font-bold bg-[#565656]': ''}` }>
                        <Image src={'/json.svg'} layout='intrinsic' height={20} width={20}  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 fill-yellow-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" alt="JSON"></Image>
                        <span className="flex-1 ml-3 whitespace-nowrap">{item}</span>                        </a>
                    </Link>
                
    })
    useEffect(()=> {
        window.addEventListener('resize', ()=>{
            setSidebarStatus(false);
        })
    })
    return (
        <>
        <div className="overflow-hidden bg-[#333333]">
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " onClick={()=>{setSidebarStatus(!sidebarStatus)}}>
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
            </button>
    
            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ${sidebarStatus ? 'contents' : ''}`} aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-[#333333] text-white">
                <a href="https://baydoganmirac.net/" className="flex items-center pl-2.5 mb-5">
                    <Image src={"/logobeyaz.png"} height={25} width={25} layout='intrinsic' className="h-6 mr-3 sm:h-7" alt="BaydoganMirac Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white ml-1 mb-1">BaydoganMirac</span>
                </a>
                {
                            pageListComponent
                } 
            </div>
            </aside>
    
            <div className="sm:ml-64 w-full h-[100vh]">
                {children}
            </div>
        </div>
        </>
    )
}
export default Navigation;
