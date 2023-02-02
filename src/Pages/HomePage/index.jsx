import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function HomePage() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={{span:12}} md={{span : 6}} className="mb-5">
          <h1>HomePage</h1>
        </Col>
        <Col>
          <img
          className='img-fluid'
            src="/img/task-manager.svg"
            alt="#"
          />
        </Col>
      </Row>
    </Container>
  )
}
