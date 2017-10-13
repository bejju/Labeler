import React from 'react'
import './styles.css';
var FontAwesome = require('react-fontawesome');

export default class History extends React.Component {
    render() {
        return (
            <div className="history">
                <h2>HISTORY</h2>
                <div className="padding-left-30" >
                    <table className="history" >
                        <tr >
                            <td className="padding-left-30" >11/27/17  8:30am</td>
                            <td className="padding-left-30"><div className="historyApproveStatus">Labeled</div></td>
                            <td className="padding-left-30">Machine</td>
                            <td className="padding-left-30"></td>
                            <td className="padding-left-30"> <FontAwesome
                                className='fa fa-file-text-o'
                                name='file'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            /></td>
                        </tr>
                        <tr>
                            <td className="padding-left-30">11/27/17  8:30am</td>
                            <td className="padding-left-30"><div className="historyApproveStatus historyUnApprove ">Unapproved</div></td>
                            <td className="padding-left-30">Beth</td>
                            <td className="padding-left-30">Designations invalid be...</td>
                            <td className="padding-left-30"> <FontAwesome
                                className='fa fa-file-text-o'
                                name='file'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            /></td>
                        </tr>
                        <tr>
                            <td className="padding-left-30">11/27/17  8:30am</td>
                            <td className="padding-left-30"><div className="historyApproveStatus historyApprove ">Approved</div></td>
                            <td className="padding-left-30">John</td>
                            <td className="padding-left-30">First cut,tentatively app..</td>
                            <td className="padding-left-30"> <FontAwesome
                                className='fa fa-file-text-o'
                                name='file'
                                size='1x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            /></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}