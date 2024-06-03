import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookCard = ({ bookInfo, id, value }) => {
  const { title, author_name, edition_count } = bookInfo;

  const addToBookshelf = () => {
    const bookshelf = new Set(
      JSON.parse(localStorage.getItem("bookshelf")) || []
    );
    const newBook = JSON.stringify({ title, author_name, edition_count });
    bookshelf.add(newBook);
    localStorage.setItem("bookshelf", JSON.stringify([...bookshelf]));
    toast.success("Book Added Succesfully");
  };

  const removeBookself = () => {
    const bookshelf = new Set(
      JSON.parse(localStorage.getItem("bookshelf")) || []
    );
    const bookToRemove = JSON.stringify({ title, author_name, edition_count });
    bookshelf.delete(bookToRemove);
    localStorage.setItem("bookshelf", JSON.stringify([...bookshelf]));
    toast.error("Book Remove Succesfully");
    window.location.reload();
  };

  return (
    <div className="book_card" id={id}>
      <div>
        <p>Title: {title}</p>
        <p>Author Name: {author_name[0]}</p>
        <p>Edition: {edition_count}</p>
      </div>

      {value === 1 ? (
        <button className="btn" onClick={addToBookshelf}>
          Add to Bookshelf
        </button>
      ) : (
        <button className="remove_btn" onClick={removeBookself}>
          Remove From Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard;
