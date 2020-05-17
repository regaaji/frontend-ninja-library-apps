import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { postAuthorCreator } from '../../redux/action/author';


const mapStateToProps = (book) => {
  return {
    book
  }
}


class BookManageAuthorAdd extends React.Component {

      constructor(props){
        super(props);
        this.state = {
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
           name
        } = this.state;

        const body = {
            name
        };


        await this.props.dispatch(postAuthorCreator(body))
        .then((response) => {
            alert('data successfully added')
            
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
                            <div className="card-header">Add Author</div>    
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-row justify-content-center">
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Name </label>
                                                <input onChange={this.onChange} type="text" name="name" id="" />
                                            </div>
                                        </div>
                                       
                                        <Link class="btn btn-outline-info mr-2" to={"/manage"}>Back</Link>
                                        <input type="submit" value="Add" className="btn btn-primary float-right" />
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

export default connect(mapStateToProps)(BookManageAuthorAdd);