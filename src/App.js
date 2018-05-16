import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: []
        }
    }
    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, { method: 'GET'})
            .then(response => response.json())
            .then(json => {
                let { items } = json;
                this.setState({items});
            });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Book Explorer</h1>
        </header>
          <FormGroup>
              <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Search for a Book and hit enter!!"
                    onChange={(event) => this.setState({query: event.target.value })}
                    onKeyPress={event => {
                        if(event.key === 'Enter'){
                            this.search()
                        }
                    }}
                    style={styles.textField}
                  />
              </InputGroup>
          </FormGroup>
          <Gallery items={this.state.items}/>
      </div>
    );
  }
}
const styles = {
  textField: {
      marginTop: 20,
      height: 20,
      padding: 10,
      width: 500,
      fontSize: 20,
  }
};
export default App;
