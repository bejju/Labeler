import React from 'react'
import './styles.css';
var FontAwesome = require('react-fontawesome');
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';

export default class Annotation extends React.Component {
    render() {
        return (
            <div className="annotations">
                <h2>ANNOTATIONS</h2>
                <div className="padding-left-30">
                    <Table selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1 }}><div className="labelColorbox" ></div></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><span className="fontStyle2">Title Opinion</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><div className="annotationsbox">Some text</div></TableRowColumn>
                                <TableRowColumn className="padding-left-30"> <FontAwesome
                                    className='fa fa-file-text-o'
                                    name='file'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                /></TableRowColumn>

                            </TableRow>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1 }}><div className="labelColorbox" ></div></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><span className="fontStyle2">Title Opinion</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><div className="annotationsbox">Some text</div></TableRowColumn>
                                <TableRowColumn className="padding-left-30"> <FontAwesome
                                    className='fa fa-file-text-o'
                                    name='file'
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                /></TableRowColumn>

                            </TableRow>
                        </TableBody>
                    </Table>
                    <h4><a href="">+</a> New</h4>
                </div>
            </div>
        )
    }
}
