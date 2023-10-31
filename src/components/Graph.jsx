import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { BarsDataOrganize } from '../utilies/DataForChart'
import { useStateContext } from '../contexts/ContextProvider';


const Graph = () => {

    const { FilterRecord } = useStateContext()

    const OrganizedData = BarsDataOrganize([...FilterRecord])

    const MonthData = OrganizedData[0]
    const AssetData = OrganizedData[1]
    const LiabData = OrganizedData[2]



    return (

        <BarChart
            width={600}
            height={800}
            series={[
                {
                    data: AssetData,
                    label: 'Asset',
                    id: 'AssetID',
                },
                {
                    data: LiabData,
                    label: 'Liability',
                    id: 'LiabID',
                }
            ]}
            xAxis={[{ data: MonthData, scaleType: 'band' }]}
        />


    )
}

export default Graph
