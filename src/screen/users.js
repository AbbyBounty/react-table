import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getUsers, getAllUsers } from '../actions/userAction'
import Download from "../component/Download"
const Users = () => {

    const users = useSelector((store) => store.users)
    const dispatch = useDispatch()
    const { error, response, loading } = users

    

    const headers = [
        { label: "Id", key: "id" },
        { label: "Name", key: "name" },
        { label: "Username", key: "username" },
        { label: "Email", key: "email" },
    ];

    useEffect(() => {
        dispatch(getUsers(3))
    }, [])




    const onRowClick = (row) => {
        dispatch(getUsers(row))
    }

    const downloadAll = () => {
        console.log('test')
        dispatch(getAllUsers())
    }

    


    return (
        <div >

            <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Employee <b>Details</b></h2></div>

                        </div>
                    </div>



                    <table className="table table-bordered" id="table-to-xls">
                        <thead>
                            <tr>
                                <th>

                                    <button>
                                        ID
                                    </button>
                                </th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                response &&
                                response.length > 0 &&
                                response.map((user, i) => {
                                    return (

                                        <tr key={i}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>

                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
                <div className="flex">
                    <div className="border p-3">
                        <button onClick={() => { onRowClick(5) }}>5</button>
                    </div>
                    <div className="border p-3">
                        <button onClick={() => { onRowClick(7) }}>7</button>
                    </div>
                    <div className="border p-3 mr-3">
                        <button onClick={() => onRowClick(10)}>10</button>
                    </div>
                    {
                        response &&
                        response.length > 0 && <Download headers={headers} data={response} name={"As Shown"} ></Download>}

                    <button onClick={()=>downloadAll()}>
                        {
                            response &&
                            response.length > 0 && <Download headers={headers} data={response} name={"All"} ></Download>}
                    </button>
                </div>

            </div>


        </div >
    )
}


export default Users