import React from "react";
import "../detail/bookDetail.css"
import BookDetailNavbar from "../../components/bookDetailNavbar/BookDetailNavbar";
import BookContent from "../../components/book/BookContent";
import BorrowButton from "../../components/book/BorrowButton";
import Edit from "../../components/modal/Edit";
import Delete from "../../components/modal/Delete";
import {getDetailBooks} from '../../utils/http';




// const HOST = "/api/v1/";
class BookDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: [],
            id: props.match.params.id
        };
        console.log(this.state.book)
    }


    componentDidMount = async () => {
         

          const {id} = this.state;

          await getDetailBooks({id})
          .then(res => {
            console.log(res)
              this.setState({
              book: res.data.result
            })
          })
          .catch(error => {
              if(error.response.data.message === "TokenExpiredError" || error.response.data.message === "JsonWebTokenError"){
                this.props.history.push("/refresh-token")
            }
          })
        


     };

    render() {
        const { book } = this.state;
        return (
            <div className="grid-container" >
                {book &&
                    book.map((item, index) => (
                        <div key={index}>
                            <BookDetailNavbar data={item} />
                            <div className="grid-templates-content">
                                <BookContent data={item} /> 
                                <BorrowButton data={item} />
                            </div>
                            <Edit data={item} />
                            <Delete data={item} />
                        </div>
                    ))}
                <div style={{ marginTop: "60px" }}></div>
            </div>
        );
    }
}

export default BookDetail;