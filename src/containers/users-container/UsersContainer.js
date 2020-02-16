import React, {useEffect} from 'react';
import {fetchUsers} from "../../actions";
import {connect} from 'react-redux';
import withBookstoreService from "../../components/hoc/with-bookstore-service";
import {Preloader} from "../../components/preloader";

const UsersContainer = ({users, fetchUsers, loading, error}) => {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    if (loading) {
        return <Preloader/>
    }

    return (
        <div className={'container'}>
            <div className="row">
                <div className="col-12">
                    <h2>Users</h2>
                    <ul className='list-group mb-5'>
                        {
                            users.map(user => <li key={user.id} className="list-group-item">{user.first_name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({usersList: {users, error, loading}}) => {
    return {
        users: users,
        error: error,
        loading: loading
    }
};

const mapDispatchToProps = {
    fetchUsers
};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(UsersContainer));
