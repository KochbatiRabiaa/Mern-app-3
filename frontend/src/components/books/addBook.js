import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createBookAction } from "../../redux/actions/bookActions";

const AddBook = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [price, setPrice] = useState("");
  const [bookCover, setBookCover] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      category,
      pages,
      price,
      bookCover,
    };
    dispatch(createBookAction(data));
  };
  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Create Book
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h1 className="text-center">Add Book</h1>
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                      <div className="form-group">
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="custom-select"
                        >
                          <option defaultValue="programming">
                            programming
                          </option>
                          <option value="religion">Religion</option>
                          <option value="life">life</option>
                          <option value="culture">culture</option>
                          <option value="science-fiction">
                            science-fiction
                          </option>
                          <option value="philosophy">philosophy</option>
                          <option value="literature">literature</option>
                        </select>
                      </div>{" "}
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">title</label>
                        <input
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Book title"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Author </label>
                        <input
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Author name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">pages</label>
                        <input
                          value={pages}
                          onChange={(e) => setPages(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Book pages"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">price</label>
                        <input
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          type="text"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Book price"
                        />
                      </div>
                      <label for="basic-url">Your book cover URL</label>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
  </div>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div>
                      <button
                        type="submit"
                        className="btn btn-warning m-auto"
                        onClick={handleFormSubmit}
                      >
                        Create Book
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
