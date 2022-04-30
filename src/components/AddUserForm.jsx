import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();
    const onSubmit=(data, event) => {
        // console.log(data);

        props.addUser(data);

        //limpiar campos
        event.target.reset()
    }



    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={register}
                {...register('name', {required:true, message:'Campo Requerido'})} 
            />
            <div>
                {errors?.name?.message}
            </div>

            <label>Username</label>
            <input type="text" name="username" ref={register}
                {...register('username', {required:true, message:'Campo Requerido'})}
            />
            <div>
                {errors?.username?.message}
            </div>

            <button>Add new user</button>
        </form>
    );
}
 
export default AddUserForm;