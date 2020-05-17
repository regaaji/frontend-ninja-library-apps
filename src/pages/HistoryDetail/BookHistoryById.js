import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import {getBorrowBooks, putBorrowBooks} from "../../utils/http";
import './3Dbook.css';

class BookHistoryById extends React.Component {

      constructor(props){
        super(props);
        this.state = {  
          id: this.props.match.params.id,  
          listDetailData: [],
          back:  "return",
          title: "",
          books_id: "",
        }

    }

      // edit button
  editButtonHandler = async (data) => {
  
    this.setState({
      title: data.title,
      books_id: data.books_id,
      // productIdSelected: product.id,
      // formStatus: 'Edit'
    })


        const {
            books_id
        } = data;

        const {
            id
        } = this.state;

        const body = {
            id,
            books_id
        };

        await putBorrowBooks(body)
        .then((response) => {
            this.setState({
                response: response.data.result
            })

            
            alert('You have successfully returned the book')
            // window.location.reload()

          // toast.success('You have successfully returned the book')
            
        })
        .catch((error) => {
            console.log(error)
        })

    
  }
  

    async componentDidMount() {
        const role = localStorage.getItem('role');
        if (role === "2") {
            this.props.history.push('/home')
        } else if(role == null){
          this.props.history.push('/home')
        }
          const{id} =  this.state
           await getBorrowBooks({id})
        .then((response) => {
            this.setState({
                listDetailData: response.data.result
            })
            // console.log("data", response)        
        })
        .catch((error) => {
            console.log(error)
            if(error.response.data.message === "TokenExpiredError" || error.response.data.message === "JsonWebTokenError"){
                this.props.history.push("/refresh-token")
            }
        })    
        
    }

     onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }



  
   
  

    render() {
       const {listDetailData} = this.state;

        let createData;
        let changeData;
        let statusData;
        let titleData;
        let desData;
        let Contentdata;
      
           listDetailData.map(data => {
          console.log(data)
            return (
                titleData = data.title,
                desData = data.description,
                createData = data.updated_at,
                changeData = data.created_at,
                statusData = data.status,
                Contentdata = data
            )
          })

           




          // var date = moment.utc(createData).format('YYYY-MM-DD HH:mm:ss');
          // const date = moment.utc(createData).format('YYYY-MM-DD HH:mm:ss');
          var date = moment(createData);
          var date1 = moment(changeData);
          let dateComponent;
          let dateComponent1;
          let timeComponent;
          let timeComponent1;

         

           let statusButton;
//            let statusContent;
           dateComponent1 = date1.utc().format('YYYY-MM-DD');
             timeComponent1 = date1.utc().format('HH:mm:ss');
              
           if(statusData === "1"){
              statusButton = <>
                               <Link class="btn btn-primary mr-2 float-right" to="" onClick={() => this.editButtonHandler(Contentdata)}>Return</Link>
                              </>

              dateComponent = "-";
             timeComponent = "-";                
           } else {
              statusButton = <></>
            dateComponent = date.utc().format('YYYY-MM-DD');
             timeComponent = date.utc().format('HH:mm:ss');
           }
             

            
         


      
        return(
            <>
            <div className="container mt-5">
                


                  <h3 className="text-center mb-5"><span role="img" aria-label="book">📚</span> Detail History Books</h3>
                 <div className="row mt-5">
                     <div className="col-md-6 mt-5" >
                    
                      <div className="circle">
                        <div className="imgBox">
                          <div className="bark"></div>
                           {listDetailData &&
                              listDetailData.map((data, index) => (
                                <img src={'http://localhost:8001/images/'+data.name_image} alt={data.name_image}/>
                            ))}
                        </div>
                        <div className="details">
                                <h4 className="color1">{titleData}</h4>
                                {desData && <p> {desData.substr(0, 250) + "......."} </p>}
                        </div>
                      </div>
                    </div>  
                      <div className="col-md-6 mt-5">
                          
                          <div className="card shadow">
                            <div className="card-header">List Detail History</div>    
                            <div className="card-body">
                            
                                   
                         
                           <div className="table-responsive"> 
                            <table className='table table-bordered'>
                                <tbody>
                                
                                    {listDetailData &&
                                    listDetailData.map((data, index) => (
                                    <tr>
                                        <td className='font-weight-bold' width='30%'>Title</td>
                                        <td>{data.title}</td>
                                    </tr>
                                  ))}

                                  

                                    {listDetailData &&
                                    listDetailData.map((data, index) => (
                                    <tr>
                                        <td className='font-weight-bold' width='30%'>Status</td>
                                        <td> 
                                         {(data.status  === 1) ?
                                              <span className="badge badge-danger">Borrow</span>
                                            :
                                             <span className="badge badge-primary">Return</span>
                                            } 
                                        </td>
                                    </tr>
                                    ))}

                                  {listDetailData &&
                                    listDetailData.map((data, index) => (
                                    <tr>
                                        <td className='font-weight-bold' width='30%'>Date Return</td>
                                        <td> 
                                          {dateComponent} {timeComponent}
                                        </td>
                                    </tr>
                                    ))}
                                    
                                    <tr>
                                        <td className='font-weight-bold' width='30%'>Date Borrow</td>
                                        <td> 
                                            {dateComponent1} {timeComponent1}
                                        </td>
                                    </tr>
                                    

                                    



                                </tbody>


                             </table>
                             </div>

                   
                      {statusButton}

                      <Link class="btn btn-danger mr-2" to="/history">Back</Link>


                                
                                
                             </div>
                                


                        </div>

                      </div>    
                    </div>
                

              </div>  




                
            </>

        )
    }




   
}

export default BookHistoryById;