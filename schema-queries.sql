-- Table that stores the books
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    rating FLOAT,
    title VARCHAR (45),
    author VARCHAR (45),
    -- last time that the book was read
    date_read DATE,
    user_id INTEGER REFERENCES users(id),
    --  for the book fetched from the API (https://openlibrary.org/dev/docs/api/covers)
    cover_id VARCHAR(100)

);

-- Table that stores the reviews
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    -- each review belongs to a book
    book_id INTEGER REFERENCES books(id),
    -- text for the review
    review VARCHAR (100)
);

-- Table that stores the notes for each book
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    -- each note belongs to a book
    book_id INTEGER REFERENCES books(id),
    -- text for the note
    note VARCHAR (100)
);

-- users table 
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password TEXT -- (hashed password)
);
