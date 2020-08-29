import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import ParentAndNannies from './ParentAndNannies';
import Tab from './Tab'
import Footer from './Footer'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ParentAndNannies />
                <Tab />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));