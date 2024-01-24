import React, { createContext, useContext, useEffect, useState } from 'react'
import { RawData, ExchangeRate } from '../utilies/data'
import dayjs from 'dayjs';
import { randomId } from '@mui/x-data-grid-generator';


const StateContext = createContext()




export const ContextProvider = ({ children }) => {


    const SortFuntion = (Record, Column) => {

        Record.sort((a, b) => {

            if (a[Column].toUpperCase() < b[Column].toUpperCase()) {
                return -1
            }
            if (a[Column].toUpperCase() > b[Column].toUpperCase()) {
                return 1
            }

            return 0
        })


    }


    const AllSort = (data) => {

        SortFuntion(data, 'Logdate')
        SortFuntion(data, 'Type')
        SortFuntion(data, 'Source')
        SortFuntion(data, 'YearMonth')

    }



    // Function for Add ID to Raw Data + Sorting
    const RecordAddID = (Record) => {

        let currentData = [...Record]

        AllSort(currentData)




        for (let i = 0; i < currentData.length; i++) {
            currentData[i] = Object.assign(currentData[i], { id: randomId() })
        }

        return currentData

    }





    // is Button Active
    const [InputActive, setInputActive] = useState(true)
    const [GraphActive, setGraphActive] = useState(true)
    const [TableActive, setTableActive] = useState(true)
    const [TotalActive, setTotalActive] = useState(true)
    const [ThemeSettingActive, setThemeSettingActive] = useState(false)



    // Raw Data
    const [AssetRecord, setAssetRecord] = useState(RecordAddID(RawData))
    const [FilterRecord, setFilterRecord] = useState([...AssetRecord])


    // New Input 
    const [defaultMonthYear, setdefaultMonthYear] = useState(dayjs(new Date))
    const [MonthYearInput, setMonthYearInput] = useState(new Date().toJSON().slice(0, 7).replace('-', ''))
    const [SourceInput, setSourceInput] = useState('')
    const [TypeInput, setTypeInput] = useState('')
    const [AmountInput, setAmountInput] = useState('')
    const [CurrencyInput, setCurrencyInput] = useState('')

    // Color
    const [currentColor, setcurrentColor] = useState('#6b34eb')


    //Filter
    const [MonthYearFilter, setMonthYearFilter] = useState('')
    const [SourceFilter, setSourceFilter] = useState('')
    const [TypeFilter, setTypeFilter] = useState('')


    // Array of Filter Option
    let MonthYearOption = [...new Set(FilterRecord.map((item) => item.YearMonth))]
    let SourceOption = [...new Set(FilterRecord.map((item) => item.Source))].sort()
    let TypeOption = [...new Set(FilterRecord.map((item) => item.Type))]


    // Caluation Variable 
    const [Sum_Asset, setSum_Asset] = useState(0)
    const [Sum_Liability, setSum_Liability] = useState(0)
    const [Sum_Capital, setSum_Capital] = useState(0)





    // Function for Handle foreign currency
    const ExchangeRateCalculate = (Cur, Amt) => {


        let Amt_in_HK

        if (Cur != 'HKD') {


            let HK_rate = ExchangeRate['0']['HKD']['value']
            let Other_rate = ExchangeRate['0'][Cur]['value']


            Amt_in_HK = parseFloat(Amt) * parseFloat(HK_rate) / parseFloat(Other_rate)


        } else {

            Amt_in_HK = parseFloat(Amt)
        }

        Amt_in_HK = parseFloat(Amt_in_HK.toFixed(2))


        return Amt_in_HK


    }






    // Function for Insert New Record
    const UpdateInsertRecord = () => {


        let NewRecord
        let currentDate = new Date().toJSON().slice(0, 10)
        let Amt_HK = ExchangeRateCalculate(CurrencyInput, AmountInput)


        NewRecord = [
            {
                "YearMonth": MonthYearInput,
                "Source": SourceInput,
                "Type": TypeInput,
                "Amount": Number(parseFloat(AmountInput).toFixed(2)),
                "Currency": CurrencyInput,
                "Amt_in_HK": Number(Amt_HK),
                "Logdate": currentDate,
                "id": randomId()
            },
        ]


        setAssetRecord([...AssetRecord, ...NewRecord])



        //reset Variable
        // setMonthYearInput(new Date().toJSON().slice(0, 7).replace('-', ''))
        setSourceInput('')
        setTypeInput('')
        setAmountInput('')
        setCurrencyInput('')
        setMonthYearFilter('')
        setSourceFilter('')
        setTypeFilter('')

    }


    const Func_CalData = (Data) => {



        let SumAsset = 0
        let SumLiab = 0
        let SumCap = 0

        for (let i = 0; i < Data.length; i++) {

            SumAsset += Data[i].Type === 'Asset' && Data[i].Amt_in_HK
            SumLiab += Data[i].Type === 'Liability' && Data[i].Amt_in_HK

        }


        SumCap = SumAsset - SumLiab

        setSum_Asset(SumAsset.toFixed(2))
        setSum_Liability(SumLiab.toFixed(2))
        setSum_Capital(SumCap.toFixed(2))


    }




    // Update FilterData After Modify Data
    useEffect(() => {

        AllSort(AssetRecord)

        let filterData = [...AssetRecord]

        filterData = MonthYearFilter != '--' && filterData.filter(item => item.YearMonth.includes(MonthYearFilter))
        filterData = SourceFilter != '--' && filterData.filter(item => item.Source.includes(SourceFilter))
        filterData = TypeFilter != '--' && filterData.filter(item => item.Type.includes(TypeFilter))

        setFilterRecord(filterData)

        Func_CalData(filterData)

    }, [MonthYearFilter, SourceFilter, TypeFilter, AssetRecord])



    useEffect(() => {

        Func_CalData(AssetRecord)

    }, [])









    return (

        <StateContext.Provider
            value={{
                InputActive, setInputActive
                , GraphActive, setGraphActive
                , TableActive, setTableActive
                , TotalActive, setTotalActive
                , ThemeSettingActive, setThemeSettingActive

                , AssetRecord, setAssetRecord
                , FilterRecord, setFilterRecord


                , MonthYearInput, setMonthYearInput
                , SourceInput, setSourceInput
                , TypeInput, setTypeInput
                , AmountInput, setAmountInput
                , CurrencyInput, setCurrencyInput

                , UpdateInsertRecord
                , defaultMonthYear, setdefaultMonthYear
                , ExchangeRateCalculate

                , MonthYearFilter, setMonthYearFilter
                , SourceFilter, setSourceFilter
                , TypeFilter, setTypeFilter

                , MonthYearOption, SourceOption, TypeOption
                , Sum_Asset, Sum_Liability, Sum_Capital

                , currentColor, setcurrentColor
            }}
        >
            {children}
        </StateContext.Provider>
    )

}


export const useStateContext = () => useContext(StateContext)