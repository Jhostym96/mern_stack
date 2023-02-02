import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export default function ChangePasswordModal({ isOpen, close }) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (formData) => {
    alert("Cambiando contraseña")
  }


  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cmabiar contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nueva contraseña</Form.Label>
            <Form.Control placeholder='Ingrese su nueva contraseña' {...register("password")} />
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">
                  Error en el campo contraseña
                </Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>Cancelar</Button>
        <Button variant='primary' onClick={handleSubmit(onSubmit)}>Actualizar contraseña</Button>
      </Modal.Footer>
    </Modal>
  )
}
