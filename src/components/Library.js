import React, { useState } from 'react';

const Library = () => {
  const [books, setBooks] = useState([
    { title: 'Mathematics Textbook', author: 'John Doe', type: 'Book', quantity: 50, subject: 'Math', class: '10' },
    { title: 'Science Lab Kit', author: 'Jane Smith', type: 'Material', quantity: 20, subject: 'Science', class: '10' },
    { title: 'English Literature', author: 'Emily Johnson', type: 'Book', quantity: 30, subject: 'English', class: '9' }
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    type: '',
    quantity: '',
    subject: '',
    class: ''
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = () => {
    setBooks([...books, { ...newBook, quantity: parseInt(newBook.quantity) }]);
    setNewBook({ title: '', author: '', type: '', quantity: '', subject: '', class: '' });
  };

  const types = ['Book', 'Material', 'Journal', 'Magazine'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Library Management</h3>
            </div>
            <div className="card-body">
              <h4>Add New Book/Material</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" name="title" value={newBook.title} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Author/Publisher</label>
                  <input type="text" className="form-control" name="author" value={newBook.author} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-control" name="type" value={newBook.type} onChange={handleChange}>
                    <option value="">Select Type</option>
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Quantity</label>
                  <input type="number" className="form-control" name="quantity" value={newBook.quantity} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" name="subject" value={newBook.subject} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Class</label>
                  <input type="text" className="form-control" name="class" value={newBook.class} onChange={handleChange} />
                </div>
              </div>
              <button className="btn btn-success" onClick={handleAddBook}>Add Book/Material</button>

              <h4 className="mt-5">Available Books and Materials</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author/Publisher</th>
                    <th>Type</th>
                    <th>Quantity</th>
                    <th>Subject</th>
                    <th>Class</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr key={index}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.type}</td>
                      <td>{book.quantity}</td>
                      <td>{book.subject}</td>
                      <td>{book.class}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
