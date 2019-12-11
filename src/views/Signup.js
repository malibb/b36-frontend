import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from './../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';

const CREATE_MUTATION = gql`

    mutation AddAuthor($data:AuthorInput!){
        createNewAuthor(data:$data){
            _id,
            email,
            first_name
        }
    }

`;

function Signup({history}){

    const [ sendSignup ] = useMutation(CREATE_MUTATION);

    const catchData = async (inputs) => {
        if(inputs.password === inputs.confirm_password){
            delete inputs.confirm_password;
            console.log(inputs)
            const { data } = await sendSignup({variables:{data:{...inputs}}});
            if(data){
                if(data.errors) console.log(data.errors);
                history.push('/login');
            }
        } else {
            alert('Tu contraseña no coincide');
        }
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData);

    return(
        <>
            <Layout head="Registrate para empezar a postear."
            subhead="Procura recordar tu contraseña.">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <form onSubmit={handleSubmit}>
                                < Input
                                name = "first_name"
                                label = "Nombre"
                                type = "text"
                                placeholder = "Escribe tu nombre"
                                value={inputs.first_name}
                                change={handleInputChange}
                                required={true}
                                />
                                < Input
                                name = "last_name"
                                label = "Apellido"
                                type = "text"
                                placeholder = "Escribe tu apellido"
                                value={inputs.last_name}
                                change={handleInputChange}
                                required={true}
                                />
                                < Input
                                name = "email"
                                label = "Correo:"
                                type = "email"
                                placeholder = "Escribe tu email"
                                value={inputs.email}
                                change={handleInputChange}
                                required={true}
                                />
                                < Input
                                name = "password"
                                label = "Password: "
                                type = "password"
                                placeholder = "Escribe tu password"
                                value={inputs.password}
                                change={handleInputChange}
                                required={true}
                                />
                                < Input
                                name = "confirm_password"
                                label = "Confirma tu password: "
                                type = "password"
                                placeholder = "Escribe de nuevo tu password"
                                value={inputs.confirm_password}
                                change={handleInputChange}
                                required={true}
                                />
                                <div className="clearfix mt-4">
                                    <button type="submit" className="btn btn-primary" >Registrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Signup;