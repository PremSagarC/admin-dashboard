import React, { useState } from 'react'
import './Datatable.scss'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from '../../datatable.js'

const Datatable = () => {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item => item.id !== id)))
    }

    const actionColumn = [{
        field: "action", headername: "Action", width: 300,
        renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to="/users/test" style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }]

    return (
        <div className='datatable'>
            <div className="dataTitle">
                Add New User
                <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid className='datagrid'
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable