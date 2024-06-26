import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";

const MyBookshelf = () => {
  const [filteredBookData, setFilteredBookData] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    const bookData = storedBookshelf.map((book) => JSON.parse(book));
    setFilteredBookData(bookData);
  }, []);

  return (
    <div>
      <h1 className="my_app_heading">MY BOOKSELF</h1>
      <div className="book_card_box">
        {filteredBookData.length > 0 ? (
          filteredBookData.map((bookInfo, i) => {
            return <BookCard key={i} id={i} value={2} bookInfo={bookInfo} />;
          })
        ) : (
          <div className="empty_box">NO BOOK IS ADDED TILL NOW!</div>
        )}
      </div>
    </div>
  );
};

export default MyBookshelf;
