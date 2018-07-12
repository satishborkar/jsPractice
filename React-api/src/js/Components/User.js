import React from "react";


class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }
  render() {
    const user = this.state.user;
    return <div className="row">{user.name}</div>;
  }
}

export default User;
