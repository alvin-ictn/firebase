import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import fire from "./config/firebase";

class App extends React.Component {
  state = {
    uid: "",
    form : {}
  };
  // componentDidMount() {
  //   let email = "alvin.ictn@gmail.com";
  //   let password = "8870126";
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       console.log(res);
  //       fire
  //         .firestore()
  //         .collection("user")
  //         .doc(res.user.uid)
  //         .collection("try")
  //         .doc("SURE")
  //         .set({
  //           title: "tesdt",
  //           content: "content",
  //         });
  //       return res.user.uid;
  //     })
  //     .then((uid) =>
  //       this.setState({
  //         uid,
  //       })
  //     );
  // }

  // componentDidUpdate() {
  //   console.log(this.state.uid);
  //   fire
  //     .firestore()
  //     .collection("user")
  //     .doc(this.state.uid)
  //     .get()
  //     .then((res) => {
  //       console.log(res.data());
  //     });

  //     fire
  //     .firestore()
  //     .collection("user")
  //     .get()
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.docs);
  //       console.log(res.query);
  //       res.forEach(item => console.log(item.w_.path.segments[6]))
  //     });

  //   fire
  //     .firestore()
  //     .collection("user")
  //     .doc(this.state.uid)
  //     .collection("try")
  //     .doc("SURE")
  //     .get()
  //     .then((res) => {
  //       console.log(res.data());
  //     });
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.textBaru !== undefined && this.state.textBaru !== "") {
      if(this.state.edit) {
        this.setState({    
        })
      }else {
          this.setState(
            {
              todo: [
                ...this.state.todo,
                {
                  text: this.state.textBaru,
                  complete: false,
                  edit : false,
                  date: new Date(),
                  isEdited : false,
                },
              ],
              textBaru: "",
            },
          );
          e.target.childNodes[0].value = "";
        }
      }
  };

  handleInput = (e) => {
    console.log(e.target)
    console.log(Boolean(e.target.form))
    console.log(e.target.form)
    let data = {...this.state.form,[e.target.name]:e.target.value}
    this.setState({form : data})
    console.log(this.state)
  };
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
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input form="true" name="email" type="text" onChange={(e) => this.handleInput(e)} />
        <input form="true" name="password" type="text" onChange={(e) => this.handleInput(e)} />
        </form>
      </div>
    );
  }
}

export default App;
