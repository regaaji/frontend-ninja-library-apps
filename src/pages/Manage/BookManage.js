import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { getAllGenre, deleteGenreById } from '../../redux/action/genre';
import { getAllAuthor, deleteAuthorById  } from '../../redux/action/author';


const mapStateToProps = (book, genre) => {
  return {
    book, genre
  }
}

class BookManage extends React.Component {

      constructor(props){
        super(props);
        this.state = {
          listGenre:[],
          listAuthor: []
        }
      }


    componentDidMount() {
        const role = localStorage.getItem('role');
        if (role === "1") {
            this.props.history.push('/home')
        } else if(role == null){
            this.props.history.push('/home')
        }
            this.loadGenre()
            this.loadAuthor()
        
    }

    async loadGenre(){

        await this.props.dispatch(getAllGenre())
         this.setState({
         listGenre: this.props.book.genre.genreDataList.result
       })

       console.log("data", this.props)
    }


 
    async loadAuthor(){

        await this.props.dispatch(getAllAuthor())
         this.setState({
         listAuthor: this.props.book.author.authorDataList.result
       })
    }


    render() {
        return(
            <>
            <h3 className="text-center mt-4"> <Link to={"/home"} className="float-left" style={{marginLeft: 120}}><i className="fa fa-arrow-circle-left"></i></Link> Manage Genre And Author</h3>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <div className="card-header">
                            List Genre
                            <Link class="btn btn-outline-primary float-right" to={"/manageGenre/add"}>Add</Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover table-striped">
                                    <thead className="thead-dark">
                                      <tr>
                                        <th scope="col">Name</th>
                                        <th colspan="2">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.loadFillData()}
                                      
                                    </tbody>
                                  </table>
                            </div>

                        </div>
                    </div>
                </div>
              </div>  


              <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow">
                            <div className="card-header">
                            List Author
                            <Link class="btn btn-outline-primary float-right" to={"/manageAuthor/add"}>Add</Link>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover table-striped">
                                    <thead className="thead-dark">
                                      <tr>
                                        <th scope="col">Name</th>
                                        <th colspan="2">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {this.loadFillData1()}
                                      
                                    </tbody>
                                  </table>
                            </div>

                        </div>
                    </div>
                </div>
              </div> 




                
            </>

        )
    }

    loadFillData(){

   
    return this.state.listGenre.map((data)=>{
      return(
        <tr key={data.id}>
          <td>{data.name}</td>
          <td>
             <Link class="btn btn-outline-info mr-2" to={"/manageGenre/edit/"+data.id}>Edit</Link>
             <Link class="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}>Delete</Link>
          </td>
        </tr>
      )
    })
  }


  loadFillData1(){


    return this.state.listAuthor.map((data)=>{
      return(
        <tr key={data.id}>
          <td>{data.name}</td>
          <td>
             <Link class="btn btn-outline-info mr-2" to={"/manageAuthor/edit/"+data.id}>Edit</Link>
             <Link class="btn btn-outline-danger"  onClick={()=>this.onDelete1(data.id)}>Delete</Link>
          </td>
        </tr>
      )
    })
  }

  onDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  async sendDelete(id){
         await this.props.dispatch(deleteGenreById(id))
         .then((response) => {
             if (response) {
                Swal.fire(
                  'Deleted!',
                  'Your genre has been deleted.',
                  'success'
                  )
                this.loadGenre()
                }
            })    
        
        .catch((error) => {
            alert("data failed to delete")
        })
  }  


   onDelete1(id){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.sendDelete1(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  async sendDelete1(id){
         await this.props.dispatch(deleteAuthorById(id))
        .then((response) => {
             if (response) {
                Swal.fire(
                  'Deleted!',
                  'Your author has been deleted.',
                  'success'
                  )
                this.loadAuthor()
                }
            })    
        
        .catch((error) => {
            alert("data failed to delete")
        })
  }   

}

export default connect(mapStateToProps)(BookManage);