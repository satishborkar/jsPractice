import React, { Component } from "react";
import Header from "./components/Header";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

import Note from "./components/Note";
import DatepickerLocal from "./components/DatepickerLocal";
import Occurrence from "./components/Occurrence";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      note: "",
      startDate: moment().format("YYYY/MM/DD"),
      occurrence: "",
      charLeft: "100",
      showChars: "none"
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillMount() {
    const initialData = {
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      startDate: "2018/07/10",
      occurrence: 2
    };

    this.setState({
      note: initialData.note,
      startDate: initialData.startDate,
      occurrence: initialData.occurrence
    });
  }

  handleChange(event) {
    if (event.target.name === "note") {
      let chars = 100 - event.target.value.length;
      this.setState(
        {
          charLeft: chars
        },
        function() {
          if (this.state.charLeft < 100) {
            this.setState({ showChars: "block" });
          } else {
            this.setState({ showChars: "none" });
          }
        }
      );
    }

    if (event.target.name === "occurrence" && event.target.value === "4") {
      const currentDate = moment().format("YYYY/MM/DD");
      this.setState({
        startDate: currentDate
      });
    }

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDateChange(date) {
    const valueOfInput = date.format("YYYY/MM/DD");

    this.setState({
      startDate: valueOfInput
    });
  }

  toggleEdit() {
    this.setState({
      isEditMode: !this.state.isEditMode
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      isEditMode: false
    });
  }

  render() {
    const {
      note,
      startDate,
      occurrence,
      charLeft,
      isEditMode,
      showChars
    } = this.state;
    const btnEditMode = isEditMode === false ? "block" : "none";

    return (
      <div>
        <Header title="ReactForm" />
        <div className="row">
          <a
            href="javascript:void(0)"
            className="link-block"
            onClick={this.toggleEdit}
            style={{ display: btnEditMode }}
          >
            Edit
          </a>
        </div>
        <form className="frm" onSubmit={this.onSubmit}>
          <Note
            isEditMode={isEditMode}
            label={"Note"}
            initialValue={note}
            name={"note"}
            onChange={this.handleChange}
            showChars={showChars}
            charLeft={charLeft}
          />

          <DatepickerLocal
            isEditMode={isEditMode}
            label={"Date"}
            name={"startDate"}
            defaultValue={startDate}
            onChange={this.handleDateChange}
          />

          <Occurrence
            isEditMode={isEditMode}
            label={"Occurrence"}
            name="occurrence"
            defaultValue={occurrence}
            onChange={this.handleChange}
          />
          <div className="row btn-holder">
            <button type="submit" className="btn" disabled={!isEditMode}>
              Submit
            </button>
            <button type="reset" className="btn" onClick={this.toggleEdit} disabled={!isEditMode}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
