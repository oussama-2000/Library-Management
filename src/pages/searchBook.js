import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SearchBook() {
  const books = useSelector((state) => state.books.books);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="searchBar"
      onMouseLeave={() => {
        var result = document.querySelector(".searchResult");
        result.style.display = "none";
      }}
    >
      <input
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => {
          var result = document.querySelector(".searchResult");
          result.style.display = "block";
        }}
        onInput={() => {
          var result = document.querySelector(".searchResult");
          result.style.display = "block";
        }}
        onMouseEnter={() => {
          var result = document.querySelector(".searchResult");
          result.style.display = "block";
        }}
      />

      <div className="searchResult">
        {filteredBooks.map((book) => (
          <Link to={`/bookdetails/${book.id}`}>
            <li key={book.id}>
              {book.title} by {book.author}{" "}
              <img src={book.image} alt="cover" width={"30px"} />
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
}
