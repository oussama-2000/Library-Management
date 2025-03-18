import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/booksSlice";

import tem from "../images/bg-splat_4.png";

import Footer from "./footer";

const AddBook = () => {
  const dispatch = useDispatch();

  //================ set entries information  =============
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [publishPlace, setPublishPlace] = useState("");
  const [publisher, setPublisher] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pages, setPages] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [document, setDocument] = useState("");
  const [image, setImage] = useState("");
  const [to, setTo] = useState("");
  //======================================================

  const changeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };
  const changeDocument = (e) => {
    const d = e.target.files[0];
    if (d) {
      const document = URL.createObjectURL(d);
      setDocument(document);
    }
  };

  const addbookk = (e) => {
    e.preventDefault();
    if (!title || !author || !genre || !publishDate || !publisher) {
      alert("Please fill in all required fields.");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
      genre: genre,
      publish_date: publishDate,
      publish_place: publishPlace,
      publisher: publisher,
      ISBN: isbn || undefined,
      language: "English",
      pages: pages || undefined,
      synopsis: synopsis || undefined,
      reviews: [
        { stars: 5, comment: "Magical and captivating!" },
        { stars: 4, comment: "A timeless tale of wonder and courage." },
      ],
      status: "Available",
      borrow_duration: "14 days",
      isBorrowed: false,
      image: image,
      category: category,
      document: document || undefined,
      to: to,
      get stars() {
        return this.reviews && this.reviews.length > 0
          ? Math.round(
              this.reviews.reduce(
                (sum, review) => sum + (review.stars || 0),
                0
              ) / this.reviews.length
            )
          : 0;
      },
    };

    dispatch(addBook(newBook));

    setTitle("");
    setAuthor("");
    setGenre("");
    setPublishDate("");
    setPublisher("");
    setIsbn("");
    setPages("");
    setSynopsis("");
    setDocument("");
    setImage("");
    setPublishPlace("");
    alert("successfully adding book");
  };

  return (
    <>
      <form className="addBookForm">
        <div>
        <label>Title:
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          </label>
          <label>Author:
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          </label>
          <label>Genre:
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          </label>
          <label>Category:
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option></option>
            <option>trending books</option>
            <option>classic books</option>
            <option>books we love</option>
            <option>recently returned</option>
          </select>
          </label>
          <label>Publish Date:
          <input
            id="pd"
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />

          </label>
          <label>Publish Place:
          <input
            id="pp"
            type="text"
            value={publishPlace}
            onChange={(e) => setPublishPlace(e.target.value)}
          />

          </label>
          <label>Publisher:
          <input
            id="p"
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          /></label>
          <label>This book is to:
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value={"borrow"}>Borrow</option>
            <option value={"read"}>Read</option>
          </select>
          </label>
        </div>

        <div>
          <label htmlFor="cover" className="file-label">
            {image ? "Uploaded" : "Upload Cover Image"}
            <input id="cover" type="file" onChange={changeImage} />
          </label>
          {image ? <img src={image} alt="filed" width={"70px"} /> : null}
          <label>ISBN:
          <input
            id="isbn"
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          /></label>
          <label>Pages :
          <input
          placeholder="Optional"
            id="pages"
            type="number"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          /></label>
          <label>Synopsis :
          <textarea
          placeholder="Optional"
            id="synopsis"
            rows={"10"}
            cols={"20"}
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          /></label>
          <label htmlFor="file" className="file-label" style={{ zIndex: 2 }}>
            {document ? "Uploaded" : "Upload Book File"}
            <input
              id="file"
              type="file"
              onChange={changeDocument}
              style={{ zIndex: 2 }}
            />
          </label>
          <div style={{ zIndex: 2 }}>{document}</div>
          <button onClick={addbookk} style={{ zIndex: 2 }}>
            Add Book
          </button>
        </div>
      </form>
      <div className="footer-addbooks">
        <img src={tem} alt="" className="temm" />
        <Footer />
      </div>
    </>
  );
};

export default AddBook;
