import React from 'react'
import { Toggle, RaisedButton, SelectField, MenuItem, TextField, LinearProgress } from 'material-ui'
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Delete from 'material-ui/svg-icons/action/delete';
import './styles.css';
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';
var FontAwesome = require('react-fontawesome');
import Divider from 'material-ui/Divider';

const styles = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
};


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
            <div className='padding-left-20 padding-top-30 padding-right-50  fontArial'>
                <span className="fontStyle4 ">LABELS</span>
                <div className="padding-left-30">
                    <Component1 data={sampleLabelData} />
                    <Component2 data={sampleLabelData} handleEdit={this.props.handleEdit} addLabel={this.props.addLabel} />
                    <Component3 />
                </div>
            </div >
        )
    }
}

class Component1 extends React.Component {
    render() {
        return (
            <div className="padding-top-15 fontStyle4 fontArial">
                {this.props.data ? <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.data.map((d, i) => (
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn ><div className="labelColorbox" style={{ backgroundColor: `#${d.color}` }}></div><span className="fontStyle2 padding-left-20">{d.name}</span></TableRowColumn>
                                <TableRowColumn ><div className="progressBar"><LinearProgress mode="determinate" color={'#97CEF9'} value={percentage} style={{
                                    height: '30', borderColor: '#69B1FA', backgroundColor: 'white', borderStyle: 'solid', borderWidth: '2px', borderRadius: '4px',width:'100%'
                                }}></LinearProgress><div className="progressPercentage padding-left-20">{percentage + '%'}</div></div></TableRowColumn>
                                <TableRowColumn  ><Toggle /></TableRowColumn>
                            </TableRow>))}
                    </TableBody>
                </Table> : null}
            </div>
        )
    }
}

class Component2 extends React.Component {
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
            <div className='padding-bottom-20 fontStyle4 fontArial'>
                <div>
                    <div className="padding-top-20 padding-left-20">
                        <button onClick={() => this.changeDisplay()} className={this.state.display ? "dropbtn-show" : "dropbtn "}><span className="fontStyle2 pull-left">Add a label</span><span className="pull-right"><FontAwesome
                            className='fa fa-caret-down'
                        /></span></button>
                    </div>
                    <div className={this.state.display ? "show" : "dropdown-content "}>
                        {this.props.data ?
                            <div id="myDropdown" >
                                {/* <ComponentSelect data={this.props.data} changeDisplay={this.changeDisplay}/> */}
                                <ComponentSelect handleEdit={this.props.handleEdit} data={this.props.data} addLabel={this.props.addLabel} changeDisplay={this.changeDisplay} />
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

class Component3 extends React.Component {
    render() {
        return (
            <div className='padding-bottom-20 fontStyle4 fontArial'>
                <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow style={{ border: 'none' }}>
                            <TableRowColumn style={{width:'60%'}}><div className="wrapButtonText fontStyle4 fontArial">
                                <textarea className="labeltextarea padding-left-10 fontStyle4 fontArial" placeholder="Remarks" rows="3">
                                </textarea>
                                <button className="buttonInsideText fontArial">Submit</button>
                            </div> </TableRowColumn>
                            <TableRowColumn style={{width:'30%'}} className="align-top padding-left-50"><button className="unapprove-button">Approve</button> </TableRowColumn>
                        </TableRow>
                    </TableBody>
               </Table>
            </div>
        )
    }
}

class ComponentSelect extends React.Component {
    render() {
        return (
            <div >
                {this.props.data ? <Table multiSelectable={true}>
                    <TableBody >
                        {this.props.data.map((d, i) => (
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1 }}><div className="labelColorbox" style={{ backgroundColor: `#${d.color}` }}></div></TableRowColumn>
                                <TableRowColumn ><span className="fontStyle2">{d.name}</span></TableRowColumn>
                                <TableRowColumn style={{ width: 40 }}>
                                    <i className="fa fa-trash-o" style={{ color: '#d84f00', fontSize: 20 }}></i>
                                </TableRowColumn>
                            </TableRow>))}
                    </TableBody>
                </Table> : null}


                <div style={{ padding: 15 }}>
                    <input className="inputBox fontArial" onChange={this.props.handleEdit} name="newLabel" type="text" placeholder="Create a new label"></input>
                    <span style={{ paddingLeft: 20 }}>
                        <button className="bottonSelectedComponent" onClick={(e) => this.props.addLabel(e)}>Create Label</button>
                    </span>
                </div>

                <div style={{ paddingLeft: 15, paddingBottom: 15 }} >
                    <textarea className="choosetextarea fontArial " placeholder="Description" rows="4">
                    </textarea>
                </div>


                <Divider />
                <div className="pull-right padding-20">
                    <span style={{ top: 4 }}><button onClick={() => this.props.changeDisplay()} className="bottonSelectedComponent">Cancel</button></span>
                    <span style={{ paddingLeft: 10 }}> <button style={{ height: 35 }} className="approve-button">Add Label</button></span>
                </div>
            </div >
        );
    }
}