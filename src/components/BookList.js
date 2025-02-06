import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { borrowBook, returnBook } from "../store/booksSlice";

//====================================================================
import next from "../images/next.png";
import back from "../images/back.png";
//====================================================================

//================== import slider from cdnjs.com ====================
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//====================================================================

export default function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="nextArrow" onClick={onClick} title="next">
        <img src={next} alt="next" width={"17px"} />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="prevArrow" onClick={onClick} title="prev">
        <img src={back} alt="back" width={"17px"} />
      </button>
    );
  };

  //============= slider setting ==================
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    variableWidth: false,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  //===============================================



  return (
    <>
      <div className="books">
        <Slider {...settings} className="trendingBooks"> 
          {books
            .filter((book) => book.category === "trending books")
            .map((book) => (
              <div key={book.id} className="book">
                <div className="bookCover">
                  <img src={book.image} alt={book.title} width={"100%"} />
                </div>
                <div className="bookContent">
                  <div>{book.title}</div>
                  <div>by {book.author}</div>
                  <div>
                    {book.to === "borrow" ? (
                      book.isBorrowed ? (
                        <button onClick={() => dispatch(returnBook(book.id))}>
                          Return
                        </button>
                      ) : (
                        <button onClick={() => dispatch(borrowBook(book.id))}>
                          Borrow
                        </button>
                      )
                    ) : (
                      <Link to={`/bookviewer/${book.id}`}>
                        <button>Read</button>
                      </Link>
                    )}

                    <Link to={`/bookdetails/${book.id}`}>
                      <button>show more</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </Slider>

        <Slider {...settings} className="classicBooks">
          {books
            .filter((book) => book.category === "classic books")
            .map((book) => (
              <div key={book.id} className="book">
                <div className="bookCover">
                  <img src={book.image} alt={book.title} width={"100%"} />
                </div>
                <div className="bookContent">
                  <div>{book.title}</div>
                  <div>by {book.author}</div>
                  <div>
                    {book.to === "borrow" ? (
                      book.isBorrowed ? (
                        <button onClick={() => dispatch(returnBook(book.id))}>
                          Return
                        </button>
                      ) : (
                        <button onClick={() => dispatch(borrowBook(book.id))}>
                          Borrow
                        </button>
                      )
                    ) : (
                      <Link to={`/bookviewer/${book.id}`}>
                        <button>Read</button>
                      </Link>
                    )}

                    <Link to={`/bookdetails/${book.id}`}>
                      <button>show more</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </Slider>

        <Slider {...settings} className="weLoveBooks">
          {books
            .filter((book) => book.category === "books we love")
            .map((book) => (
              <div key={book.id} className="book">
                <div className="bookCover">
                  <img src={book.image} alt={book.title} width={"100%"} />
                </div>
                <div className="bookContent">
                  <div>{book.title}</div>
                  <div>by {book.author}</div>
                  <div>
                    {book.to === "borrow" ? (
                      book.isBorrowed ? (
                        <button onClick={() => dispatch(returnBook(book.id))}>
                          Return
                        </button>
                      ) : (
                        <button onClick={() => dispatch(borrowBook(book.id))}>
                          Borrow
                        </button>
                      )
                    ) : (
                      <Link to={`/bookviewer/${book.id}`}>
                        <button>Read</button>
                      </Link>
                    )}

                    <Link to={`/bookdetails/${book.id}`}>
                      <button>show more</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </Slider>

        <Slider {...settings} className="recentlyReturned">
          {books
            .filter((book) => book.category === "recently returned")
            .map((book) => (
              <div key={book.id} className="book">
                <div className="bookCover">
                  <img src={book.image} alt={book.title} width={"100%"} />
                </div>
                <div className="bookContent">
                  <div>{book.title}</div>
                  <div>by {book.author}</div>
                  <div>
                    {book.to === "borrow" ? (
                      book.isBorrowed ? (
                        <button onClick={() => dispatch(returnBook(book.id))}>
                          Return
                        </button>
                      ) : (
                        <button onClick={() => dispatch(borrowBook(book.id))}>
                          Borrow
                        </button>
                      )
                    ) : (
                      <Link to={`/bookviewer/${book.id}`}>
                        <button>Read</button>
                      </Link>
                    )}

                    <Link to={`/bookdetails/${book.id}`}>
                      <button>show more</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
