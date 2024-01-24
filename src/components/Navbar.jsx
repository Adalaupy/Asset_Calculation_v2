import React from 'react'
import { TiTickOutline } from 'react-icons/ti'
import { useStateContext } from '../contexts/ContextProvider'


const Navbar = () => {

    const { InputActive, setInputActive, GraphActive, setGraphActive, TableActive, setTableActive, TotalActive, setTotalActive, currentColor } = useStateContext()



    return (


        <div className='active-main' style={{ backgroundColor: currentColor }} >

            <div className='active-box' >

                <button onClick={() => setInputActive((prev) => !prev)} style={{ backgroundColor: InputActive ? 'rgb(194, 190, 191,0.1)' : 'rgb(194, 190, 191,0.8)' }}>
                    {InputActive && <TiTickOutline />}
                    Input
                </button>

                <button onClick={() => setGraphActive((prev) => !prev)} style={{ backgroundColor: GraphActive ? 'rgb(188, 128, 196,0.1)' : 'rgb(188, 128, 196,0.8)' }}>
                    {GraphActive && <TiTickOutline />}
                    Graph
                </button>


                <button onClick={() => setTableActive((prev) => !prev)} style={{ backgroundColor: TableActive ? 'rgb(204, 126, 138,0.1)' : 'rgb(204, 126, 138,0.8)' }}>
                    {TableActive && <TiTickOutline />}
                    Table
                </button>



                <button onClick={() => setTotalActive((prev) => !prev)} style={{ backgroundColor: TotalActive ? 'rgb(186, 139, 115,0.1)' : 'rgb(186, 139, 115,0.8)' }}>
                    {TotalActive && <TiTickOutline />}
                    Total
                </button>

            </div>
        </div >
    )
}

export default Navbar