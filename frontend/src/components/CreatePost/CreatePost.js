import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { createPost } from "../../store/CreatePosts"

import "./CreatePost.css";

function Posts({ }) {
    const dispatch = useDispatch()
    const history = useHistory();

    const [postTitle, setPostTitle] = useState("");
    const [description, setDescription] = useState("");
    const [highlights, setHighlights] = useState("");
    const [listPicture, setListPicture] = useState("");
    const [price, setPrice] = useState("$");
    const [errors, setErrors] = useState([]);
    const id = useSelector(state => state.session.user)

    useEffect(() => {
        const errors = [];
        if (postTitle.length === 0) {
            errors.push('Please enter a title')
        }
        setErrors(errors)
    }, [postTitle])

    const onSubmit = async (e) => {
        e.preventDefault();
        // dispatch(createPost(postTitle, description, highlights, listPicture, price, id.id));

        const createdPost = await dispatch(createPost(postTitle, description, highlights, listPicture, price, id.id));
        if (createPost) {
            history.push(`/post/${createdPost.id}`);
        }
    }

    const handelCancel = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <>
            <form className="post-form" onSubmit={onSubmit}>
                <h1 className="post-header">Create Post</h1>
                <ul className="errors">
                    {errors.map(error => (
                        <li key={error}>
                            {error}
                        </li>
                    ))}
                </ul>
                <label>
                    Title
                    <input
                        className="normal-style"
                        type="text"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Description
                    <textarea
                        className="description-box"
                        type="textarea"
                        rows="5" cols="80"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Highlights
                    <div className="radio" >
                        <input
                            className="radio-1"
                            type="radio"
                            value={highlights}
                            name="highlights"
                            onChange={() => setHighlights("Handmade")}
                            required
                        /> Handmade
                    <input
                            className="radio-2"
                            type="radio"
                            value={highlights}
                            name="highlights"
                            onChange={() => setHighlights("Digital Download")}
                            required
                        /> Digital Download
                    </div>
                </label>
                <label>
                    Listing Picture
                    <input
                        className="normal-style"
                        type="text"
                        value={listPicture}
                        onChange={(e) => setListPicture(e.target.value)}
                        required
                    />
                </label>
                <label className="price-is-right" >
                    Price
                    <input
                        className="normal-style-price"
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
                <div className="post-cancel-create" >
                    <button className="create-post-submit" type="submit" disabled={!!errors.length} onClick={onSubmit} >Create Post</button>
                    <button className="cancel-post" onClick={handelCancel}>Cancel</button>
                </div>
            </form>

        </>
    );
}

export default Posts;
