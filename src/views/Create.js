import React, { useState} from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from './../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';
import authHOC from '../utils/authHOC';

const CREATE_POST = gql`

    mutation createPost($data:PostInput!){
        createNewPost(data:$data){
            _id,
        }
    }

`;

function Create({history}){

    const [ sendPost ] = useMutation(CREATE_POST);
    const [cover, setCover] = useState('');
    const [coverPreview, setCoverPreview] = useState('');

    const catchCover = event =>{
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.onloadend = () => {
            setCover(file);
            setCoverPreview(reader.result);
        };

        reader.readAsDataURL(file);
    };
    const catchData = async (inputs) => {
      const { data, errors} = await sendPost({variables:{data:{...inputs,cover}}}); 
      if (data) history.push('/');
      if(errors) alert(errors); 
    };

    const {
        inputs,
        handleInputChange,
        handleSubmit
    } = useForm(catchData);

    return(
        <>
            <Layout head="Crea tu post."
            subhead=":)">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <form onSubmit={handleSubmit}>
                                < Input
                                name = "title"
                                label = "Titulo"
                                type = "text"
                                placeholder = "Titulo Post"
                                value={inputs.title}
                                change={handleInputChange}
                                required={true}
                                />
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls">
                                    <label>Contenido</label>
                                    <textarea cols="30" rows="10" className="form-control" 
                                    placeholder="Contenido" required 
                                    name="content"
                                    onChange={handleInputChange}
                                    value={inputs.content}
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                < Input
                                name = "cover"
                                label = "Cover "
                                type = "file"
                                placeholder = "Seleccionar archivo"
                                value={inputs.cover}
                                change={catchCover}
                                required={true}
                                />
                                <img src={coverPreview} alt="cover" className="b-block w-50"></img>
                                <div className="clearfix mt-4">
                                    <button type="submit" className="btn btn-primary" >Crear Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default authHOC(Create);