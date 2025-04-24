import Header from '../components/header'
import Body from '../components/body'
import Projects from '../components/projects'
import Waves from '../components/waves'
import Form from "../components/form.jsx";
import Skills from '../components/skills.jsx'
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
