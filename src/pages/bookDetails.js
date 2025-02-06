import React from "react";
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { borrowBook, returnBook, addComment,removeComment,addBookToList } from "../store/booksSlice";
import starImage from "../images/star.png"

import "./bookDetails.css"
import Footer from "../components/footer";



export default function BookDetails(){
    const {id}=useParams()
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();
    const book = books.find((b) => b.id === parseInt(id));


    const [comment,setComment]=useState()
    const [stars,setStars]=useState()
    const [listName, setListName] = useState("");
    
    if (!book) return <p>Book not found</p>
    
   
    const RemoveComment = (bookId, index) => {
        dispatch(removeComment({ bookId, commentIndex: index }));
      };
    
      const Submit = () => {
         if(comment && stars > 0){
            dispatch(addComment({ bookId: book.id, comment, stars }));
        setComment("");
        setStars(0);
         }
         else{
             alert("you didn't enter any comment,or stars")
         }
         
      };
      const AddToList = () => {
        if (listName === "") {
          alert("Please enter a list name");
          return;
        }
        dispatch(addBookToList({ bookId: book.id, listName }));
        setListName("");
      };
    

    return(
        <>
        <div className="bookDetailsSection">
            {books.filter((book)=>book.id===Number(id)).map((book)=>(
                <div>
                    <div className="options">
                        <div className="bookImage">
                            <img src={book.image} alt={book.title}/>
                        </div>
                        <div className="bookButtom">
                            {book.to==="borrow" ?(
                                book.isBorrowed ? (
                                    <button onClick={() => dispatch(returnBook(book.id))}>
                                        Return
                                    </button>
                                    ) : (
                                    <button onClick={() => dispatch(borrowBook(book.id))}>
                                        Borrow
                                    </button>
                                )
                            ):(
                                <Link className="buttom" to={`/bookviewer/${book.id}`}> 
                                    <button style={{width:"100%",height:"100%"}}>Read</button>
                                </Link>
                                )
                            }
                        </div>
                        
                        {book.to==="borrow" ?(
                            <div>
                                <div className="bookBD">
                                    <span>borrow duration:</span>
                                    <span>{book.borrow_duration}</span>
                                </div>
                                <div className="bookStatus">
                                    <span>status:</span>
                                    <span>{book.status}</span>
                                </div>
                            </div>
                        ):null}
                        <div className="addToListForm">
                        <div>Add To List</div>
                            <input
                            type="text"
                            placeholder="Enter list name"
                            value={listName}
                            onChange={(e) => setListName(e.target.value)}
                            />
                            <button onClick={AddToList}>Add</button>
                        </div>
                        <div className="comment">
                                <textarea placeholder="comment" value={comment} onChange={(e)=>setComment(e.target.value)}/> 
                                               
                                <div className="rating">
                                    {[5, 4, 3, 2, 1].map((num) => (
                                    <React.Fragment key={num}>
                                        <input
                                        value={num}
                                        name="rate"
                                        id={`star${num}`}
                                        type="radio"
                                        onChange={(e)=>setStars(parseInt(e.target.value))}
                                        />
                                        <label title={num} htmlFor={`star${num}`}></label>
                                    </React.Fragment>
                                    ))}
                                </div>
                            <button onClick={Submit}>submit</button>
                        </div>
                        <div className="userReviews">User Reviews</div>
                        {book.reviews.map((r,index)=>(
                            <div className="bookReview">
                                <span className="star">
                                    {[...Array(Number.isInteger(r.stars) ? r.stars : 0)].map((_, i) => (
                                        <img key={i} src={starImage} alt="star" width="15px" />
                                    ))}
                                </span>
                                <span>
                                    {r.comment}
                                    <button onClick={() => RemoveComment(book.id,index)} style={{background:"none",border:"none",cursor:"pointer"}}>🗑️</button>
                                </span>

                                
                            </div>
                        ))}
                        


                    </div>
                        
                    <div className="bookInformation">
                            <div className="bookInfo">
                                <div className="bookTitle">
                                    {book.title}
                                </div>
                                <div className="bookAuthor">
                                    <span>
                                        by
                                    </span>
                                    <span>
                                    <a href={`https://www.google.com/search?q=${encodeURIComponent(book.author)}`} target="_blank" rel="noopener noreferrer" title="search">
                                        {book.author}
                                    </a>
                                    </span>
                                </div>
                                <div className="bookStars">
                                        <span className="star">
                                            {[...Array(book.stars)].map((_, i) => (
                                                <img key={i} src={starImage} alt="star" width="15px" />
                                            ))}
                                        </span>  
                                </div>
                                <div className="bookSynopsis">
                                    <div>Synopsis:</div>
                                    <ul>{book.synopsis}</ul>
                                </div>
                                <div className="bookGenre">
                                    <span>Genre:</span>
                                    <span>{book.genre}</span>
                                </div>
                                <div className="bookPD">
                                    <span> publish date:</span>
                                    <span>{book.publish_date}</span>
                                </div>
                                <div className="bookPP">
                                    <span> publish place:</span>
                                    <span>{book.publish_place}</span>
                                </div>
                                <div className="bookP">
                                    <span> publisher:</span>
                                    <span>{book.publisher}</span>

                                </div>
                                <div className="bookPages">
                                    <span>pages:</span>
                                    <span>{book.pages}</span>
                                </div>
                                <div className="bookLanguage">
                                    <span>language:</span>
                                    <span>{book.language}</span>
                                </div>
                                <div className="bookISBN">
                                    <span>ISBN:</span>
                                    <span>{book.ISBN}</span>
                                </div>
                            </div>

                            <div className="relatedBooks">
                                <div>Related Books</div>
                                <div>
                                    {books
                                    .filter((b) => (b.genre === book.genre || b.category === book.category) && b.id !== book.id)
                                    .map((b) => (
                                        <Link to={`/bookdetails/${b.id}`}>
                                            <img key={b.id} src={b.image} alt={b.title} title={b.title} />
                                        </Link>
                                    ))}
                                    
            
                                </div>
                                
                            </div>
                    </div>
                </div>
            ))}
        </div>
                <div>
                    <Footer/>
                </div>
        </>
    )
}