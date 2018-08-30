import React from 'react';


import Post from './Post';

import './BlogPosts.css';

const BlogPosts = ({posts}) => {
  return (
    <div>
      <div className="Blog-intro">I WRITE THINGS TOO:</div>
      {posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
    </div>
  );
}

export default BlogPosts;