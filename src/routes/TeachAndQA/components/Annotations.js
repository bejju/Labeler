import React from 'react'
import './styles.css';
var FontAwesome = require('react-fontawesome');
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';

export default class Annotation extends React.Component {
    render() {
        return (
            <div className="annotations padding-left-20 padding-top-30 padding-bottom-20">
                <span className="fontStyle">ANNOTATIONS</span>
                <div className="padding-left-30">
                    <Table selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1 }}><div className="labelColorbox" ></div></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><span className="fontStyle2">Title Opinion</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><div className="annotationsbox">Some text</div></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><i className="fa fa-file-text-o" style={{ fontSize: 20 }}></i></TableRowColumn>

                            </TableRow>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1 }}><div className="labelColorbox" ></div></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><span className="fontStyle2">Title Opinion</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30"><div className="annotationsbox">Some text</div></TableRowColumn>
                                <TableRowColumn className="padding-left-30">
                                    <i className="fa fa-file-text-o" style={{ fontSize: 20 }}></i>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <span className="plusSymbol">+</span><span className="fontStyle2">New</span >
                </div>
            </div>
        )
    }
}
