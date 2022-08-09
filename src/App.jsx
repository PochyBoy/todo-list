import { useState } from 'react'
import { Col, Row, Container, Button } from 'react-bootstrap'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])

  const [tarea,SetTareas]= useState('')

  return (
    <>
      <Container>
      <Row>
        <div className='Col 1 of 2'>11</div>
        <div className='Col 2 of 2'>22</div>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    
    </Container>
    
    </>
  )
}

export default App
