import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { useLocalStorage } from './components/localstore/UseLocalStorage';
import { v4 as uuidv4 } from 'uuid';



function App() {

  //state


  //user default
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ];

  // hook to use local storage
  const {
    item: users,
    saveItem: saveUsers,
    loading,
    error,
  } = useLocalStorage('user', usersData);

  //agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    saveUsers([
      ...users,
      user
    ]);
  };

  //eliminar Usuario
  const deleteUser = (id) => {
    const arrayFiltrado = users.filter(user => user.id !== id);
    saveUsers(arrayFiltrado);
  };

  //editar usuario
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    });
  };


  // actualizar usuario
  const updateUser = (id, updateUser) => {
    setEditing(false);
    saveUsers(users.map(user => user.id === id ? updateUser : user));
  };

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>

          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }


        </div>
        <div className='flex-large'>
          <h2>View user</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
