import { useEffect } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import EditAccountResolver from '../../Validations/EditAccountResolver';

export default function EditModal({ isOpen, close, user }) {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: EditAccountResolver });

  const onSubmit = (formData) => {
    alert("Cambiando contraseña")
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen, reset])

  useEffect(() => {
    if (user) reset({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }, [reset, user])

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder='Ingrese su nombre' {...register("name")} />
            {errors?.name && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.name.message}
                </Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder='Ingrese su correo' {...register("email")} />
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.email.message}
                </Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Rol</Form.Label>
            <Form.Control as="select" {...register("role")}>
              <option>regular</option>
              <option>admin</option>
            </Form.Control>
            {errors?.role && (
              <Form.Text>
                <Alert variant="danger">
                  {errors.role.message}
                </Alert>
              </Form.Text>
            )}
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>Cancelar</Button>
        <Button variant='primary' onClick={handleSubmit(onSubmit)}>Actualizar datos</Button>
      </Modal.Footer>
    </Modal>
  )
}
