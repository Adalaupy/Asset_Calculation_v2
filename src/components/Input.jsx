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

        <div className='container-item item-input-main' style={{ border: `${currentColor} 1px solid` }}>


            <div className='item-input-box' >


                <p className='input-title'>Input New Record</p>

                {/* Month Year */}
                <div className='input-box'>

                    <label className=''>Month:</label>

                    <div className='auto-input'>
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
                <div className='input-box'>
                    <label className=''>Source:</label>

                    <div className='auto-input'>
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

                <div className='input-box'>

                    <label className=''>Type:</label>

                    <div className='auto-input'>
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

                <div className='input-box'>

                    <label className=''>Amount:</label>

                    <div className='auto-input'>

                        <TextField value={AmountInput} inputProps={{ type: 'number', inputMode: 'numeric' }} label='$' variant='standard' onChange={(e) => { setAmountInput(e.target.value) }} />

                    </div>

                </div>





                {/* Currency */}

                <div className='input-box'>

                    <label className=''>Currency:</label>

                    <div className='auto-input'>
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



            <div style={{ textAlign: 'center' }}>

                <button className='submit-btn'
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