import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  componentDidMount() {
    setTimeout(() => {
      return this.setState({isLoading: false, movies: []})
    }, 6000)
  }
  render() {
    const {isLoading} = this.state
    return (
      <div>{isLoading ? 'Loading...' : 'Страница загружена'}</div>
    )
  }
}

export default App;
