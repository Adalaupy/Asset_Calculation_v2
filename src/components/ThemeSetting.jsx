import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { useStateContext } from '../contexts/ContextProvider';
import { MuiColorInput } from 'mui-color-input'

const ThemeSetting = () => {

    const { setThemeSettingActive, currentColor, setcurrentColor } = useStateContext()

    return (


        <div className='theme-setting-main'>


            <div className="cover"></div>



            <div className="set-box">


                <div className="item">
                    <div className='theme-set-top'>
                        <label>Setting</label>
                        <button className='btn close-set-btn' onClick={() => setThemeSettingActive(false)} style={{ color: currentColor }}>
                            <IoMdCloseCircle />
                        </button>
                    </div>

                    <MuiColorInput value={currentColor} onChange={setcurrentColor} />

                </div>

            </div>






        </div>
    )
}

export default ThemeSetting