import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'


function App() {

  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  
  const baseUrl = 'https://user-crud-b.onrender.com'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForn = () => {
    setIsFormClose(false)
  }

  return (
    <div>

      <div className='app__header'>
        <h1 className='app__title'>User CRUD</h1>
        <button className='app__btn' onClick={handleOpenForn}>Open Form</button>
      </div>

      <div className={`form__container ${isFormClose && 'form__close'}`}>
        <FormUser
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          setUserUpdate={setUserUpdate}
          setIsFormClose={setIsFormClose}
        />
      </div>
      <div className='card'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              setIsFormClose={setIsFormClose}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
