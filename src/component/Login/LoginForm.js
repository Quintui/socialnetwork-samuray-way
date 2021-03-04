import React from 'react';
import {Form} from 'react-final-form'
import {composeValidators, maxLength, required} from "../Common/RequiresDirectory/Requires";
import {Redirect} from "react-router-dom";
import {fieldCreator} from "../Common/FieldCreator/fieldCreator";


const LoginForm = ({onSubmit, isAuth, formError}) => {


    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return (
        <>
            <Form onSubmit={onSubmit}
                  render={({handleSubmit}) => (
                      <form onSubmit={handleSubmit}>
                          {fieldCreator(
                              'text',
                              composeValidators(required, maxLength(50)),
                              'email',
                              'text',
                              'Email'
                          )
                          }
                          <div>
                              <label> Password</label>
                              {fieldCreator(
                                  'text',
                                  composeValidators(required, maxLength(50)),
                                  'password',
                                  'password',
                                  'Password'
                              )
                              }
                          </div>

                          <div>
                              {fieldCreator(
                                  'text',
                                  null,
                                  'rememberMe',
                                  'checkbox',
                                  null,
                                  'Remember me!'
                              )
                              }
                          </div>

                          <button type={'submit'}>Log In</button>
                          {
                              formError ? <div>{formError}</div> : undefined
                          }
                      </form>

                      )
                  }
            />
        </>
    );
};

export default LoginForm;
