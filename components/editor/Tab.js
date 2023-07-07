import Link from "next/link";
import Image from "next/image";
export default function Tab({active = false, name = 'Untitled'}){
    return(
        <>
        <Link key={name} href={'/'+name}>
            <a>
                <div className={'flex flex-row gap-2 p-2 h-10 w-min-24 ' + (active ? 'bg-[#333333]' : ' bg-[#191919] bg-opacity-100')}>
                    <div className="m-auto flex justify-center items-center">       
                        <Image src={"/json.svg"} layout="intrinsic" style={{margin : "auto"}} height={18} width={18} alt="JSON"></Image>
                    </div>
                    <div className={active ?  'text-white' : 'text-white text-opacity-80'} >
                        {name}
                    </div>
                </div>
            </a>
        </Link>
        </>
    )
}