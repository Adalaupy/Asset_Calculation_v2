


export const BarsDataOrganize = (data) => {




    let YearMonthList = [...new Set(data.map(item => item.YearMonth))]
    let result = []


    YearMonthList.forEach((yearItem) => {

        let requireddata = data.filter(eachitem => eachitem.YearMonth === yearItem)

        let this_assetAmt = 0
        let this_liabAmt = 0

        requireddata.forEach((item) => {
            this_assetAmt += item.Type === 'Asset' && item.Amt_in_HK
            this_liabAmt += item.Type === 'Liability' && item.Amt_in_HK
        })

        result = [...result, { 'YearMonth': yearItem, 'Asset': this_assetAmt, 'Liability': this_liabAmt }]

    })


    const MonthData = result.map(item => item.YearMonth)
    const AData = result.map(item => item.Asset)
    const LData = result.map(item => item.Liability)


    return [MonthData, AData, LData]

}