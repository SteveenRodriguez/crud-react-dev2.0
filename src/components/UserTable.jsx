import React from 'react';
import { FcReadingEbook, FcWorkflow,FcSurvey,FcRight } from "react-icons/fc";

const UserTable = (props) => {

    console.log(props.users);

    return ( 
        <table>
        <thead>
          <tr>
            <th> <FcReadingEbook/> Name</th>
            <th> <FcWorkflow/> Username</th>
            <th> <FcSurvey/> Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                props.users.length > 0 ?
                props.users.map(user=>(
                    <tr key={user.id}>
                        <td> <FcRight/> {user.name}</td>
                        <td>{user.username}</td>
                        <td>
                        <button 
                            className="btn btn-info"
                            onClick={()=>{props.editRow(user)}}
                        >
                            Edit
                        </button>
                        <button 
                            className="btn btn-danger"
                            onClick={() => {props.deleteUser(user.id)}}     
                        >
                            Delete
                        </button>
                        </td>
                    </tr>
                )) : (<tr>
                        <td colSpan={3}>No Users</td>
                    </tr>
                )
            } 
          
        </tbody>
      </table>
     );
}
 
export default UserTable;