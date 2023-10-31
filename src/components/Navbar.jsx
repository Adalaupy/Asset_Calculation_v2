import React from 'react'
import { TiTickOutline } from 'react-icons/ti'
import { useStateContext } from '../contexts/ContextProvider'


const Navbar = () => {

    const { InputActive, setInputActive, GraphActive, setGraphActive, TableActive, setTableActive, TotalActive, setTotalActive, currentColor } = useStateContext()



    return (


        <div className=' flex w-full h-16 items-center z-50 ' style={{ backgroundColor: currentColor }} >

            <div className='absolute flex items-center gap-5 right-5' >

                <button className=' flex justify-center items-center text-xl m-3 p-1 rounded-2xl w-32 h-8 hover:shadow-2xl' onClick={() => setInputActive((prev) => !prev)} style={{ backgroundColor: InputActive ? 'rgb(194, 190, 191,0.1)' : 'rgb(194, 190, 191,0.8)', color: 'white' }}>
                    <TiTickOutline />
                    <p className='font-semibold '>Input</p>
                </button>

                <button className='flex justify-center items-center text-xl m-3 p-1 rounded-2xl w-32 h-8' onClick={() => setGraphActive((prev) => !prev)} style={{ backgroundColor: GraphActive ? 'rgb(188, 128, 196,0.1)' : 'rgb(188, 128, 196,0.8)', color: 'white' }}>
                    <TiTickOutline />
                    <p className='font-semibold '>Graph</p>
                </button>


                <button className=' flex justify-center items-center text-xl m-3 p-1 rounded-2xl w-32 h-8' onClick={() => setTableActive((prev) => !prev)} style={{ backgroundColor: TableActive ? 'rgb(204, 126, 138,0.1)' : 'rgb(204, 126, 138,0.8)', color: 'white' }}>
                    <TiTickOutline />
                    <p className='font-semibold '>Table</p>
                </button>



                <button className=' flex justify-center items-center text-xl m-3 p-1 rounded-2xl w-32 h-8' onClick={() => setTotalActive((prev) => !prev)} style={{ backgroundColor: TotalActive ? 'rgb(186, 139, 115,0.1)' : 'rgb(186, 139, 115,0.8)', color: 'white' }}>
                    <TiTickOutline />
                    <p className='font-semibold '>Total</p>
                </button>

            </div>
        </div >
    )
}

export default Navbar