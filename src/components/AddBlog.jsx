import React from "react";

const AddBlog = () => {
  return (
    <div>
      <h2>Add Blog</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control w-50" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="text" className="form-control w-50" id="category" />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control w-50"
            id="content"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
