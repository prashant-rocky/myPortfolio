import React from "react";
import { useParams } from "react-router-dom";
import { data } from ".";


const SingleBlog = (props) => {
    const params = useParams();
    const getSinglePost = data.find(post => post.id === Number(params.id));
    
    return (
        <>
            <h3>single route</h3>
            <h5>{getSinglePost.title}</h5>
        </>
    )
};

export default SingleBlog;
