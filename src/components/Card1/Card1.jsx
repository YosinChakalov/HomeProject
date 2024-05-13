export default function Card1 ({img,title}){
    return (
        <div className="flex items-center h-[100px] dark:text-[#eee] dark:bg-[#14143d]">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="ml-[17px]">
                <p className="text-[16px] text-[#1F2428] font-[bold] dark:text-[#eee]">{title}</p>
            </div>
        </div>
    )
}