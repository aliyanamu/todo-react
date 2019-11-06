import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Auth from './components/Auth'
import Home from './pages/Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '',
      width: ''
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { height, width } = this.state
    return (
      <Provider store={store}>
        <div className="App" style={{'height': height, 'width': width}}>
          <Auth/>
          <Home size={{ height, width }}/>
        </div>
      </Provider>
    );
  }
}

export default App;
