import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Books are more than just ink on paper. They hold within their pages the power to transport us to new worlds, ignite our imagination, and expand our knowledge. They are vessels of wisdom, insight, and storytelling, allowing us to explore the depths of human emotions and experience the breadth of human existence. In this essay, we will explore the magic of books and how they continue to captivate and inspire readers across the globe.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header