import React from "react";
import ExtractFromJSON from "../model";
//import PropTypes from "prop-types";

class UserGrid extends React.Component {
  constructor(props) {
    super(props);
    //this.viewDetails = this.viewDetails.bind(this);
  }

  viewDetails(id) {
    const userSelected = ExtractFromJSON.getUserById(this.props.userList, id);
    console.log(userSelected);
  }

  render() {
    const props = this.props;
    const userRow = props.userList.map((user, i) => {
      return (
        <tr key={i}>
          <td>{user.company}</td>
          <td>{user.paymentBalance}</td>
          <td>
            &#9991; {user.contact.phone} <br />
            &#9993; {user.contact.email}
          </td>
          <td>{user.status}</td>
          <td>{user.address}</td>
          <td>
            {/* <a href="#nogo" onClick={() => this.viewDetails(user.id)}> */}
            <a
              href="#nogo"
              data-link={user.guid}
              onClick={() => {
                this.viewDetails(user.id);
              }}
            >
              View Details
            </a>
          </td>
        </tr>
      );
    });

    return (
      <div>
        {props.title && <h2>{props.title}</h2>}
        {/* <p>{props.desc}</p> */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Company</th>
              <th>Payment Balance</th>
              <th>Contact</th>
              <th>status</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{userRow}</tbody>
        </table>
      </div>
    );
  }
}

// UserGrid.propTypes = {
//   props: React.PropTypes.object
// };

export default UserGrid;
