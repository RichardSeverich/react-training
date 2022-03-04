import React from "react";

import UserActions from "./actions/UserActions"
import IUserModel from "./models/IUserModel"

class App extends React.Component {

  userActions: UserActions;

  constructor(props: any) {
    super(props)
    this.userActions = new UserActions();
    this.state = {
      result: null
    };
  }

  async componentDidMount() {
    try {
      const result = await this.userActions.getUsers();
      console.log("result")
      console.log(result)
      if (result.status == 200) {
        this.setState({ result });
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  async handleGet() {
    try {
      const result = await this.userActions.getUsers();
      console.log("result")
      console.log(result)
      if (result.status == 200) {
        this.setState({ result });
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  async handleCreate() {
    try {
      const user: IUserModel = {
        id: "1010",
        username: "admin",
        password: "admin123",
        dni: "5847856",
        name: "admin",
        fatherLastName: "admin",
        motherLastName: "admin",
        birthDate: "1989-08-25",
        telephone: "76478555",
        address: "Av. Drogon 24",
        email: "Admin@gmail.com",
        type: "admin",
        creationDate: "2021-06-01",
        updateDate: "2021-06-02",
        createdBy: "admin",
        updatedBy: "admin"
      }
      const result = await this.userActions.createUser(user);
      console.log("result")
      console.log(result)
      if (result.status == 201) {
        this.setState({ result });
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  async handleUpdate() {
    try {
      const user: IUserModel = {
        id: "1010",
        username: "admin",
        password: "admin123",
        dni: "5847856",
        name: "admin",
        fatherLastName: "admin",
        motherLastName: "admin",
        birthDate: "1989-08-25",
        telephone: "76478555",
        address: "Av. Drogon 24",
        email: "Admin@gmail.com",
        type: "admin",
        creationDate: "2021-06-01",
        updateDate: "2021-06-02",
        createdBy: "admin",
        updatedBy: "admin"
      }
      const result = await this.userActions.updateUser(user, "1010");
      console.log("result")
      console.log(result)
      if (result.status == 200) {
        this.setState({ result });
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  async handleDelete() {
    try {
      const result = await this.userActions.deleteUser("1010");
      console.log("result")
      console.log(result)
      if (result.status == 200) {
        this.setState({ result });
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  render() {
    console.log("this.state result");
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello Type Script</h1 >
        <button onClick={() => this.handleGet()}>get users</button>
        <button onClick={() => this.handleCreate()}>create user</button>
        <button onClick={() => this.handleUpdate()}>update user</button>
        <button onClick={() => this.handleDelete()}>delete user</button>
      </div>
    )
  }
}

export default App;
