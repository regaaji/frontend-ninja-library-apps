import React from "react";
import {borrowBooks, returnBooks} from '../../utils/http';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseButton from '../../components/modal/style/CloseButton';
import { connect } from 'react-redux';
import { postBorrowBook } from '../../redux/action/book';


const mapStateToProps = (book) => {
  return {
    book
  }
}



class BorrowButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.data.id,
            books_id: props.data.id,
            image: props.data.image,
            statusbook: props.data.statusbook,
            title: props.data.title,
            statusBorrow: 1,
            statusReturn: 2,
            borrow:  "borrow",
            back:  "return",
            loading: false
        };

 

    }


    rentBookData = async () => {
        const { id, borrow} = this.state;
        await borrowBooks({id, borrow})
        .then((response) => {
            this.setState({
                response: response.data.result
            })
            // alert('You have successfully borrowed  book')
             
            // window.location.reload()
            toast.success('You have successfully borrowed  book');
            
        })
        .catch((error) => {
            console.log(error)
        })
      
            const id_user = localStorage.getItem('id_user');
        const {
            books_id,
            title,
            image,
            statusBorrow
        } = this.state;

        const body = {
            books_id,
            id_user,
            title,
            image,
            statusBorrow
        };


        await this.props.dispatch(postBorrowBook(body))
        .then((response) => {
            // alert('data successfully added')
            
        })
        .catch((error) => {
            console.log(error)
        })

    };

    returnBookData = async () => {
        const { id, back } = this.state;

        await returnBooks({id, back})
        .then((response) => {
            this.setState({
                response: response.data.result
            })

            
            // alert('You have successfully returned the book')
            // window.location.reload()

          toast.success('You have successfully returned the book')
            
        })
        .catch((error) => {
            console.log(error)
        })
      
          // this.props.dispatch(returnBook(this.state.id, rentBook))
    };

    render() {
         const role = localStorage.getItem('role');
        const bookAvailable = this.state.statusbook;
        let buttonStatus;
        if (bookAvailable === "Available") {

            if (role === "2") {

            } else {
            buttonStatus = <button onClick={this.rentBookData}>Borrow</button>;

            }
        } else {
            
        }
         
        return (
            <div>
                <section className="borrow-button-container">
                    <aside className="aside-items">
                    <ToastContainer  closeButton={<CloseButton />}/>
                        <div className="book-cover-img">
                            <img src={`http://localhost:8001/images/${this.state.image}`} alt="book-cover.img" />
                        </div>
                        {/* <form> */}
                        <div className="borrow-btn">{buttonStatus}</div>
                        {/* </form> */}
                    </aside>
                </section>
            </div>
        );
    }
}


export default connect(mapStateToProps)(BorrowButton);