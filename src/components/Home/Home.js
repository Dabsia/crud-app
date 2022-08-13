import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadUsers, deleteUser } from '../../redux/actions'
import './Home.css'

const Home = () => {
    const {users} = useSelector(state => state.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(loadUsers())
    }, [dispatch])

     const deleteHandler = (id) => {
        if (window.confirm('Are You sure you want to delete the user?')) {
            
            dispatch(deleteUser(id))
        }
    }


    return (
        <div>
            <div style = {{postion: 'relative'}}>
                <button onClick={() => navigate('/add-user')} className='AddBtn'>Add User</button>
            </div>
                    <table>
                        <thead>
                        
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map(user => {
                                    return (<tr key = {user.id}>
                                        <td>{user.name}</td>
                                        <td>{ user.email}</td>
                                        <td>{ user.address}</td>
                                        <td><button onClick = {() => deleteHandler(user.id)}
                                            className='delBtn'>Delete</button><button onClick={() => navigate(`/edit-user/${user.id}`)} className='editBtn'>Edit</button></td>
                                    </tr>)
                                })
                            }
                        </tbody>
            </table>
        </div>

    )
}

export default Home


// 