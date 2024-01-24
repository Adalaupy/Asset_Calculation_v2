import React, { useEffect } from 'react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useStateContext } from '../contexts/ContextProvider'
import DeleteIcon from '@mui/icons-material/DeleteOutlined';


const Table = () => {


    const { FilterRecord, ExchangeRateCalculate, AssetRecord, setAssetRecord, currentColor } = useStateContext()



    // delete function in Table
    const DeleteItem = (id) => () => {

        setAssetRecord(AssetRecord.filter((row) => row.id != id))


    }

    const Columns = [
        {
            field: 'YearMonth',
            headerName: 'Year Month',
            width: 90,
            align: 'left',
            headerAlign: 'left',
            editable: true
        },



        {
            field: 'Source',
            headerName: 'Source',
            width: 120,
            align: 'left',
            headerAlign: 'left',
            editable: true
        },



        {
            field: 'Type',
            headerName: 'Type',
            width: 80,
            align: 'left',
            headerAlign: 'left',
            editable: true
        },



        {
            field: 'Amount',
            headerName: 'Amount',
            type: 'Number',
            width: 120,
            align: 'left',
            headerAlign: 'left',
            editable: true
        },



        {
            field: 'Currency',
            headerName: 'Currency',
            width: 80,
            align: 'left',
            headerAlign: 'left',
            editable: true
        },



        {
            field: 'Amt_in_HK',
            headerName: 'Amount in HK',
            type: 'Number',
            width: 120,
            align: 'left',
            headerAlign: 'left',
            editable: true
        },



        {
            field: 'Logdate',
            headerName: 'Logdate',
            type: 'date',
            valueGetter: ({ value }) => value && new Date(value),
            width: 120,
            align: 'left',
            headerAlign: 'left',
            editable: true
        },

        {
            field: 'actions',
            type: 'actions',
            width: 100,
            headerName: 'Delete',
            getActions: ({ id }) => [
                <GridActionsCellItem icon={<DeleteIcon />} onClick={DeleteItem(id)} label="Delete" />
            ]
        }

    ]






    let DisplayRecord = FilterRecord


    const UpdateRow = (newRow) => {



        let amt = newRow.Amount
        let Curr = newRow.Currency
        let Amt_hk = ExchangeRateCalculate(Curr, amt)


        const updatedRow = { ...newRow, isNew: false, Amt_in_HK: Amt_hk };


        setAssetRecord(AssetRecord.map((row) => (
            row.id === newRow.id ? updatedRow : row
        )));

        return updatedRow;

    }





    return (


        <div className="container-item Table-main" style={{ border: `${currentColor} 1px solid` }}>

            <div className='Table-box' style={{ height: '600px' }}>


                <DataGrid
                    rows={DisplayRecord}
                    columns={Columns}
                    processRowUpdate={UpdateRow}

                />

            </div >
        </div>



    )
}

export default Table