import React from "react";
import "../modal/style/Edit.css";
import {putBooks, getGenre, getAuthor} from '../../utils/http';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseButton from '../modal/style/CloseButton';

class HistoryBook extends React.Component {
     constructor(props) {
        super(props);

        this.state = {
            id: props.data.id,
            title: props.data.title,
            image: props.data.image,
            description: props.data.description,
            genre: props.data.genre,
            author: props.data.author,
            status: props.data.status,
            genreData: [],
            authorData: []
        };


    }

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

        await putBooks({id, title, image, description, genre, author, status})
        .then((response) => {
            this.setState({
                response: response.data.result
            })
            alert('data successfully changed')
            
        })
        .catch((error) => {
            console.log(error)
        })
                    
    }

    renderGenreData = async () => {
         await getGenre()
                .then(({ data }) => {
                this.setState({
                    genreData: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderAuthorData = async () => {
       await getAuthor()
          .then(({ data }) => {
                this.setState({
                    authorData: data.result
                });
            })
            .catch(error => {
                console.log(error);
            });     
    }

    componentDidMount = () => {
        this.renderGenreData();
        this.renderAuthorData();
    }

    render() {

        const { genreData, authorData } = this.state;
        return (
            
            <div id="editModal" className="edit-modal">
                <div className="edit-modal-content">
                    <div className="edit-modal-header">
                        <span className="close">&times;</span>
                        <p>Edit Data</p>
                    </div>
                    <div className="edit-modal-body">
                        <div className="form-wrapper">

                            <form onSubmit={this.onSubmit}>
                                
                                <div className="row">
                                    <div className="col-20">
                                        <label htmlFor="image-url">Image</label>
                                         
                                    </div>
                                    <div className="col-80">
                                       <input
                                            type="file"
                                            id="image-url"
                                            name="image"
                                            required
                                            onChange={this.handleUpload}
                                        />         
                                    </div>
                                    <ToastContainer  closeButton={<CloseButton />}/>
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
                                            value={this.state.title}
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
                                        <label htmlFor="book-description">Description</label>
                                    </div>
                                    <div className="col-80">
                                        <textarea
                                            required
                                            id="description"
                                            name="description"
                                            placeholder="Book's Description"
                                            style={{ height: "200px" }}
                                            value={this.state.description}
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

export default HistoryBook;