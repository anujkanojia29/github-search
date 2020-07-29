import { connect } from 'react-redux';
import { getUser, loadingUser } from '../../store/actions/user-detail';
import User from './user';

const mapStateToProps = state => ({
  user: state.getUser.user,
  loading: state.getUser.loading,
  error: state.getUser.error
});

export default connect(
  mapStateToProps,
  { getUser, loadingUser }
)(User);


