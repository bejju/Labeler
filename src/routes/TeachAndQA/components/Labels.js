import React from 'react'
import { Toggle, RaisedButton, SelectField, MenuItem, TextField, LinearProgress } from 'material-ui'
import './styles.css';
import Divider from 'material-ui/Divider';
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';
import FontAwesome from 'react-fontawesome';

const percentage = 75

export default class Label extends React.Component {
    render() {

        // var sampleLabelData = this.props.labels
        var sampleLabelData = [
            {
                "document_set_id": 2,
                "name": "Divison Order",
                "description": "desc",
                "color": "800080",
                "value": 45,
                "toggle": false
            },
            {
                "document_set_id": 2,
                "name": "Title Opinion",
                "description": "desc",
                "color": "299107",
                "value": 65,
                "toggle": false
            },
            {
                "document_set_id": 2,
                "name": "Contract",
                "description": "desc",
                "color": "008080",
                "value": 55,
                "toggle": false
            },
            {
                "document_set_id": 2,
                "name": "Correspondence",
                "description": "desc",
                "color": "0000FF",
                "value": 75,
                "toggle": false
            },
        ]

        return (
            <div className='padding-left-20 padding-top-20 padding-right-50 fontHelvetica'>
                <span className="content-heading ">LABELS</span>
                <div className="padding-left-30">
                    <LabelData data={sampleLabelData} />
                    <AddLabel data={sampleLabelData} handleEdit={this.props.handleEdit} addLabel={this.props.addLabel} />
                    <Remarks />
                </div>
            </div >
        )
    }
}

class LabelData extends React.Component {
    render() {
        return (
            <div id="label-data"className="padding-top-15 fontHelvetica">
                {this.props.data ? <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.data.map((d, i) => (
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: '35%' }}><div className="label-colorbox" style={{ backgroundColor: `#${d.color}` }}></div><span className="page-font padding-left-20">{d.name}</span></TableRowColumn>
                                <TableRowColumn style={{ width: '45%' }}><div className="progress-bar"><LinearProgress mode="determinate" color={'#97CEF9'} value={percentage} style={{
                                    height: '30', borderColor: '#69B1FA', backgroundColor: 'white', borderStyle: 'solid', borderWidth: '2px', borderRadius: '4px', width: '100%'
                                }}></LinearProgress><div className="progress-percentage padding-left-20">{percentage + '%'}</div></div></TableRowColumn>
                                {/* <TableRowColumn  ><Toggle thumbStyle={{ top: '7px', left: '4px' }} trackStyle={{ backgroundColor: '#DCDEE0', width: '80px', height: '25px', border: '1px solid #BABAC0' }} trackSwitchedStyle={{ backgroundColor: '#96EA9C', width: '80px', height: '25px', border: '1px solid #70BF41' }} thumbSwitchedStyle={{ backgroundColor: 'white', top: '7px',transformOrigin({{'50px'}}) }} /></TableRowColumn> */}
                                <TableRowColumn>
                                    <label className="switch">
                                        <input type="checkbox" id="btnstatus"></input>
                                        <span className="slider round"></span>
                                    </label>
                                </TableRowColumn>
                            </TableRow>))}
                    </TableBody>
                </Table> : null}
            </div>
        )
    }
}

class AddLabel extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false
        }
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    changeDisplay() {
        this.setState({ display: !this.state.display });
    };

    render() {
        return (
            <div id="addlabel" className='padding-bottom-20 content-heading fontHelvetica'>
                <div>
                    <div className="padding-top-20 padding-left-20">
                        <button onClick={() => this.changeDisplay()} className={this.state.display ? "dropbtn-show" : "dropbtn "}><span className="page-font pull-left">Add a label</span><span className="pull-right"><FontAwesome
                            className='fa fa-caret-down'
                        /></span></button>
                    </div>
                    <div className={this.state.display ? "show" : "dropdown-content "}>
                        {this.props.data ?
                            <div id="myDropdown" >
                                {/* <AddLabelContent data={this.props.data} changeDisplay={this.changeDisplay}/> */}
                                <AddLabelContent handleEdit={this.props.handleEdit} data={this.props.data} addLabel={this.props.addLabel} changeDisplay={this.changeDisplay} />
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class Remarks extends React.Component {
    render() {
        return (
            <div id="remarks" className='padding-bottom-20 content-heading fontHelvetica'>
                <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow style={{ border: 'none' }}>
                            <TableRowColumn style={{ width: '77%' }}><div className="wrap-btn-text content-heading fontHelvetica">
                                <textarea className="labeltextarea padding-left-10 content-heading fontHelvetica" placeholder="Remarks" rows="3">
                                </textarea>
                                <button className="submit-btn fontHelvetica">Submit</button>
                            </div> </TableRowColumn>
                            <TableRowColumn style={{ width: '20%' }} className="align-top "><button className="unapprove-button">Approve</button> </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        )
    }
}

class AddLabelContent extends React.Component {
    render() {
        return (
            <div id="addlabel-content" >
                {this.props.data ? <Table multiSelectable={true}>
                    <TableBody >
                        {this.props.data.map((d, i) => (
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: '15px' }}><div className="label-colorbox" style={{ backgroundColor: `#${d.color}` }}></div></TableRowColumn>
                                <TableRowColumn style={{ width: '35%' }}><span className="page-font">{d.name}</span></TableRowColumn>
                                <TableRowColumn style={{ width: '20%' }}>
                                    <i className="fa fa-trash-o" style={{ color: '#d84f00', fontSize: 20 }}></i>
                                </TableRowColumn>
                            </TableRow>))}
                    </TableBody>
                </Table> : null}


                <div style={{ padding: 15 }}>
                    <input className="input-box fontHelvetica" onChange={this.props.handleEdit} name="newLabel" type="text" placeholder="Create a new label"></input>
                    <span style={{ paddingLeft: 20 }}>
                        <button className="bottonSelectedComponent" onClick={(e) => this.props.addLabel(e)}>Create Label</button>
                    </span>
                </div>

                <div style={{ paddingLeft: 15, paddingBottom: 15 }} >
                    <textarea className="choosetextarea fontHelvetica " placeholder="Description" rows="4">
                    </textarea>
                </div>


                <Divider />
                <div className="pull-right padding-20 ">
                    <span style={{ top: 4 }}><button onClick={() => this.props.changeDisplay()} className="bottonSelectedComponent">Cancel</button></span>
                    <span style={{ paddingLeft: 10 }}> <button style={{ height: 35 }} className="approve-button">Add Label</button></span>
                </div>
            </div >
        );
    }
}