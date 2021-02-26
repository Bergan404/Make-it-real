import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post/index';

import './AllHomeListings.css'

function AllHomeListing() {
    const post = useSelector(state => state.allPosts);
    const check = useSelector(state => state.session.user)

    if (!Array.isArray(post)) {
        return null
    } else {
        const allPosts = post.map((el, i) => {
            return <Post key={i} props={el} />
        })
        return (
            <>
                <h2 className="header-h2">All Listings</h2>
                    <div className="all-home-posts" >
                        {check !== undefined?allPosts: null}
                    </div>
            </>
        );
    }
}

export default AllHomeListing;
