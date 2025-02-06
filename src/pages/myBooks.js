import { useSelector } from "react-redux";
import { selectLists } from "../store/booksSlice";
import { Link } from "react-router-dom";

import "./myBooks.css";
import Footer from "../components/footer";
import tem from "../images/bg-splat_4.png";

const MyBooks = () => {
  const lists = useSelector(selectLists);

  return (
    <div>
      <div className="listsContainer">
        <h2>Your Lists</h2>
        <div className="lists">
          {Object.entries(lists).map(([listName, books]) => (
            <div key={listName}>
              <h3>{listName}</h3>
              {books.map((book) => (
                <Link to={`/bookdetails/${book.id}`}>
                  <div className="list">
                    <p key={book.id}>{book.title}</p>
                    <img src={book.image} alt="cover" width={"50px"} />
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <>
        <img src={tem} alt="" className="tem" />
        <Footer />
      </>
    </div>
  );
};

export default MyBooks;
