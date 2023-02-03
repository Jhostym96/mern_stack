import { useEffect } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import ChangePasswordResolver from '../../Validations/ChangePasswordResolver';

export default function ChangePasswordModal({ isOpen, close }) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: ChangePasswordResolver });

  const onSubmit = (formData) => {
    alert("Cambiando contraseña")
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen, reset])

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nueva contraseña</Form.Label>
            <Form.Control type="password" placeholder='Ingrese su nueva contraseña' {...register("password")} />
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.password.message}
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
