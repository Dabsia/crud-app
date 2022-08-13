import React, {useState} from 'react'
import './AddUser.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/actions'


const AddUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [err, setError] = useState('')
    
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const userDetails = {
        name, email, address
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !address) {
            setError('Please fill all input values')
        }
        else {
            dispatch(addUser(userDetails))
            navigate('/')
            setError('')
        }
    }

  return (
      <div className='formHolder'>
          <button onClick = {() => navigate('/')} className='back'>Go back</button>
          <form onSubmit={handleSubmit} className='formContainer'>
              {err && <p className='err'>{err}</p>}
              <div className='inputDivs'>
                <label htmlFor='name'>Name</label>
                <input className='addInput' id = 'name' type = 'text' placeholder = 'Enter Name' onChange={e => setName(e.target.value)} value = {name} />
              </div>
              <div className='inputDivs'>
                <label htmlFor='name'>Email</label>
                <input className='addInput' id = 'email' type = 'email' placeholder = 'Enter Email' onChange={e => setEmail(e.target.value)} value = {email} />
              </div>
              <div className='inputDivs'>
                <label htmlFor='address'>Address</label>
                <input className='addInput' id = 'address' type = 'text' placeholder = 'Enter Address' onChange={e => setAddress(e.target.value)} value = {address} />
              </div>
              <div className='inputDivs'>
                <button className='formAddBtn'>Add User</button>
              </div>
          </form>
      </div>
  )
}

export default AddUser