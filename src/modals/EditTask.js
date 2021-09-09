import React ,{useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function useFormData1(initialState){
let [state,setState]=useState(initialState)
return[state,(e)=>{
    setState({...state,[e.target.name]:e.target.value})
}]
}
export const EditTask = ({modal,toggle,updateTask,obj}) => {


    // console.log(obj)
const[state1,StateHandler1]=useFormData1({heading:obj.heading,image:obj.image,content:obj.content})
// console.log(state1)

  return (

    <div>
 {/* <h1>Lorem100</h1> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}><h1>Update Task</h1></ModalHeader>
        <ModalBody>
<form action="">

<div className = "form-group">
<label htmlFor="">Task Name</label>
<input type="text" className = "form-control"  name="heading"    placeholder="Enter heading" value={state1.heading} onChange={StateHandler1} />
</div>
<div className = "form-group">
<label htmlFor="">Image ! </label>
<input type="text" className = "form-control"  name="image"  value={state1.image} onChange={StateHandler1}   />
</div>
<div className = "form-group">
<br />
<label htmlFor="">Description</label>
<textarea name="" id="" cols="30" rows="10" className = "form-control"  name="content" placeholder="Enter Content" value={state1.content} onChange={StateHandler1}   ></textarea>
</div>
</form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{updateTask(state1)
           toggle()}}>Update Task</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
