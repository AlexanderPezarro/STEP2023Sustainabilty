import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getModuleFromSchool, getResults, getRanks } from '../api';
import Typography from '@mui/material/Typography';

// var rows = [
//     { id: "CS1002", module_name: 'Object-Oriented Programming', q1: 3, q2: 3 },
//     { id: "CS1003", module_name: 'Programming with Data', q1: 4, q2: 2 },
// ];

export default function Table(props) {
    const [modules, setModules] = useState([])
    const [rank, setRank] = useState([])
    const [valid, setValid] = useState(false)
    const [complete, setComplete] = useState(false)
    const [columns, setColumns] = useState(
        [
            { field: 'id', headerName: 'Module Code', width: 100 },
            { field: 'module_name', headerName: 'Module Name', width: 300 },
        ]
    )
    const [rows, setRows] = useState([])

    useEffect(() => {
        console.log(props.school.name)

        getModuleFromSchool(props.school.name)
            .then(res => {
                if (res.data !== undefined && res.data.length === 0) {
                    setModules(["No modules"]);
                } else {
                    setModules(res.data);
                }
            }).catch(err => {
                console.log(`School.js: ${err}`);
                setModules(["No modules"]);
            })
    }, [])

    useEffect(() => {

        modules.map((module) => {
            getResults(module.code)
                .then((res) => {
                    // console.log(res)
                    if (res.data.average !== null && res.data !== undefined) {
                        setRank((prevState) => [...prevState, res.data])
                    }
                })
                .catch(err => {
                    if (err.response.status === 500)
                        console.log(err.res)
                })
        })







    }, [modules])

    useEffect(() => {
        if (rank == undefined || rank.length === undefined) return
        else if (rank.length > 0) {
            initiTable()
            const initialColumns = [{ id: 0, rank_name: "Overall" }]
            const list = []
            for (const [key, value] of Object.entries(rank[0])) {
                list.push([`${key}`, `${value}`]);
            }
            async function createheader() {

                for (let i in list) {
                    if (!isNaN(list[i][0])) {
                        await getRanks(list[i][0]).then((ran) => {
                            if (ran.data.length > 0) {
                                initialColumns.push({ id: ran.data[0].id, rank_name: ran.data[0].rank_name })
                            }
                        })
                    }
                }

                return initialColumns
            }

            createheader().then(res => {
                const uniqueColumns = [...new Map(res.map(v => [v.id, v])).values()]
                console.log(uniqueColumns)
                setColumns([
                    { field: 'id', headerName: 'Module Code', width: 100 },
                    { field: 'module_name', headerName: 'Module Name', width: 300 },
                ])
                uniqueColumns.map((column) => {
                    setColumns((prevState) => [...prevState, {
                        field: column.id,
                        headerName: column.rank_name,
                        type: 'number',
                        width: 90,
                    }])
                })
                return uniqueColumns;
            }).then(res => {
                setValid(true)
                setRows([])
                console.log(columns)
                rank.map((score) => {
                    console.log(score)
                    const initialRow = { 'id': score.id, 'module_name': score.module_name}
                    for (let i in initialColumns) {
                        if(i == 0) {
                            const key = res[0].id
                            const val = score.average
                            initialRow[key] = val
                            console.log(val, initialRow[key]) 
                        }
                        else if (i > 0) {
                            const key = res[i].id
                            const val = score[key]
                            initialRow[key] = val
                            // console.log(val, initialRow[key])
                        }
                        // console.log(initialRow)

                    }
                    setRows((prevState) => [JSON.parse(JSON.stringify(initialRow)),...prevState])

                })
            })
        }

    }, [rank])

    useEffect(() => {
        if (rows === undefined) setComplete(false)
        else if (rows.length > 0) {
            // console.log(rows)
            setComplete(true)
        }
    }, [rows])


    // console.log(average)

    const initiTable = () => {
        console.log("in")
        setRows([])
        setColumns([
            { field: 'id', headerName: 'Module Code', width: 100 },
            { field: 'module_name', headerName: 'Module Name', width: 300 },
        ])
    }

    const Data = () => {
        return (
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                loading={!complete}
            />
        )



    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            {valid ? (<Data />
            ) : (<Typography color="d0d3d4" variant="h5" component="span">No survey results</Typography>)
            }

        </div >
    );
}
