import { Navbar, Input, Graph, Table, Total, Filter, ThemeSetting } from './components'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'
import { AiFillSetting } from 'react-icons/ai'



function App() {

    const { currentColor, InputActive, GraphActive, TableActive, TotalActive, ThemeSettingActive, setThemeSettingActive } = useStateContext()

    return (


        <div className='asset-main'>




            {ThemeSettingActive && <ThemeSetting />}

            <div className="content-main">


                <Navbar />


                <div className="data-main">

                    <Filter />


                    <div className='asset-content-box'>

                        {InputActive && (<Input />)}



                        <div className='table-total-main'>

                            {TableActive && (<Table />)}

                            {TotalActive && (<Total />)}


                        </div>





                        <div className=''>
                            {GraphActive && (<Graph />)}

                        </div>


                    </div>


                </div>



                <button
                    className='btn theme-set-btn'
                    style={{ color: currentColor }}
                    onClick={() => setThemeSettingActive((prev) => !prev)}
                >
                    <AiFillSetting />
                </button>



            </div>




        </div>
    )
}

export default App
