import React,{useState,useEffect} from 'react'
import { CreateTask } from '../modals/CreateTask'
import CardComponent from './cards/CardComponent'


export function TodoList() {
    console.log("sup")
//   useEffect(() => {
//       let y = document.querySelector(".task-container")
//       let x = document.querySelector(".particles")
//       if(y.offsetHeight>=x.offsetHeight-300)
//       x.style.height=`${2*y.offsetHeight}px`
//     //   else 
//     //   x.style.height=`${window.innerHeight+500}px`
    
//   })
   function setter(){
       let arr=localStorage.getItem("tasks")
       let objArray=JSON.parse(arr)
       if(objArray)
       return objArray
       else 
       return []
   }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [tasklist,setTaskList]=useState(()=>setter())

 const deleteItem=(idx)=>{
  let tempList=tasklist
  tempList.splice(idx,1)
  localStorage.setItem("tasks",JSON.stringify(tempList))
  setTaskList(tempList)
 }

 function CardUpdator(state1,index){
    let Tempolist=tasklist;
        Tempolist[index].heading=state1.heading
        Tempolist[index].image=state1.image
        Tempolist[index].content=state1.content
        localStorage.setItem("tasks",JSON.stringify(Tempolist))
        setTaskList(Tempolist)
        window.location.reload()
     
 }

    const addTask=(currentTask)=>{
      let k =0;
      let temporaryArray = [...tasklist]
      temporaryArray.push(currentTask)
console.log("2")
// setTaskList(temporaryArray)
   setTaskList((prevtasklist)=>{ 
       console.log(k)
       return([...temporaryArray])})
   console.log("*")
     localStorage.setItem("tasks",JSON.stringify(temporaryArray))
   console.log("4")
 
    }
    return (
        <div id="wrapper">  
               
         <div className="header text-center">
            <h1 className="" style={{color:"aqua"}}>React Todo-List</h1>
            <button className="btn btn-primary mt-2"  onClick={()=>setModal(!modal)}>Create Task</button>
            <h1 className="profile">Developed with 💘 by Sriram Krishnamurthy </h1>
        </div>  
        {/* ---------------------- SECTION-2--------------------------- */}
        <div style={{height:"100vh",backgroundColor:"#212121"}}>       
         <div className ="task-container">
       
                {tasklist.map((elm,idx)=>{
           return (<CardComponent heading={elm.heading} image={elm.image} idx={idx} content={elm.content} deleteItem={deleteItem} CardUpdator={CardUpdator}/>)
        })}
        
 <CreateTask toggle={toggle} modal={modal} addTask={addTask} tasklist={tasklist}/>
        </div>
        </div>
        </div>

            //  {/* ---------------------- SECTION-1--------------------------- */}      


       
       
    
    )
}


