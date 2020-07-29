import React from 'react';
import UserContainer from '../../components/user/user.container';

const UserPage = ({match}) => {
    return (
        <UserContainer username = {match.params.login}/>
    )
}

export default UserPage;