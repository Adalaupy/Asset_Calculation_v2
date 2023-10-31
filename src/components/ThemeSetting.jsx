import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { useStateContext } from '../contexts/ContextProvider';
import { MuiColorInput } from 'mui-color-input'

const ThemeSetting = () => {

    const { setThemeSettingActive, currentColor, setcurrentColor } = useStateContext()

    return (
        <div className='w-screen fixed top-0 right-0 bg-half-transparent themesetting'>
            <div className='h-screen bg-white w-400 float-right '>


                <div className='m-4'>



                    <div className='flex justify-between text-2xl p-3  '>
                        <p>Setting</p>
                        <button onClick={() => setThemeSettingActive(false)} style={{ color: currentColor }}>
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