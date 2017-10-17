import React from 'react'
import './styles.css';
import FontAwesome from 'react-fontawesome';
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';

export default class History extends React.Component {
    render() {
        return (
            <div className="history padding-left-20 padding-top-20 " fontArial>
                <span className="fontStyle4 ">HISTORY</span>
                <div className="padding-left-30 padding-top-15 padding-bottom-15" >
                    <div className=" fontStyle6 ">No history</div>
                    <Table selectable={false} className="history">
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{width:'25%'}} ><span className="fontStyle2">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn  style={{width:'20%'}}><span className="fontStyle2"><div >Labeled</div></span></TableRowColumn>
                                <TableRowColumn  style={{width:'20%'}}><span className="fontStyle2">Machine</span></TableRowColumn>
                                <TableRowColumn style={{ width: '25%' }}  ><span className="fontStyle2"></span></TableRowColumn>
                                <TableRowColumn  ></TableRowColumn>
                            </TableRow>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{width:'25%'}}  ><span className="fontStyle2">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn style={{width:'20%'}}><span className="fontStyle2"><div className="unApprove">Unapproved</div></span></TableRowColumn>
                                <TableRowColumn style={{width:'20%'}} ><span className="fontStyle2">Beth</span></TableRowColumn>
                                <TableRowColumn style={{ width: '25%' }}  ><span className="fontStyle2">Designations invalid be somemore text comes here</span></TableRowColumn>
                                <TableRowColumn > <i className="fa fa-file-text-o" style={{ fontSize: 15 }}></i></TableRowColumn>
                            </TableRow>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn ><span className="fontStyle2">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn ><span className="fontStyle2"><div className="approve">Approved</div></span></TableRowColumn>
                                <TableRowColumn style={{width:'20%'}} ><span className="fontStyle2">John</span></TableRowColumn>
                                <TableRowColumn style={{ width: '25%' }}  ><span className="fontStyle2">First cut,tentatively app something else text comes her</span></TableRowColumn>
                                <TableRowColumn ><i className="fa fa-file-text-o" style={{ fontSize: 15 }}></i></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}