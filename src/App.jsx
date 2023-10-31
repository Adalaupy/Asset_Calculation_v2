import { useState } from 'react'
import { Navbar, Input, Graph, Table, Total, Filter, ThemeSetting } from './components'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'
import { AiFillSetting } from 'react-icons/ai'



function App() {

  const { currentColor, InputActive, GraphActive, TableActive, TotalActive, ThemeSettingActive, setThemeSettingActive } = useStateContext()


  console.log(ThemeSettingActive)
  return (


    <div className='w-full bg-white h-screen'>


      {ThemeSettingActive && <ThemeSetting />}


      <Navbar />
      <Filter />




      <div className=' mt-16 h-screen w-full'>


        <div className='flex flex-wrap justify-center items-center gap-2'>

          {InputActive && (<Input />)}



          <div className='grid justify-center border-2'>

            {TableActive && (<Table />)}

            {TotalActive && (<Total />)}


          </div>





          <div className='ml-5'>
            {GraphActive && (<Graph />)}

          </div>


        </div>


      </div>


      <div className='fixed text-3xl m-5 right-3 bottom-3'>
        <button
          className='hover:shadow-lg rounded-3xl'
          style={{ color: currentColor }}
          onClick={() => setThemeSettingActive(true)}
        >
          <AiFillSetting />
        </button>
      </div>





    </div>
  )
}

export default App
