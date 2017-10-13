import React from 'react'
import './styles.css';
var FontAwesome = require('react-fontawesome');

export default class Annotation extends React.Component {
    render() {
        return (
            <div className="annotations">
                <h2>ANNOTATIONS</h2>
                <div className="padding-left-30">
                    <table >
                        <tr className="row-spacing">
                            <td className="padding-left-30">
                                <div className="labelColorbox"></div>
                            </td>
                            <td className="padding-left-30">Title Opinion</td>
                            <td className="padding-left-30"><div className="annotationsbox">Based soley upon our examination</div></td>
                            <td className="padding-left-30">This paragraph con..</td>
                            <td className="padding-left-30">
                                <FontAwesome
                                    className='fa fa-file-text-o'
                                    name='file'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </td>
                        </tr>
                        <tr >
                            <td className="padding-left-30">
                                <div className="labelColorbox" ></div>
                            </td>
                            <td className="padding-left-30">Title Opinion</td>
                            <td className="padding-left-30"><div className="annotationsbox"> Tracr ownership tract no. 47:the so...</div></td>
                            <td className="padding-left-30">Key clause appear..</td>
                            <td className="padding-left-30">
                                <FontAwesome
                                    className='fa fa-file-text-o'
                                    name='file'
    
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                />
                            </td>
                        </tr>
                    </table>
                    <h4><a href="">+</a> New</h4>
                </div>
            </div>
        )
    }
}
