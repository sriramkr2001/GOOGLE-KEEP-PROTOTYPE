import React,{useState,useEffect} from'react'
import Tilt from 'react-vanilla-tilt';
import { EditTask } from '../../modals/EditTask';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
   } from 'reactstrap';

  

function CardComponent({heading,image,content,idx,deleteItem,CardUpdator}) { 
   const [checkState,setCheckState]=useState(true);
    const [modal, setModal] = useState(false);  
     const toggle = () => setModal(!modal);
  function updateTask(state1){
    CardUpdator(state1,idx)
  }
  let obj={
    heading,image,content
  }
 const [image1,setImage]=useState(image)
    useEffect(() => {
      let  y = `${image}`
        setImage(y)
    }, [])
 
   const handleDelete=()=>{
           deleteItem(idx)
   }
      return (
                   
            <div className="CardComponent">  
            <div className="Tiltor">  
              <Tilt style={{backgroundColor:"transparent"}}>
                  
                 <Card style={{borderRadius:"9px",backgroundColor:"#2F2F2F",height:"410px",width:"349px" ,boxShadow: "4px 4px 20px 4px black"}}>
          <img height="220.42px" width="348px" style={{borderRadius:"  9px  9px  0px  0px "}} src={image1} alt="Card image cap" />

            <CardBody >
            <div className="CardHeading">       
           <h1 className="CardTitle">{heading}</h1>           
              </div>
              <div className="CardContent">{content}</div>
 
            </CardBody>
            
             <div className="cardicons">    
             <a onClick={(e)=>{
               e.preventDefault()
              //  console.log(modal) 
             setModal(true)}}  href="">  <i className="far fa-edit fa-2x" ></i></a>
           
             <a  style={{color:"#39FF14",textDecoration:"none"}}href="https://www.google.com"> <input type="checkbox" checked={checkState} onChange={(e)=>{setCheckState((prevState)=>!prevState)}}/></a>
             {/* <h1 style={{fontSize:"20px"}}> Click Me !</h1> */}
             <a onClick={handleDelete} href=""> <i className="fas fa-trash-alt fa-2x"></i></a>
            
             </div>
         
          
          </Card>   
           </Tilt>
           </div>
        <EditTask toggle={toggle} modal={modal} obj={obj} updateTask={updateTask}/>
          

        </div>
       
        

      );
}

export default CardComponent

