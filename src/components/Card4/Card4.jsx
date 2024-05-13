import strelka from "../../assets/Vector 7.svg"

export default function Card4 ({title,img,name}){
    return (
        <div className="w-[238px] text-[#222222] dark:text-[#eee]">
            <h5 className="text-[14px] font-[bold] mb-[15px]">{title}</h5>

            <div className="flex items-center justify-between p-[15px_0] border-b border-solid border-[#222222] dark:border-[#eee]">
                <p className="text-[16px] font-[light] flex items-center"><img className="mr-[15px]" src={img} alt="" />{name}</p>

                <div>
                    <img src={strelka} alt="" />
                </div>
            </div>
        </div>
    )
}