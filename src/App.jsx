import { Fragment, useState } from 'react'
import './App.css'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
  const [tasks, setTasks] = useState([])

  const [addTask, setAddTask] = useState('')

  function newTask(event) {
    event.preventDefault()

    setTasks([
      ...tasks,
      addTask
    ])
    console.log(tasks);


  }

  const showTasks = tasks.map((task, i)=>(
    <div key={i}>{task}</div>
  ))

  return (
    <Fragment>
      <Container className='wrapper'>
        <Row >
          <Col>
            <Form className='mt-5' onSubmit={event => newTask(event)}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Control
                  type="string"
                  placeholder="Add Task"
                  style={{ height: '50px', width: "300px", borderRadius: "5px", borderBlockColor: "red" }}
                  value={addTask}
                  onChange={event => setAddTask(event.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" >
                Submit
              </Button>
              <br />
              <span style={{ marginRight: '10px' }}>All</span>
              <span style={{ marginRight: '10px' }}>Pending</span>
              <span style={{ marginRight: '10px' }}>Completed</span>
              <span><Button >Clear All</Button></span>
              <br />

              <p style={{ textAlign: 'left' }}><strong>Tasks</strong></p>
              <div>
                {showTasks}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default App
