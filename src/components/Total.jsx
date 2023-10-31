import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'



const Total = () => {

    const { MonthYearFilter, SourceFilter, TypeFilter, Sum_Asset, Sum_Liability, Sum_Capital } = useStateContext()


    let filterList = []

    filterList = MonthYearFilter != '' ? [...filterList, { text: MonthYearFilter, color: '#32a852' }] : filterList
    filterList = SourceFilter != '' ? [...filterList, { text: SourceFilter, color: '#eb64ed' }] : filterList
    filterList = TypeFilter != '' ? [...filterList, { text: TypeFilter, color: '#e6ac50' }] : filterList


    return (

        <div className=' bg-gray-100 m-6 rounded-2xl p-5 w-400'>


            {/* Show Current Filter */}
            <div>
                {filterList.map((item) => (
                    <button key={item.text} className='text-white m-2 p-1 pl-3 pr-3 rounded-3xl hover:shadow-2xl' style={{ backgroundColor: item.color }}>
                        {item.text}
                    </button>
                ))}
            </div>


            <div className='mt-3'>

                <div className='mt-2 flex justify-between '>
                    <label>Total Asset :</label>
                    <label className='ml-5 font-bold' >{Sum_Asset}</label>
                </div>

                <div className='mt-2 flex justify-between'>
                    <label>Total Liability :</label>
                    <label className='ml-5 font-bold' >{Sum_Liability}</label>
                </div>

                <div className='mt-4 flex justify-between border-t-2 pt-3 border-slate-300  '>
                    <label>Total Capital (Asset - Liability) :</label>
                    <label className='ml-5 font-bold' style={{ color: Sum_Capital > 0 ? 'blue' : 'red' }}>{Sum_Capital}</label>
                </div>





            </div>











        </div >
    )
}

export default Total