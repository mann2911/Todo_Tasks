import React from 'react';
import './Tasks.css';


const Addtask=(props)=>{
    
    return(
        <div className="maindiv">
            <table border="2px solid black">
                {/* <thead>
                    <tr>
                        <th><h2>Add New Tasks</h2></th>
                        <th>Edit Task</th>
                        <th>Delete Task</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <td width="50px"><input type="checkbox" onClick={props.checkboxclick}/>  </td>
                        <td width="300px"><h3>{props.value}</h3></td>
                        <td width="100px"><button onClick={props.editclick}>Edit</button></td>
                        <td width="100px"><button onClick={props.deleteclick}>Delete</button></td>

                    </tr>
                </tbody>
             </table>



        </div>
        );
    }


    export default Addtask;