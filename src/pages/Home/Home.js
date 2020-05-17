import React from "react";
import { connect } from "react-redux";
import Navbar from "../../components/homeNavbar/Navbar";
import Carousel from "../../components/Carousel/Carousel"
import HomeHeader from "../../components/Header/homeHeader";
import Cardlist from "../../components/Card/Cardlist"
import Sidebar from "../../components/Sidebar/Sidebar";
import AddModal from "../../components/modal/AddModal"
import { 
  getAllBook, 
  getAllSearch, 
  getSortTitle, 
  getSortAuthor, 
  getSortGenre, 
  getPagination 
} from "../../redux/action/book";
import '../Home/Home.css';


const mapStateToProps = (book) => {
  return {
    book
  }
}



class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            library: [],
            search: "",
            sortBy: "",
            page: "",
            limit: ""
        };
    }

    getBookData = async() => {  

    await this.props.dispatch(getAllBook())
    //console.log('book',this.props.book.book.bookData.result)
     this.setState({
     library: this.props.book.book.bookData.result
   })
     


  }
  
    componentDidMount() {
     
        this.getBookData()
    }





    render(){

        const handleSearch = async (title) => {

            await this.props.dispatch(getAllSearch(title))  

            // console.log('book',this.props.book.bookData.result)
            this.setState({
               library: this.props.book.book.bookData.result
             })

        }

        const handleSort = async () => {

             await this.props.dispatch(getSortTitle())

               this.setState({
              library: this.props.book.book.bookData.result
             });
      
        } 

        const handleSortGen = async () => {

            await this.props.dispatch(getSortGenre())

               this.setState({
              library: this.props.book.book.bookData.result
             });
      
        }

        const handleSortAuth = async () => {

             await this.props.dispatch(getSortAuthor())

               this.setState({
              library: this.props.book.book.bookData.result
             });
      
        }

        const handlePage = async (val) => {
           
             await this.props.dispatch(getPagination(val))

               this.setState({
              library: this.props.book.book.bookData.result
             });

        }


    const {library} = this.state;
        console.log(library)
            return(
                <div className="grid-container" id="main">
                    <div>

                    <Navbar 
                    onSearch={handleSearch} 
                    onSort={handleSort} 
                    onSortGen={handleSortGen}
                    onSortAuth={handleSortAuth}
                    onPage={handlePage}/>
                    
                    <Carousel />
                    
                    <HomeHeader />
                    
                    <Cardlist library={library}/>
               
                    </div>
                    <Sidebar />
                    <AddModal />
                </div>
              
            );

    }
};


export default connect(mapStateToProps)(Home);