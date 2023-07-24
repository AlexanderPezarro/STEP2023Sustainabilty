import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns = [
    { field: 'id', headerName: 'Module Code', width: 100 },
    { field: 'module_name', headerName: 'Module Name', width: 300 },
    {
        field: 'average',
        headerName: 'Overall',
        type: 'number',
        width: 90,
    },
    {
        field: 'q1',
        headerName: 'Q1',
        type: 'number',
        width: 90,
    },
    {
        field: 'q2',
        headerName: 'Q2',
        type: 'number',
        width: 90,
    },
];

var rows = [
    { id: "CS1002", module_name: 'Object-Oriented Programming', q1: 3, q2: 3 },
    { id: "CS1003", module_name: 'Programming with Data', q1: 4, q2: 2 },
];

export default function Table() {
    const [data, setData] = useState([])
    const [average, setAvearge] = useState(0)
    useEffect(() => {
        rows.map((row) => {
            var average = 0;
            for (var i in row) {
                if(!isNaN(row[i])){
                    average += row[i]
                }
                
            }
            row.overall = average/(Object.keys(row).length-2)
            console.log(row.overall)
        })
    }, [])

    // useEffect(() => {
    //     console.log(average)
    // },[average])

    // console.log(average)

    const addData = (data) => {
        var average = (data.q1 + data.q2) / 2
        setData((prevState) => [...prevState, { id: data.id, module_name: data.module_name, }])
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    );
}
