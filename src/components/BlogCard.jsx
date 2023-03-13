import React from "react";

const BlogCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Blog Title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Category</h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          velit sit amet enim eleifend commodo nec sit amet mauris. Integer eget
          tortor fringilla, tincidunt nibh eu, pharetra orci. In hac habitasse
          platea dictumst.
        </p>
        <a href="#" className="card-link">
          Read More
        </a>
        <a href="#" className="card-link">
          Add to Favorites
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
