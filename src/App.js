import logo from './logo.svg';
import './App.css';
import BasicDetails from './component/BasicDetails';
import Experience from '../component/Experience';
import Hobbies from './component/Hobbies';
import Skills from ' ./Skills';



function App() {
   
  return(
       <>
        <BasicDetails/>
        <Experience/>
        <Skills/>
        <Hobbies/>
       </>
  )
 
}

export default App;
