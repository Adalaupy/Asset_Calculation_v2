import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'



const Total = () => {

    const { MonthYearFilter, SourceFilter, TypeFilter, Sum_Asset, Sum_Liability, Sum_Capital, currentColor } = useStateContext()


    let filterList = []

    filterList = MonthYearFilter != '' ? [...filterList, { text: MonthYearFilter, color: '#32a852' }] : filterList
    filterList = SourceFilter != '' ? [...filterList, { text: SourceFilter, color: '#eb64ed' }] : filterList
    filterList = TypeFilter != '' ? [...filterList, { text: TypeFilter, color: '#e6ac50' }] : filterList


    return (

        <div className='container-item total-main' style={{ border: `${currentColor} 1px solid` }}>

            {filterList != '' ? (

                /* Show Current Filter */
                <div className='filter-display' >
                    {filterList.map((item) => (
                        <button key={item.text} className='filter-display-item' style={{ backgroundColor: item.color }}>
                            {item.text}
                        </button>
                    ))}
                </div>

            ) : ''}




            <div className='All-amt-box'>

                <div className='amt-box'>
                    <label class='total-label'>Total Asset :</label>
                    <label  >{Sum_Asset}</label>
                </div>

                <div className='amt-box'>
                    <label class='total-label'>Total Liability :</label>
                    <label  >{Sum_Liability}</label>
                </div>

                <div className='amt-box total-cap'>
                    <label class='total-label'>Total Capital (Asset - Liability) :</label>
                    <label style={{ color: Sum_Capital > 0 ? 'blue' : 'red' }}>{Sum_Capital}</label>
                </div>


            </div>

        </div >
    )
}

export default Total