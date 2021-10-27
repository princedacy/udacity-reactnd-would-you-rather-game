import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { setCallbackLink } from '../actions/callBackLink';

function ProtectedRoute ({ isAuth, path, component, dispatch, ...rest }) {
    const oldPath = window.location.pathname;

    useEffect(() => {
        if (!isAuth) {
            dispatch(setCallbackLink(oldPath))
        }
    }, [dispatch, isAuth, oldPath])

    return isAuth ? (
        <Route path={path} {...rest} component={component} />
    ) : (
        <Redirect to='/login' />
    )
};

ProtectedRoute.propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}

function mapStateToProps({ authedUser }) {
    return {
        isAuth: authedUser !== null
    }
}

export default withRouter(connect(mapStateToProps)(ProtectedRoute))


