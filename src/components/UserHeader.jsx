import React from "react";
import { fetchUser } from "../actions";
import { connect } from "react-redux";
class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.user_id) };
};
export default connect(mapStateToProps, { fetchUser })(UserHeader);
