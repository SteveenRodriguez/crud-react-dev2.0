import React, { useState } from 'react';
import { useLocalStorage } from './UseLocalStorage';
import { v4 as uuidv4 } from 'uuid';


const Context = React.createContext();

function Operations(props) {

    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    ];

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
        <Context.Provider value={{
            loading,
            error,
            addUser,
            deleteUser,
            editRow,
            updateUser,
            users,
            saveUsers,
            editing,
            currentUser
        }}>
            {props.children}
        </Context.Provider>
    );
}

export { Context, Operations };
