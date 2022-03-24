import React from 'react'
import Button from 'react-bootstrap/Button';


const Post = (props) => {
    const {
        postPerPage,
        totalPosts,
        currentPage,
        paginate,
        prevPage,
        nextPage,

    } = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
       pageNumbers.push(1);
    }
    return (
      <nav>
        <div className='pagination justify-content-center'>
          {currentPage !==1 && (
              <li>
                <Button
                style={{cursor: "pointer"}}
                type="primary"
                onClick={() => prevPage()}
                >
                Previous
                </Button> 
              </li>
          )}
             {pageNumbers.map((num => (
                 <li className='page-item' key={num}>
                  <a
                  onClick={() => paginate(num)}
                  className='page-link'
                  style={{ curso: 'Pointer'}}
                  >
                   {num}
                  </a>
                 </li>
             )))}
               {pageNumbers.length !== currentPage && (
                <li>
                  <Button
                 style={{ cursor: "pointer"}}
                 type="primary"
                 onClick={() => nextPage()}
                  >
                   Next
                  </Button>  
                </li>
            )}
        </div>
      </nav>
    );
};

export default Post;
