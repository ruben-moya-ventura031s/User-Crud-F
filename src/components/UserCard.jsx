import './styles/UserCard.css'

const UserCard = ({ user, deleteUser, setUserUpdate, setIsFormClose }) => {

  const handleDelete = () => {
    deleteUser(user.id)
  }

  const handleEdit = () => {
    setUserUpdate(user)
    setIsFormClose(false)
  }

  return (
    <article className='card__article'>
      <h2 className='card__name'>{user.first_name}</h2>
      <h2 className='card__last__name'>{user.last_name} </h2>
      <hr className='card__hr' />
      <ul className='card__list'>
        <li className='li' >
          <span className='card__field' >Email</span>
          <span className='card__field__info' >{user.email}</span>
        </li>
        <li className='li' >
          <span className='card__field' >Birthday</span>
          <span className='card__field__info' >{user.birthday}</span>
        </li>
      </ul>
      <hr className='card__hr' />
      <footer className='card__footer'>
        <button className='card__delete'><i onClick={handleDelete} className='bx bx-trash'></i></button>
        <button className='card__update' ><i onClick={handleEdit} className='bx bx-edit-alt' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard