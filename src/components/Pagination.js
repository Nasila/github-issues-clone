import React from 'react';
import './IssuesPage.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const pageCount = Math.ceil(totalPosts / postsPerPage);
    
    for(let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }
    
    return (
        <nav className="center">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#!" className="page-link">{number}</a>
                    </li>
                ))}

            </ul>
        </nav>
    );
}

export default Pagination;