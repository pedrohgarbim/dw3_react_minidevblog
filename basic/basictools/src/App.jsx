import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import FormHooks from './components/Hooks/FormHooks'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
import ShowUserName from './components/ShowUserName/ShowUserName'
import {useState} from 'react'
function App() {
  const [user, setUser] = useState([
    {active: true, userName: 'PEDRO H. GARBIM'},
    {active: true, userName: 'COMANDANTE DA GUERRA'},
    {active: true, userName: 'GENERAL UNIVERSAL'},
    {active: true, userName: 'COMANDO FORTIFICADO'},
    {active: true, userName: 'GENERAL INFERNAL'},
    {active: true, userName: 'MARECHAL 10 ESTRELAS'}
  ])
  return (
    <>
    <NavBar></NavBar>
    <Form></Form>
    <Footer></Footer>
    <FormHooks></FormHooks>
    <ConditionalRender></ConditionalRender>
    <ShowUserName list={user}></ShowUserName>
    </>
  )
}

export default App