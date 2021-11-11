import React, { Component } from "react";
import s from "./Profile.module.css";

export class Status extends Component {
  state = { isStatusInputVisible: false, statusText: this.props.statusText };
  showStatusInput() {
    this.setState({
      isStatusInputVisible: true,
      statusText: this.props.statusText,
    });
  }

  hideStatusInput() {
    this.setState({ isStatusInputVisible: false });
    this.props.updateStatusOnServer(this.state.statusText);
  }

  onStatusChange(e) {
    this.setState({ statusText: e.target.value });
  }

  render() {
    return (
      <div className={s.statusBox}>
        {this.state.isStatusInputVisible ? (
          <input
            onChange={this.onStatusChange.bind(this)}
            className={s.statusInput}
            autoFocus={true}
            type="text"
            value={this.state.statusText}
            onBlur={this.hideStatusInput.bind(this)}
          />
        ) : (
          <span onDoubleClick={this.showStatusInput.bind(this)}>
            {this.props.statusText || ""}
          </span>
        )}
      </div>
    );
  }
}

export default Status;
