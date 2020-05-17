import React from "react";

class Main extends React.Component {
    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.push('/home')
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return null
    }
}

export default Main;