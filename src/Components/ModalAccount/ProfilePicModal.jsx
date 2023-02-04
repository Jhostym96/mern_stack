import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import UseAuth from '../../Auth/UseAuth'

export default function ProfilePicModal({ isOpen, close }) {

  const { updateUser } = UseAuth();

  const [filename, setFileName] = useState("Cargar imagen")
  const [selectedFile, SetSelectedFile] = useState(null)


  const handleFileChange = (e) => {
    const [file] = e.target.files;
    const isValidSize = file.size < 5 * 1024 * 1024
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
    const isValidType = isNameOfOneImageRegEx.test(file.name)

    if (!isValidSize) return toast.error("imagen excede el tamaño maximo 50MB")
    if (!isValidType) return toast.error("Solo se admiten imagenes")

    setFileName(file.name);

    const reader = new FileReader()

    reader.onloadend = () => {
      SetSelectedFile(reader.result);
    }

    reader.readAsDataURL(file)

  }

  const handleUpdateProfilePic = () => {
    if (!selectedFile) return toast.error("Debes seleccionar una nueva imagen")
    updateUser({ profilePic: selectedFile })
    close()
  }

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar foto de perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3" >
          <Form.Label>{filename}</Form.Label>
          <Form.Control type="file" accept=".jpg, .jpeg, .gif, .png" onChange={handleFileChange} />
        </Form.Group>
        <img className='img-fluid mt-2' src={selectedFile} alt="profile-preview" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>Cancelar</Button>
        <Button variant='primary' onClick={handleUpdateProfilePic}>Actualizar imagen</Button>
      </Modal.Footer>
    </Modal>
  )
}
