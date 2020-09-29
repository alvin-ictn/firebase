import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import fire from "./config/firebase";

class App extends React.Component {
  state = {
    uid: "",
  };
  componentDidMount() {
    let email = "alvin.ictn@gmail.com";
    let password = "8870126";
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        fire
          .firestore()
          .collection("user")
          .doc(res.user.uid)
          .collection("try")
          .doc("SURE")
          .set({
            title: "tesdt",
            content: "content",
          });
        return res.user.uid;
      })
      .then((uid) =>
        this.setState({
          uid,
        })
      );
  }

  componentDidUpdate() {
    console.log(this.state.uid);
    fire
      .firestore()
      .collection("user")
      .doc(this.state.uid)
      .get()
      .then((res) => {
        console.log(res.data());
      });

      fire
      .firestore()
      .collection("user")
      .get()
      .then((res) => {
        console.log(res);
        console.log(res.docs);
        console.log(res.query);
        res.forEach(item => console.log(item.w_.path.segments[6]))
      });

    fire
      .firestore()
      .collection("user")
      .doc(this.state.uid)
      .collection("try")
      .doc("SURE")
      .get()
      .then((res) => {
        console.log(res.data());
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
