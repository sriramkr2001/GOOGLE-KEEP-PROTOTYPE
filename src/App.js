import logo from './logo.svg';
import './App.css';
import {TodoList} from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tilt from 'react-vanilla-tilt';
import Particles from 'react-particles-js';
import { ParticleBackground } from './components/ParticleBackground';
import { ConfigParticles } from './components/ConfigParticles';
import {useState,useEffect} from 'react'


function App() {
// let [x1,setheight]=useState(300)
  // useEffect(() => {
  //   let y1=document.querySelector(".particles").offsetHeight
  //       setheight(y1+30)
  //   }
  // ,)
  return (
    <div className="App">
        <div className="particles" >
          <Particles height={300} params={ConfigParticles} />
        </div>

        {/* style={{ position: 'absolute',top:"20px" }} */}

  <TodoList/>

    </div>
  );
}

export default App;



