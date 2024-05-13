import React from 'react'
import whatsApp from "../../assets/Ватсап (1).svg"
import viber from "../../assets/Вайбер (1).svg"
import chat from "../../assets/Чат (1).svg"

const Wrapper = () => {
  return (
    <div className='header-section rounded-[36px]'>
        <div className='max-w-[1350px] m-auto text-[white] flex items-center h-[280px] justify-between'>
            <h1 className='text-[44px] font-[extrabold]'>Остались вопросы? Спросите нас в соцсетях!</h1>

            <div className='flex'>
                <img className='mr-[8px]' src={whatsApp} alt="" />
                <img className='mr-[8px]' src={viber} alt="" />
                <img src={chat} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Wrapper
