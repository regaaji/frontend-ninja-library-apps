import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { updateGenreChange } from '../../redux/action/genre';


const mapStateToProps = (book) => {
  return {
    book
  }
}

class BookManageGenreEdit extends React.Component {

      constructor(props){
        super(props);
        this.state = {  
          id: this.props.match.params.id,  
          name: ""
        }
      }

    componentDidMount() {
        const role = localStorage.getItem('role');
        if (role === "1") {
            this.props.history.push('/home')
        } else if(role == null){
          this.props.history.push('/home')
        }
         
          
        
    }

     onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

   onSubmit = async (e) => {
        e.preventDefault() 

        const {
           id, name
        } = this.state;

        const body = {
           id, name
        };


        await this.props.dispatch(updateGenreChange(body))
        .then((response) => {
            alert('data successfully changed')
            
        })
        .catch((error) => {
            console.log(error)
        })              
    }
  

    render() {
        return(
            <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="card shadow">
                            <div className="card-header">Edit Genre</div>    
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-row justify-content-center">
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Name </label>
                                                <input onChange={this.onChange} type="text" name="name" id="" />
                                            </div>
                                        </div>
                                       
                                        <Link class="btn btn-outline-info mr-2" to={"/manage"}>Back</Link>
                                        <input type="submit" value="Edit" className="btn btn-primary float-right" />
                                </form>
                                    </div>
                                


                        </div>
                    </div>
                </div>
              </div>  




                
            </>

        )
    }




   
}

export default connect(mapStateToProps)(BookManageGenreEdit);