import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import roles from '../Helpers/Roles';

const schema = yup.object().shape({
  name: yup
    .string("")
    .required("Debe ingresar su nombre"),

  email: yup
    .string("")
    .email("Email invalido")
    .required("Debe ingresar su correo"),

  role: yup
    .string("")
    .oneOf(Object.keys(roles),"Seleccion invalida")
})

export default yupResolver(schema)