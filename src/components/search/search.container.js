import { connect } from 'react-redux';
import { clearUsers, loadingUsers, searchUsers , setSearchString} from '../../store/actions/search-users';
import Search from './search';

const mapStateToProps = state => ({
  searchValue: state.searchUsers.searchValue,
    users: state.searchUsers.users
  });
  
export default connect(
    mapStateToProps,
    { setSearchString, searchUsers, clearUsers, loadingUsers }
  )(Search);
  