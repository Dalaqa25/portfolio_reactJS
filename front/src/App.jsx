import { useEffect } from 'react'
import Header from '../components/header'
import Body from '../components/body'
import Projects from '../components/projects'
import Waves from '../components/waves'
import Form from "../components/form.jsx";
import Skills from '../components/skills.jsx'
// smoth scrolling
import Lenis from '@studio-freight/lenis';
//data
import data from '../data.js'

function App() {

    const dataElements = data.map((item) => {
        return (
            <Projects
                Key = {item.id}
                {...item}
            />
        )
    })
   
    useEffect(() => {
      const lenis = new Lenis({
        smooth: true, // Enables smooth scrolling
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
  
      return () => {
        // Cleanup when component unmounts
        lenis.destroy();
      };
    }, []);

  return (
    <>
      <Header/>
      <Body/>
        {dataElements}
        <Skills/>
        <Form/>
        <Waves/>
    </>
  )
}

export default App
