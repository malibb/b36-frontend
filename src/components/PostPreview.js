import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import authenticate from '../utils/authenticate';

const DELETE_POST = gql`

    mutation deletePost($id:ID!){
        deleteOnePost(id:$id)
    }

`;


function PostPreview({_id,title,author, edit, remove}){
     const { isAuthenticated, payload } = authenticate();
    const [deletePost] = useMutation(DELETE_POST);
    return (
        <div className="post-preview">
            <Link to={`/post/${_id}`} >
                <h2 className="post-title">
                    {title}
                </h2>
            </Link>
            
            <p className="post-meta">
                Posted by <Link to="#">{author.first_name} {author.last_name}</Link>
            </p>
            {
                isAuthenticated && payload.first_name === author.first_name ? (
                    <p>
                {
                    edit ? <Link to={`/update/${_id}`}>Editar</Link>: <></>
                }
                {
                    remove ? <button onClick={ () => {
                            deletePost({variables:{id:_id}}).then(() => {
                                window.location.reload();
                            })}
                    }>Borrar Post</button>:<></>}
                </p>
                ) : (<></>)
            }
        </div>
    )
}



export default PostPreview;