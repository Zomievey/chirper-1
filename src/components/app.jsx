import React, { Component } from "react";
import Timeline from "./timeline";
import Navbar from "./navbar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      headline: "Chirper",
      inputName: "",
      inputChirp: "",
      time: undefined,
      //   hasLoaded: false,
      chirpArray: []
    };
  }

  //   componentDidMount() {
  //     this.setState({ hasLoaded: true });
  //   }

  //text enteredy by user in name input field
  handleOnChange(e, inputs) {
    if (inputs === "enteredName") {
      this.setState({ inputName: e.target.value });
    } else if (inputs === "enteredChirp") {
      this.setState({ inputChirp: e.target.value });
    }
  }

  handleOnClick() {
    if (this.state.inputName !== "" && this.state.inputChirp !== "") {
      let currentDate = new Date();
      let newChirp = {
        time: `${currentDate.getMonth() + 1}/
        ${currentDate.getDate()}/
        ${currentDate.getFullYear()} @
        ${currentDate.getHours()}:
        ${currentDate.getMinutes()}`,
        inputName: this.state.inputName,
        inputChirp: this.state.inputChirp
      };
      //passes info into the array after what had already been entered into array
      this.setState({ chirpArray: [...this.state.chirpArray, newChirp] });
    }
  }

  render() {
    // if (this.state.hasLoaded === true) {
    return (
      <React.Fragment>
        <Navbar navHeadline="Chirper" />
        <div class="form-group">
          <input
            class="form-control"
            style={{ width: "40%" }}
            id="nameInput"
            type="text"
            placeholder="Your Name"
            value={this.state.inputName}
            onChange={e => this.handleOnChange(e, "enteredName")}
          />

          <textarea
            class="form-control"
            style={{ width: "40%" }}
            id="chirpInput"
            type="text"
            rows="3"
            placeholder="What's on your mind?"
            value={this.state.inputChirp}
            onChange={e => this.handleOnChange(e, "enteredChirp")}
          ></textarea>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => this.handleOnClick()}
          >
            Submit
          </button>
        </div>
        <Timeline chirps={this.state.chirpArray} />
      </React.Fragment>
    );
    // } else {
    //   return (
    //     <div>
    //       <h1>Check your code Cheyenne!</h1>
    //     </div>
    //   );
    // }
  }
}

export default App;
