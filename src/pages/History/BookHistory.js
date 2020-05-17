import React from "react";
import { Link } from "react-router-dom";
// import Edit from "../../components/History/HistoryBook";
import { getHistory} from "../../utils/http";

class BookHistory extends React.Component {

      constructor(props){
        super(props);
        this.state = {  
          listDetailData: [],
          back:  "return",
          user_id: "",
          title: ""
        }

    }


       

    async componentDidMount() {
        const role = localStorage.getItem('role');
        const id_user = localStorage.getItem('id_user');

        if (role === "2") {
            this.props.history.push('/home')
        } else if(role == null){
          this.props.history.push('/home')
        }
          // const{id} =  this.state
           await getHistory(id_user)
        .then((response) => {

            this.setState({
                listDetailData: response.data.result
            })
            // console.log("data", response)        
        })
        .catch((error) => {
            console.log(error)
        })    
        
    }

   

  

    render() {

         const {listDetailData} = this.state

         const id_user = localStorage.getItem('id_user');

         let createData;
           listDetailData.map(data => {
            return (
                createData = data.user_id
            )
          })
        
        let ChangeData;  
        if (createData === id_user) {
            ChangeData = this.loadFillData()
             console.log(ChangeData)
                         
        } else {
            ChangeData =  "Data is Empty"
        }  


        return(
            <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <h3 className="text-center mb-5"><span role="img" aria-label="book">📚</span> History Books</h3>
                        <div className="card shadow">

                            <div className="card-header">List History</div>    
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead className="thead-dark">
                                      <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Status</th>
                                        <th scope="cold">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      
                                        
                                        


                                        {listDetailData.length < 1 ? (
                                          <div>
                                            <p>Data Is Empty</p>
                                          </div>
                                        ) : (
                                          listDetailData.map(data => (
                                          <tr key={data.id_borrow}>
                                                    <td>{data.title}</td>
                                                    <td>
                                                          <img src={'http://localhost:8001/images/'+data.name_image} alt={data.name_image} width="50" />
                                                    </td>
                                                    <td>
                                                         

                                                       {(data.status  === 1) ?
                                                        <span className="badge badge-danger">Borrow</span>
                                                      :
                                                       <span className="badge badge-primary">Return</span>
                                                      } 
                                                    </td>
                                                    <td>
                                                       <Link class="btn btn-outline-info mr-2" to={"/detailHistory/"+data.id_borrow}>Detail</Link>
                                                       

                                                    </td>
                                                  </tr>

                                          ))
                                        )}
                                    </tbody>
                                  </table>
                                </div>
                            </div>
                                


                        </div>
                    </div>
                </div>
              </div>  


               
                
            </>



      
         
        
      

        )
    }







 loadFillData(){
  

    return this.state.listDetailData.map((data)=>{
      return(
        <tr key={data.id_borrow}>
          <td>{data.title}</td>
          <td>
                <img src={'http://localhost:8001/images/'+data.name_image} alt={data.name_image} width="50" />
          </td>
          <td>
               

             {(data.status  === 1) ?
              <span className="badge badge-danger">Borrow</span>
            :
             <span className="badge badge-primary">Return</span>
            } 
          </td>
          <td>
             <Link class="btn btn-outline-info mr-2" to={"/detailHistory/"+data.id_borrow}>Detail</Link>
             

          </td>
        </tr>
      )
    })
  }




   
}

export default BookHistory;