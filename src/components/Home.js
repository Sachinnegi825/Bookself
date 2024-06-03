import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import LoadingIcon from "../Loading";

const Home = () => {
  const [bookData, setBookdata] = useState(null);
  const [searchBook, setSearchbook] = useState("");
  const [filteredBookData, setFilteredBookData] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getBookData();
  }, []);

  const getBookData = async () => {
    const apiResponse = await fetch(
      "https://openlibrary.org/search.json?q=fiction&limit=10&page=1"
    );
    const data = await apiResponse.json();
    setBookdata(data?.docs);
    setFilteredBookData(data?.docs);
    setLoading(false);
  };

  useEffect(() => {
    if (searchBook) {
      const filteredData = bookData?.filter((book) =>
        book.title.toLowerCase().includes(searchBook.toLowerCase())
      );
      setFilteredBookData(filteredData);
    } else {
      setFilteredBookData(bookData);
    }
  }, [searchBook, bookData]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchbook(e.target.value);
  };

  return (
    <div>
      <h1 className="my_app_heading">BOOKSELF</h1>
      <button className="btn">
        <Link to={"/my_bookself"}> My Bookself</Link>
      </button>

      <div className="search_box">
        <label htmlFor="search" style={{ color: "white" }}>
          Search By Book Name :
        </label>
        <input
          type="text"
          value={searchBook}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="book_card_box">
        {Loading ? (
          <LoadingIcon />
        ) : (
          filteredBookData &&
          filteredBookData?.map((bookInfo, i) => {
            return <BookCard key={i} id={i} value={1} bookInfo={bookInfo} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
