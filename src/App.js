import React from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { Context } from './components/localstore/Context';
import { FcBusinessman, FcLinux, FcAddressBook } from "react-icons/fc";


function App() {

  const {
    loading,
    error,
    addUser,
    deleteUser,
    editRow,
    updateUser,
    users,
    editing,
    currentUser

  } = React.useContext(Context);

  return (
    <div className='container'>
      <h1> <FcLinux /> CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>

          {
            editing ? (
              <div>
                <h2>  Edit user</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div className="container-fluid">
                <h2> <FcBusinessman /> Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }


        </div>
        <div className='flex-large'>
          <h2><FcAddressBook /> View user</h2>
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
