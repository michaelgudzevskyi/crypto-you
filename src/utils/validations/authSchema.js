import * as Yup from 'yup'

const authSchema = Yup.object().shape({
    username: Yup.string().email('Campo inválido.').required('Campo obrigatório.'),
    password: Yup.string().required('Campo obrigatório.').min(8, 'Campo inválido.'),
})

export default authSchema
