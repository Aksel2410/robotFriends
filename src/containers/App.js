import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users').then(response => {
          return response.json();
        }).then(users => {
          this.setState({ robots:users });
        })
    }

  onSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  };

  render() {
    const {robots, searchTerm} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm);
    })

    if (!robots.length) {
      return (<h1 style={{textAlign: 'center'}}>Loding</h1>)
    }

    return(
      <div className='tc'>
        <h1>Robo Friends</h1>
        <SearchBar onSearchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App
