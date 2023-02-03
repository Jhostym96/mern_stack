import React from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import UseAuth from '../../Auth/UseAuth'
import ChangePasswordModal from '../../Components/ModalAccount/ChangePasswordModal';
import DeleteModal from '../../Components/ModalAccount/DeleteModal';
import EditModal from '../../Components/ModalAccount/EditModal';
import UseModal from '../../Hooks/UseModal';

export default function AccountPage() {

  const { user } = UseAuth();

  const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = UseModal()

  const [isOpenChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = UseModal()

  const [isOpenEditModal, openEditModal, closeEditModal] = UseModal()




  return (
    <>
      <Container>
        <Row className='mt-4'>
          <Col xs={12} className="text-center">
            <img
              src="/img/male_avatar.svg"
              alt="profile"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
          </Col>
          <Col className='mt-4'>
            <Card className='mt-4 mx-auto p-4' style={{ maxWidth: '360px' }}>
              <p className='text-center'><b>Nombre:</b>{user.name}</p>
              <p className='text-center'><b>Email:</b>{user.email}</p>
              <p className='text-center'><b>Tipo de usuario:</b>{user.role}</p>
              <Button variant='warning' onClick={openEditModal}>Editar cuenta</Button>
              <Button variant='link' className='mt-1' onClick={openChangePasswordModal}>Cambiar contraseña</Button>
              <Button variant='link' className='mt-3 text-danger' onClick={openDeleteModal}>Eliminar cuenta</Button>
            </Card>
          </Col>
        </Row>
      </Container>


      <DeleteModal
        isOpen={isOpenDeleteModal}
        close={closeDeleteModal}
      />
      <ChangePasswordModal
        isOpen={isOpenChangePasswordModal}
        close={closeChangePasswordModal}
      />
      <EditModal
        isOpen={isOpenEditModal}
        close={closeEditModal}
        user={user}
      />
    </>
  )
}
