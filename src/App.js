import React, { Component } from 'react'
import axios from 'axios'
import NewsList from './components/NewsList'
import SearchBox from './components/SearchBox'
export default class App extends Component {

  state = {
    sources: [],

    searchField: ''
  }

  async componentDidMount() {

    const res = await axios('https://newsapi.org/v1/sources');

    this.setState({
      sources: res.data.sources
    })

  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    })

    console.log(event.target.value)


  }



  render() {


    return (
      <div className="container">
        <h1> Today's News</h1>
        <SearchBox searchChange={this.onSearchChange} />

        <div className="card-column">


          <NewsList
            sources={this.state.sources}

          />
        </div>




      </div>
    )
  }
}
