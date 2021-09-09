/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React ,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function useFormData(initialState){
let [state,setState]=useState(initialState)
return[state,(e)=>{
    setState({...state,[e.target.name]:e.target.value})
}]
}
export const CreateTask = ({modal,toggle,addTask,tasklist}) => {
console.log(tasklist)
const[state,StateHandler]=useFormData({heading:"",image:"",content:""})


  return (
    <div>
  
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task </ModalHeader>
        <ModalBody>
<form action="">

<div className = "form-group">
<label htmlFor="">Task Name</label>
<input type="text" className = "form-control"  name="heading"    placeholder="Enter heading" value={state.heading} onChange={StateHandler} />
</div>
<div className = "form-group">
<label htmlFor="">Image ! </label>
<input type="text" className = "form-control"  name="image"  value={state.image} onChange={StateHandler}   />
</div>
<div className = "form-group">
<br />
<label htmlFor="">Description</label>
<textarea name="" id="" cols="30" rows="10" className = "form-control"  name="content" placeholder="Enter Content" value={state.content} onChange={StateHandler}   ></textarea>
</div>
</form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{addTask(state)
          console.log(tasklist)
           toggle()}}>Submit Task</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

