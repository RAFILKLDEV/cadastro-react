import React, { useContext, Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from "yup"
import { AuthContext } from "../../contexts/Auth";

const SignInUp = ({  }) => {

    const { setEmail } = useContext(AuthContext)
    
    const valadationRegister = () => yup.object().shape({
        email: yup
          .string()
          .email("Não é um e-mail")
          .required("Este campo é obrigatório"),
        password: yup
          .string()
          .min(8, "A senha deve ter no minimo 8 caracteres")
          .required("Este campo é obrigatório"),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"),null], "As senhas não são iguais")
      })
      
      const valadationLogin = () => yup.object().shape({
        email: yup
          .string()
          .email("Não é um e-mail")
          .required("Este campo é obrigatório"),
        password: yup
          .string()
          .min(8, "A senha deve ter no minimo 8 caracteres")
          .required("Este campo é obrigatório")
      })
    
      const clickLogin = (values) => {
        setEmail(values.email)
        console.log(values.email)
      }
    
      const clickRegister = (values) => console.log(values)
    
    return(
        <Fragment>
            <div className='Login'>
          <Formik 
          initialValues={{}}
          onSubmit={clickLogin}
          validationSchema={valadationLogin}
          >
            <Form className="Login-form">
              <div className='Login-form-group'>
                <h2>Login</h2>
                <Field name="email" className="Form-field" placeholder="email"/>
                <ErrorMessage component="span" name="email" className="Form-error"/>
                <Field name="password" className="Form-field" placeholder="senha" />
                <ErrorMessage component="span" name="password" className="Form-error"/>
                <button type='submit'>Logar!</button>
              </div>
            </Form>
          </Formik>
          <div>-----</div>
          <Formik 
          initialValues={{}}
          onSubmit={clickRegister}
          validationSchema={valadationRegister}
          >
            <Form className="Login-form">
              <div className='Login-form-group'>
                <h2>Registro</h2>
                <Field name="email" className="Form-field" placeholder="email"/>
                <ErrorMessage component="span" name="email" className="Form-error"/>
                <Field name="password" className="Form-field" placeholder="senha"/>
                <ErrorMessage component="span" name="password" className="Form-error"/>
                <Field name="confirmPassword" className="Form-field" placeholder="Confirme a senha"/>
                <ErrorMessage component="span" name="confirmPassword" className="Form-error"/>
                <button type='submit'>Cadastrar!</button>
              </div>
            </Form>
          </Formik>
        </div>
        </Fragment>
    )
}

export default SignInUp