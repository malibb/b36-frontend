import React from 'react';
import { Link } from 'react-router-dom';

function PostPreview({_id,title,author}){
    return (
        <div className="post-preview">
            <Link to={`/post/${_id}`} >
                <h2 className="post-title">
                    {title}
                </h2>
            </Link>
            
            <p className="post-meta">
                Posted by <a href="#">
                    {author.first_name} {author.last_name}
                </a>
            </p>
        </div>
    )
}



export default PostPreview;