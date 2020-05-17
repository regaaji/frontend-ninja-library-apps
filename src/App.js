import React from 'react';
 // import Header from './components/Header';
 // import Footer from './components/Footer';
import BookDetails from "./pages/detail/bookDetail";
import BookHistory from "./pages/History/BookHistory";
import BookHistoryById from "./pages/HistoryDetail/BookHistoryById";
import BookManage from "./pages/Manage/BookManage";
import BookManageGenreAdd from "./pages/Manage/BookManageGenreAdd";
import BookManageGenreEdit from "./pages/Manage/BookManageGenreEdit";
import BookManageAuthorAdd from "./pages/Manage/BookManageAuthorAdd";
import BookManageAuthorEdit from "./pages/Manage/BookManageAuthorEdit";
import Main from "./pages/Main/Main"
import Home from "./pages/Home/Home"
import Login from './pages/login/login';
import RefreshToken from './pages/RefreshToken/RefreshToken';
import Register from "./pages/Register/Register"
import './styles/index.css';
import './styles/animate.css';
import store from "./redux/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  return(
    <div>
    <Provider store={store}>
    	 <Router>
           <Route path='/' exact component={Main} />
           <Route path='/home' render={(props) => (<Home {...props} />)} />
           <Route path='/login' component={Login} />
           <Route path='/refresh-token' component={RefreshToken} />
           <Route path='/register' component={Register} />
           <Route path={"/book/:id" } component={BookDetails} />
           <Route path={"/history" } component={BookHistory} />
           <Route path={"/detailHistory/:id" } component={BookHistoryById} />
           <Route path={"/manage" } component={BookManage} />
           <Route path={"/manageGenre/add" } component={BookManageGenreAdd} />
           <Route path={"/manageGenre/edit/:id" } component={BookManageGenreEdit} />
           <Route path={"/manageAuthor/add" } component={BookManageAuthorAdd} />
           <Route path={"/manageAuthor/edit/:id" } component={BookManageAuthorEdit} />
      	</Router>
        </Provider>
    </div>
    );
};

export default App;
