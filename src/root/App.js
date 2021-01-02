import { Formik, Form } from 'formik'
import { authSchema } from '../utils/validations'
import { Button, InputForm } from '../components'

function App() {
    return (
        <div className="App">
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={authSchema}
                onSubmit={(values) => {
                    console.log('values', values);
                }}
            >
            {({ errors, touched }) => (
                <Form className="form-control">
                    <InputForm
                        className="input-control"
                        label="E-mail"
                        name="username"
                        error={errors}
                        disabled
                        touched={touched}
                    />

                    <InputForm
                        className="input-control"
                        label="Password"
                        name="password"
                        error={errors}
                        touched={touched}
                    />

                    <Button className="button-contained" type="sybmit">Button</Button>
                    <Button className="button-outlined">Button</Button>
                </Form>
            )}
        </Formik>
        </div>
    )
}

export default App
