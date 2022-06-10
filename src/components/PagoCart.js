import React from 'react'
import { Button, Form } from 'react-bootstrap'

export const PagoCart = () => {
  return (
    <div className='mt-5 pt-5 m-auto w-75'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Información de tarjeta</Form.Label>
          <Form.Control type="number" placeholder="1234 1234" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
