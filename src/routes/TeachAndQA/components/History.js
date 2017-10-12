import React from 'react'
import './styles.css';

export default class History extends React.Component {
    render() {
        return (
            <div className="history">
                <h2>HISTORY</h2>
                <div className="padding-left-30">
                    <table>
                        <tr>
                            <td>11/27/17  8:30am</td>
                            <td>Labeled</td>
                            <td>Machine</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}