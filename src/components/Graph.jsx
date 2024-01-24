import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { BarsDataOrganize } from '../utilies/DataForChart'
import { useStateContext } from '../contexts/ContextProvider';


const Graph = () => {

    const { FilterRecord, currentColor } = useStateContext()

    const OrganizedData = BarsDataOrganize([...FilterRecord])

    const MonthData = OrganizedData[0]
    const AssetData = OrganizedData[1]
    const LiabData = OrganizedData[2]



    return (

        <div className="container-item bar-chart-main" style={{ border: `${currentColor} 1px solid` }}>

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

        </div>




    )
}

export default Graph
