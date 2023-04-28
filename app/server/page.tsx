import React from 'react'

type Book = {
  id:number;
  name:string;
  type:string;
  available:boolean;
}

async function getBoooks () {
  const response = await fetch("https://simple-books-api.glitch.me/books", {
    cache: "no-store",
  });
  const data = response.json();
  return data;
}

async function staticPage() {

  const books = await getBoooks();
  console.log(books);



  return (
    <div>
      <b>Server Page</b>
      <ul>
        {books.map((book: Book) => (
          <li key={book.id}>
            {book.name} - {book.type}{" "}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default staticPage