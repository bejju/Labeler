import React from 'react'
import FontAwesome from 'react-fontawesome';
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';
import './styles.scss';

var colors = [
    'C0C0C0', '808080', '000000', 'FF0000', '800000',
    'FFFF00', '808000', '00FF00', '008000', '00FFFF',
    '008080', '0000FF', '000080', 'FF00FF', '800080',
    '00FFFF', 'A52A2A', '0000A0', 'FFA500', '2B1B17'
];


export default class Annotation extends React.Component {
    render() {
        return (
            <div id="annotations" className="padding-left-20 padding-top-20 padding-bottom-15 fontHelvetica">
                <div className="content-heading ">ANNOTATIONS</div>
                <div className="padding-left-30 padding-top-15  fontHelvetica">
                    <div className="no-content">No supporting annotations</div>
                    <Table selectable={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: '27%' }}><div className="label-colorbox" style={{ backgroundColor: `#${colors[Math.floor((Math.random() * 20))]}` }} ></div><span className="page-font padding-left-20">Title Opinion</span></TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}><div className="annotationsbox-font annotations-box">Based solely upon our examination</div></TableRowColumn>
                                <TableRowColumn style={{ width: '30%' }}><span className="page-font">This paragraph consists of information about label</span></TableRowColumn>
                                <TableRowColumn style={{ width: '10%' }}><i className="fa fa-file-text-o" style={{ fontSize: 15 }}></i></TableRowColumn>
                            </TableRow>

                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: '27%' }}><div className="label-colorbox" style={{ backgroundColor: `#${colors[Math.floor((Math.random() * 20))]}` }} ></div><span className="page-font padding-left-20">Title Opinion</span></TableRowColumn>
                                <TableRowColumn  ><div className="annotationsbox-font annotations-box">Tract ownership tract no. 47:the software</div></TableRowColumn>
                                <TableRowColumn><span className="page-font">key clause appears as ownership of  some text</span></TableRowColumn>
                                <TableRowColumn ><i className="fa fa-file-text-o" style={{ fontSize: 15 }}></i>
                                </TableRowColumn>
                            </TableRow>

                        </TableBody>
                    </Table>

                    <div><span className="plus-symbol padding-right-10">+</span><span className="page-font">New</span ></div>
                </div>
            </div>
        )
    }
}
