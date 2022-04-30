import React from 'react';
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    // console.log(props.currentUser);

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit=(data, event) => {
        // console.log(data);
        data.id = props.currentUser.id;
        props.updateUser(data.id, data);

        //limpiar campos
        event.target.reset();
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

            <button>Edit user</button>
        </form>
    );
}
 
export default EditUserForm;