import strelka from "../../assets/Vector 12.svg"

export default function Card5 ({img,title,time,price,all}){
    return (
        <div className="h-[104px] flex items-center">
                <div className="text-[#222222] dark:text-[#eee] ml-[30px] flex items-center pr-[400px] border-r border-solid border-[#C0C9D7]">
                    <div>
                    <img src={img} alt="" />
                    </div>
                    <p className="text-[18px] text-[#1F2428] dark:text-[#eee] font-[bold] ml-[27px]">{title}</p>
                </div>

                <div className="p-[0_50px] border-r border-solid border-[#C0C9D7]">
                    <p className="text-[14px]">Сроки:</p>
                    <h4 className="text-[20px] font-[bold]">{time}</h4>
                </div>

                <div className="p-[0_50px] border-r border-solid border-[#C0C9D7]">
                    <p className="text-[14px]">Стоимость доставки:</p>
                    <h4 className="text-[20px] font-[bold]">{price}</h4>
                </div>

                <div className="p-[0_50px] border-r border-solid border-[#C0C9D7]">
                <p className="text-[14px]">Итого:</p>
                    <h4 className="text-[20px] font-[bold]">{all}</h4>
                </div>

                <div className="p-[0_17px]">
                    <img src={strelka} alt="" />
                </div>
        </div>
    )
}