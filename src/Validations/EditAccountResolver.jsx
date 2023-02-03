import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

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
    .required("Debe seleccionar su rol")
    .oneOf(["regular", "admin"])
})

export default yupResolver(schema)