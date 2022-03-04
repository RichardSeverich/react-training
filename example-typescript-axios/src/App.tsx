import React from "react";

import ApiConnector from "./api/ApiConnector";

class App extends React.Component {

  apiConnector: ApiConnector;

  constructor(props: any) {
    super(props)
    this.apiConnector = new ApiConnector();
    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    try {
      // const response = await this.apiConnector.connector.post('character', data)
      // https://rickandmortyapi.com/api/character
      const response = await this.apiConnector.connector.get('character')
      console.log("response")
      console.log(response)
      if(response.status == 200) {
        this.setState({data: response.data.results});
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  render() {
    console.log("this.state");
    console.log(this.state);
    return (<div className="App">
      <h1>Hello Type Script</h1 >
    </div>)
  }
}

export default App;
