import { connect } from 'react-redux';
import Users from './users';

const mapStateToProps = state => ({
  users: state.searchUsers.users,
  loading: state.searchUsers.loading,
  error: state.searchUsers.error
});

export default connect(
  mapStateToProps,
  null
)(Users);
