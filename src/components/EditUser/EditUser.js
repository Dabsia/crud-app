import React, {useState, useEffect} from 'react'
import './EditUser.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getSingleUser } from '../../redux/actions'



const EditUser = () => {
    const [userValues, setUserValues] = useState({
        name: '',
        email: '',
        address: ''
    })
    const [err, setError] = useState('');

    let { userId } = useParams();
    console.log(userId)
    
    const { user } = useSelector(state => state.data)
    
    const {name, email, address} = userValues
    
    const navigate = useNavigate()

    const dispatch = useDispatch()


    const handleChange = (e) => {
        let { name, value } = e.target
        setUserValues({...userValues, [name]: value})
   }
    
        useEffect(() => {
        dispatch(getSingleUser(userId))
    }, [userId, dispatch])

    useEffect(() => {
        if (user) {
                setUserValues({...user})
            }
        }, [user])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !email || !address) {
            setError('Please fill all input values')
        }
        else {
            dispatch(updateUser(userId, userValues))
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
                  <input
                      className='addInput'
                      name = 'name'
                      id='name'
                      type='text'
                      placeholder='Enter Name'
                      onChange={handleChange}
                      value={name || ''}
                  />
              </div>
              <div className='inputDivs'>
                <label htmlFor='name'>Email</label>
                  <input
                      className='addInput'
                      name = 'email'
                      id='email' type='email' placeholder='Enter Email'
                      onChange={handleChange}
                      value={email || ''}
                  />
              </div>
              <div className='inputDivs'>
                <label htmlFor='address'>Address</label>
                  <input
                      className='addInput'
                      name = 'address'
                      id='address'
                      type='text'
                      placeholder='Enter Address'
                      onChange={handleChange}
                      value={address || ''}
                  />
              </div>
              <div className='inputDivs'>
                <button className='formAddBtn'>Add User</button>
              </div>
          </form>
      </div>
  )
}

export default EditUser