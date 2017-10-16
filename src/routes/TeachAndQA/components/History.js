import React from 'react'
import './styles.css';
import FontAwesome from 'react-fontawesome';
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';

export default class History extends React.Component {
    render() {
        return (
            <div className="history padding-left-20 padding-top-30 padding-bottom-20">
                <span className="fontStyle">HISTORY</span>
                <div className="padding-left-30" >
                    <Table selectable={false} className="history">
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2"><div className="historyApproveStatus">Labeled</div></span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2">Machine</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2"></span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ></TableRowColumn>
                            </TableRow>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1 }} className="padding-left-30" ><span className="fontStyle2">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2"><div className="historyApproveStatus historyUnApprove">Unapproved</div></span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2">Beth</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2">Designations invalid be...</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" > <i className="fa fa-file-text-o" style={{ fontSize: 20 }}></i></TableRowColumn>
                            </TableRow>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1 }} className="padding-left-30" ><span className="fontStyle2">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2"><div className="historyApproveStatus historyApprove">Approved</div></span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2">John</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><span className="fontStyle2">First cut,tentatively app..</span></TableRowColumn>
                                <TableRowColumn className="padding-left-30" ><i className="fa fa-file-text-o" style={{ fontSize: 20 }}></i></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>
            </div>
        )
    }
}