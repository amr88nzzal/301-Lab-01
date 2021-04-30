import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
// import Form from './component/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Form /> */}
        <Main />
        <Footer />
      </div>);
  }
}

export default App;
