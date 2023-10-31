import React from 'react'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useStateContext } from '../contexts/ContextProvider'
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';


const Input = () => {

    const { currentColor, TypeOption, SourceOption, defaultMonthYear, setdefaultMonthYear, MonthYearInput, setMonthYearInput, AssetRecord, setAssetRecord, SourceInput, setSourceInput, TypeInput, setTypeInput, AmountInput, setAmountInput, CurrencyInput, setCurrencyInput, UpdateInsertRecord } = useStateContext()


    const MonthYearUpdate = (newValue) => {


        setdefaultMonthYear(newValue)

        let ModifiedNewValue = newValue.$y.toString() + (newValue.$M + 1).toString().padStart(2, '0')

        setMonthYearInput(ModifiedNewValue)

    }


    return (

        <div className=' bg-gray-100 w-96 rounded-2xl grid justify-center'>


            <div className='p-3'>


                <p className='mb-5 text-2xl font-bold text-center border-b-4 border-slate-400 p-2'>Input New Record</p>

                {/* Month Year */}
                <div className='flex items-center gap-5 justify-between mb-5'>

                    <label className='text-xl left-2'>Month:</label>

                    <div className='w-2/3'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                defaultValue={defaultMonthYear}
                                format='YYYY-MM'
                                label={'Month Year'}
                                views={['month', 'year']}
                                onChange={(newValue) => MonthYearUpdate(newValue)}
                            />
                        </LocalizationProvider>
                    </div>

                </div>




                {/* Source */}
                <div className='mb-5 flex items-center gap-5 justify-between'>
                    <label className='text-xl'>Source:</label>

                    <div className='w-2/3'>
                        <Autocomplete
                            freeSolo
                            id='source-free-solo'
                            value={SourceInput}
                            options={SourceOption}
                            renderInput={(params) => <TextField id={params} {...params} label='Source' />}
                            onInputChange={(e, newValue) => { setSourceInput(newValue) }}

                        />

                    </div>
                </div>


                {/* Type */}

                <div className='flex items-center gap-5 justify-between mb-5'>

                    <label className='text-xl left-2'>Type:</label>

                    <div className='w-2/3'>
                        <Autocomplete
                            freeSolo
                            id='type-free-solo'
                            value={TypeInput}
                            options={TypeOption}
                            renderInput={(params) => <TextField id={params} {...params} label='Type' />}
                            onInputChange={(e, newValue) => { setTypeInput(newValue) }}
                        />
                    </div>

                </div>



                {/* Amount */}

                <div className='flex items-center gap-5 justify-between mb-5'>

                    <label className='text-xl left-2'>Amount:</label>

                    <div className='w-2/3 ml-5'>

                        <TextField value={AmountInput} inputProps={{ type: 'number', inputMode: 'numeric' }} label='$' variant='standard' onChange={(e) => { setAmountInput(e.target.value) }} />

                    </div>

                </div>





                {/* Currency */}

                <div className='flex items-center gap-5 justify-between mb-5'>

                    <label className='text-xl left-2'>Currency:</label>

                    <div className='w-2/3'>
                        <Autocomplete
                            freeSolo
                            id='Currency-free-solo'
                            value={CurrencyInput}
                            options={[...new Set(AssetRecord.map((item) => item.Currency))]}
                            renderInput={(params) => <TextField id={params} {...params} label='Currency' />}
                            onInputChange={(e, newValue) => { setCurrencyInput(newValue) }}
                        />
                    </div>

                </div>


            </div>



            <div className='flex justify-center h-28'>

                <button className=' bottom-0 p-3 m-2 rounded-2xl w-40 h-8 items-center flex justify-center text-white hover:shadow-lg'
                    style={{ backgroundColor: currentColor }}
                    onClick={UpdateInsertRecord}
                >
                    Submit
                </button>

            </div>



        </div>
    )
}

export default Input