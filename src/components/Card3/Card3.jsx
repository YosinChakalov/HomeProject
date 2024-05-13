export default function Card3({img,title,cardStyle,containerCard}) {
    return(
        <div className={`flex items-center h-[180px] pr-[70px] border-r border-solid border-[#C0C9D7] ${containerCard}`}>
            <div className={`mr-[26px]`}>
                <img src={img} alt="" />
            </div>
            <p className={`text-[18px] text-[#1F2428] font-[bold] dark:text-[#eee] ${cardStyle}`}>{title}</p>
        </div>
    )
}