import React from 'react'
import logo from '../../../../public/assets/images/logo.png';
import './style.scss';
export class PageNotFound extends React.Component {
    render() {
        return (
            <div>
                <h3 className='text-info error-message'>You're looking for something which is not there</h3>
            </div>
        )
    }
}
export default PageNotFound