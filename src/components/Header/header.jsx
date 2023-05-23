import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './header.css';


const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

    return (
        <Navbar bg="dark" sticky="top" variant="dark">
        <Container>

          <Navbar.Brand  href="/">
          <img
              alt=""
              src="/rubik.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            GamePedia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/games" className='text' >Filter</Nav.Link>
             
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-warning" type="submit">
            Search
          </Button>
        </Form>
        </Container>
      </Navbar>




    )
}

export default Header