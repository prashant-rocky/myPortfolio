import React from "react";
import { Link } from "react-router-dom";

export const data = [
    { id: 1, title: 'title 1', description: 'asdfsdfasdf' },
    { id: 2, title: 'title 2', description: 'asdfsdfasdf' },
    { id: 3, title: 'title 3', description: 'asdfsdfasdf' },
    { id: 4, title: 'title 4', description: 'asdfsdfasdf' },
    { id: 5, title: 'title 5', description: 'asdfsdfasdf' },
];

const Blogs = () => {
    return (
        <div>
            {
                data.map(({ title, description, id }) => (
                    <div key={id}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Link to={`/blogs/${id}`}>read more</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Blogs;
