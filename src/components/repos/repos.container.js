import { connect } from 'react-redux';
import { getUserRepos } from '../../store/actions/user-repos';
import UserRepos from './repos';

const mapStateToProps = state => ({
  repos: state.userRepos.repos,
  loading: state.userRepos.loading,
  error: state.userRepos.error
});

export default connect(
  mapStateToProps,
  {getUserRepos}
)(UserRepos);
