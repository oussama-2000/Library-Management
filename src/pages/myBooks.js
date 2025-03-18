import { useSelector } from "react-redux";
import { removeBookFromList, selectLists } from "../store/booksSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./myBooks.css";
import "./myBooksMobile.css"
import Footer from "../components/footer";


const MyBooks = () => {
  const lists = useSelector(selectLists);
  const dispatch=useDispatch()


  return (
    <div>
      <div className="listsContainer">
        <h2>Your Lists</h2>
        <div className="lists">
        {(Object.entries(lists).length===0)?
        (<div className="emptyMessage">
          <h1>you have no saved lists</h1>
          <p>discover and add lists</p>
        </div>
          ):
          (Object.entries(lists).map(([listName, books]) => (
            <div key={listName} >
              <h3>{!(lists[listName].length===0)?listName:null}</h3>
              {books.map((book) => (
                  <div className="listContainer">
                <Link to={`/bookdetails/${book.id}`} className="list">
                    <p key={book.id}>{book.title}</p>
                    <img src={book.image} alt="cover" width={"50px"} />
                </Link>
                    <button className="removeFromList" title="Drop from list" onClick={()=>dispatch(removeBookFromList({bookId:book.id, listName}))}>x</button>
                  </div>
              ))}
            </div>
          )))}
        </div>
      </div>
      <>
        <Footer />
      </>
    </div>
  );
};

export default MyBooks;
