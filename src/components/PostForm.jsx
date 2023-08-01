import React, { useState } from 'react';
import "./styles/PostForm.css"
import axios from 'axios'
const PostForm = () => {
    const api = "http://localhost/firstproject/wp-json/wp/v2/posts"
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const value = JSON.parse(localStorage.getItem("user"))
   

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handlePostChange = (e) => {
        setPost(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const result = await axios.post(api, {
                "title": title,
                "content": post,
                "status":"publish"
            }, {
                headers: {
                    Authorization: `Bearer${value.token}`
                }
            }

            )
            console.log(result);

        } catch (error) {
            console.log(error)
        }
        setTitle('');
        setPost('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    value={post}
                    onChange={handlePostChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostForm;
