import React from 'react'
import './styles.css';

export default class Annotation extends React.Component {
    render() {
        return (
            <div className="annotations">
                <h2>ANNOTATIONS</h2>
                <div className="padding-left-30">
                    <table>
                        <tr>
                            <td></td>
                            <td>Title Opinion</td>
                            <td><div className="annotationsbox">Based soley upon our examination</div></td>
                            <td>This paragraph con..</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Title Opinion</td>
                            <td><div className="annotationsbox"> Tracr ownership tract no. 47:the so...</div></td>
                            <td>Key clause appear..</td>
                            <td></td>
                        </tr>
                    </table>
                    <h4><a href="">+</a> New</h4>
                </div>
            </div>
        )
    }
}
