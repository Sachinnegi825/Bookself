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
    <div className="book_card_box">
      {filteredBookData &&
        filteredBookData.map((bookInfo, i) => {
          return <BookCard key={i} id={i} value={2} bookInfo={bookInfo} />;
        })}
    </div>
  );
};

export default MyBookshelf;
