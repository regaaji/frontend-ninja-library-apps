import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import "../../components/modal/style/Addmodal.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseButton from '../modal/style/CloseButton';
import { postBook } from '../../redux/action/book';

const mapStateToProps = (book) => {
  return {
    book
  }
}


class AddModal extends React.Component {
       

        state = {
            id: "",
            title: "",
            image: "",
            description: "",
            genre: "",
            author: "",
            status: "",
            files: [],
            genreData: [],
            statusData: [],
            authorData: []
        };


    checkFileSize=(event)=>{
         let key = event.target.files[0]
         let size = 2000000 
         let err = ""; 
         
         if (key.size > size) {
          err += key.type+' is too large, please pick a smaller file\n';
        
     };
    //   if (err !== '') {
    //      event.target.value = null
    //      console.log(err)
    //      return false
    // }
    toast.error(err)

    return true;

    }

    checkMimeType=(event)=>{
        //getting file object
        let key = event.target.files[0] 
        console.log(key)
        //define message container
        let err = []
        // list allow mime type
        const types = ['image/png', 'image/jpeg', 'image/jpg']
       
         if (types.every(type => key.type !== type)) {
             // create error message and assign to container   
             err = key.type+' is not a supported format \n';
             
        };
            toast.error(err)

            // if (err !== '') { // if message not same old that mean has error 
            //     event.target.value = null // discard selected file
            //     return false; 
            // }
         return true;
     }    
    

    handlerChange = (e) => {
        const key = e.target.name
        this.setState({
            [key] : e.target.value
        })
    }

    handleUpload = (event) => {
        const key = event.target.name
          if(this.checkMimeType(event) && this.checkFileSize(event)){ 
          // if return true allow to setState
            this.setState({
                [key] : event.target.files[0]
            })
        }
    }

    

   onSubmit = async (e) => {
        e.preventDefault()
        const {
            id,
            title,
            image,
            description,
            genre,
            author,
            status
        } = this.state;

        const body = {
             id,
            title,
            image,
            description,
            genre,
            author,
            status
        };


        await this.props.dispatch(postBook(body))
        .then((response) => {
            alert('data successfully added')
            
        })
        .catch((error) => {
            console.log(error)
        })
                    
    }

    renderGenreData = () => {
        axios.get("http://localhost:8001/book/genres")
            .then(({ data }) => {
                this.setState({
                    genreData: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderAuthorData = () => {
        axios.get("http://localhost:8001/book/authors")
            .then(({ data }) => {
                this.setState({
                    authorData: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

      renderStatusData = () => {
        axios.get("http://localhost:8001/book/status")
            .then(({ data }) => {
                this.setState({
                    statusData: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount = () => {
        this.renderGenreData();
        this.renderAuthorData();
        this.renderStatusData();
    }

    render() {
        const { genreData, authorData, statusData } = this.state;
        return (
          <div id="addModal" className="add-modal">
                <div className="add-modal-content">
                    <div className="add-modal-header">
                        <span className="add-close">&times;</span>
                        <p>Add Data</p>
                    </div>
                    <div className="add-modal-body">
                        <div className="form-wrapper">
                            <form onSubmit={this.onSubmit}>
                                
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="image-url">Url Image</label>
                                    </div>
                                    <div className="col-80">
                                        
                                        <input
                                            type="file"
                                            id="image-url"
                                            name="image"
                                            required
                                            onChange={this.handleUpload}
                                        /> 
                                        <ToastContainer  closeButton={<CloseButton />}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="author">Author</label>
                                    </div>
                                    <div className="col-80">
                                       <select
                                            onChange={this.handlerChange}
                                            id="author"
                                            name="author"
                                            required
                                        >
                                            <option value="">Please Choose a Author</option>
                                            {authorData.length < 1 ? (
                                                <option value="0">Author Data is Empty</option>
                                            ) : (
                                                    authorData &&
                                                    authorData.map(item => (
                                                        <option key={item.id} value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="book-title">Title</label>
                                    </div>
                                    <div className="col-80">
                                        <input
                                            type="text"
                                            id="bookTitle"
                                            name="title"
                                            placeholder="Book's Title"
                                            required
                                            onChange={this.handlerChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="image-url">Genre</label>
                                    </div>
                                    <div className="col-80">
                                        <select
                                            onChange={this.handlerChange}
                                            id="genre"
                                            name="genre"
                                            required
                                        >
                                            <option value="">Please Choose a Genre</option>
                                            {genreData.length < 1 ? (
                                                <option value="0">Genre Data is Empty</option>
                                            ) : (
                                                    genreData &&
                                                    genreData.map(item => (
                                                        <option key={item.id} value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="status">Status</label>
                                    </div>
                                    <div className="col-80">
                                        <select
                                            onChange={this.handlerChange}
                                            id="status"
                                            name="status"
                                            required
                                        >
                                            <option value="">Please Choose a Status</option>
                                            {statusData.length < 1 ? (
                                                <option value="0">Status Data is Empty</option>
                                            ) : (
                                                    statusData &&
                                                    statusData.map(item => (
                                                        <option key={item.id} value={item.id}>
                                                            {item.name}
                                                        </option>
                                                    ))
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="book-description">Description</label>
                                    </div>
                                    <div className="col-80">
                                        <textarea
                                            required
                                            id="description"
                                            name="description"
                                            placeholder="Book's Description"
                                            style={{ height: "200px" }}
                                            onChange={this.handlerChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <button type="submit">
                                        Save
                                    </button>
                                </div>
                            </form>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddModal);