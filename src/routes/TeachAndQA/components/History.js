import React from 'react'
import './styles.css';
import FontAwesome from 'react-fontawesome';
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';

export default class History extends React.Component {
    render() {
        return (
            <div id="history" className="padding-left-20 padding-top-20 fontHelvetica" >
                <span className="content-heading ">HISTORY</span>
                <div className="padding-left-30 padding-top-15 padding-bottom-15" >
                    <div className="no-content">No history</div>
                    <Table selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{width:'27%'}} ><span className="page-font">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn  style={{width:'20%'}}><span className="page-font"><div >Labeled</div></span></TableRowColumn>
                                <TableRowColumn  style={{width:'18%'}}><span className="page-font">Machine</span></TableRowColumn>
                                <TableRowColumn style={{ width: '25%' }}  ><span className="page-font"></span></TableRowColumn>
                                <TableRowColumn  ></TableRowColumn>
                            </TableRow>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{width:'27%'}}   ><span className="page-font">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn  style={{width:'20%'}}><span className="page-font"><div className="unapprove">Unapproved</div></span></TableRowColumn>
                                <TableRowColumn  style={{width:'18%'}} ><span className="page-font">Beth</span></TableRowColumn>
                                <TableRowColumn style={{ width: '25%' }}  ><span className="page-font">Designations invalid be somemore text comes here</span></TableRowColumn>
                                <TableRowColumn style={{ width: '5%' }}> <i className="fa fa-file-text-o" style={{ fontSize: 15 }}></i></TableRowColumn>
                            </TableRow>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn ><span className="page-font">11/27/17  8:30am</span></TableRowColumn>
                                <TableRowColumn ><span className="page-font"><div className="approve">Approved</div></span></TableRowColumn>
                                <TableRowColumn ><span className="page-font">John</span></TableRowColumn>
                                <TableRowColumn  ><span className="page-font">First cut,tentatively app something else text comes her</span></TableRowColumn>
                                <TableRowColumn ><i className="fa fa-file-text-o" style={{ fontSize: 15 }}></i></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}