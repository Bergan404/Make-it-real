import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post/index';

import './AllHomeListings.css'

function AllHomeListing() {
    const post = useSelector(state => state.allPosts);
    console.log(post)

    if (!Array.isArray(post)) {
        return null
    } else {
        const allPosts = post.map((el) => {
            return <Post props={el} />
        })
        return (
            <>
                <h2 className="header-h2">All Listings</h2>
                    <div className="all-home-posts" >
                        {allPosts}
                    </div>
            </>
        );
    }
}

export default AllHomeListing;
