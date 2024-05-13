export default function Card_one({img,title,desc,btn}) {
    return (
    <div className="startPage rounded-[36px]">
        <div className="max-w-[1290px] m-auto h-[480px] flex items-center justify-center">
        <div>
            <img src={img} alt="" />
        </div>

        <div className="w-[763px] text-[white] ml-[65px]">
            <h3 className="text-[30px] leading-[40px] font-[bold]">{title}</h3>
            <p className="text-[18px] w-[834px] mt-[11px]">{desc}</p>
            <button className="text-[17px] font-[bold] mt-[30px] h-[66px] w-[240px] btnContact rounded-[36px] shadow-[0px_4px_4px_0px_#01CB7C33]">{btn}</button>
        </div>
    </div>
    </div>
    )
}