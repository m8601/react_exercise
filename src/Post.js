import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Post = ({post}) => {
  return (
    <div className="Post">
      <span className="Post-date">{moment.unix(post.timestamp).format("Do, MMM")}</span>
      <span className="Post-title">{post.title}</span>
      <div className="Post-overlay">
        <span className="Post-link">+ VISIT MY BLOG</span>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post;