import React from "react";
//import User from "./User";
import UserGrid from "./UserGrid";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ExtractFromJSON from "../model";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      clientList: [],
      clientGrid: [],
      byGender: []
    };
  }

  componentDidMount() {
    fetch("http://www.json-generator.com/api/json/get/cvekPXJxbC?indent=2", {
      type: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          clients: data,
          clientList: ExtractFromJSON.getProperty(data, "company"),
          clientGrid: ExtractFromJSON.getUserGrid(data),
          byGender: ExtractFromJSON.getUsersByGender(data)
        });
      })
      .catch(err => {
        return err;
        //use mesg bus object to display error
        //console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <Header title="Clientèle Systeem" />
          <UserGrid
            userList={this.state.clientGrid}
            //title="Clinet List"
            desc="list of all active clients"
          />
        </div>
        <Footer desc="@ coryright 2018, all rights are reserved." />
      </div>
    );
  }
}
export default App;
