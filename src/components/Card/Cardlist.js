import React, { Component } from "react"
import Truncate from "react-truncate"
import {Link} from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import '../../styles/paginate.css';
 // import {getBooks} from '../../utils/http';
// import ListBook from './ListBook'



class Cardlist extends Component {  

     constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 3,
            currentPage: 0,
            pageCount: []
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        });

    };

  

  render() {
    console.log(this.props)
    const { library } = this.props
    const count = Math.ceil(library.length / this.state.perPage);
     const postData = library.slice(this.state.offset, this.state.offset + this.state.perPage)
    // const bookList = library.map(library => {
    //         return (
    //              <ListBook library={library} key={library.id}/>
    //         )
    // })


          
    return (
      <div>
          <section className="content-container">
             
           {postData.length < 1 ? (
            <div>
              <h1>Data is empty</h1>
            </div>
          ) : (
            postData.map(library => (
          <Link to={{ pathname: `/book/${library.id}`, book:library}} key={library.id}>
                    <div className="card-container">
                        <img src={'http://localhost:8001/images/'+library.image} alt={library.image} />
                        <div className="card-text-container">
                          <h3>{library.title}</h3>
                          <p>
                            <Truncate
                              lines={2}
                              ellipsis={
                                <span>
                                  ... 
                                </span>
                              }
                            >
                              {library.description}
                            </Truncate>
                          </p>
                          {/* <p>{}</p> */}
                        </div>
                    </div>
            </Link>

            ))
          )}

          
          
          </section>


          <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={count}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
      </div>
    )
  }
}

export default Cardlist;
