import { Modal, Alert, Button } from 'react-bootstrap'
import UseAuth from '../../Auth/UseAuth'

export default function DeleteModal({ isOpen, close }) {

  const { logout } = UseAuth()

  const handleDelete = () => {
    logout();
  }

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">¿Estas seguro que deseas eliminar permanentemente tu cuenta? <b>Se perderan tus datos.</b> </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>Cancelar</Button>
        <Button variant='danger' onClick={handleDelete}>Eliminar mi cuenta</Button>
      </Modal.Footer>
    </Modal>
  )
}
