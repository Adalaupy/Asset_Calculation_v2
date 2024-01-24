import React from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useStateContext } from '../contexts/ContextProvider'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

const Filter = () => {



    const { MonthYearFilter, setMonthYearFilter, SourceFilter, setSourceFilter, TypeFilter, setTypeFilter, MonthYearOption, SourceOption, TypeOption, currentColor } = useStateContext()



    return (

        <div className='filter-main'>


            <div className='container-item filter-box' style={{ border: `${currentColor} solid 1px` }}>

                <h2 style={{ textAlign: 'center' }}>Filters</h2>



                <div className="filter-content">

                    <FormControl sx={{ m: 1, minWidth: 120 }} >


                        <FormHelperText>Month Year</FormHelperText>
                        <Select
                            value={MonthYearFilter}
                            id='select-monthyear-helper'
                            lable='Month Year'
                            onChange={(e) => { setMonthYearFilter(e.target.value) }}
                        >
                            <MenuItem value=''><em>None</em></MenuItem>
                            {MonthYearOption.map((item) => (
                                <MenuItem key={item} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>




                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <FormHelperText>Source</FormHelperText>
                        <Select
                            value={SourceFilter}
                            id='select-source-helper'
                            lable='source'
                            onChange={(e) => { setSourceFilter(e.target.value) }}
                        >
                            <MenuItem value=''><em>None</em></MenuItem>
                            {SourceOption.map((item) => (
                                <MenuItem key={item} value={item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>



                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <FormHelperText>Type</FormHelperText>
                        <Select
                            value={TypeFilter}
                            id='select-type-helper'
                            lable='type'
                            onChange={(e) => { setTypeFilter(e.target.value) }}
                        >
                            <MenuItem value=''><em>None</em></MenuItem>
                            {TypeOption.map((item) => (
                                <MenuItem key={item} value={item}>{item}</MenuItem>
                            ))}
                        </Select>

                    </FormControl>
                </div>





            </div >
        </div >
    )
}

export default Filter