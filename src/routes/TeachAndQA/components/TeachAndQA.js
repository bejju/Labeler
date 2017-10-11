import React from 'react'

import { Button } from 'react-bootstrap';

export default class TeachAndQA extends React.Component {
    componentDidMount() {
        this.props.SetRouteParams(this.props.location.query)
        localStorage.setItem('access_token', this.props.location.query.apiToken)
    }
    render() {
        return (
            <div>
                <div className='admin-home-div'>
                    <h2>TeachAndQA Dashboard</h2>
                </div>
            </div>
        )
    }
}