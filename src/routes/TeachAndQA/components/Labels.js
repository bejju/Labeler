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

        var sampleLabelData = this.props.labels
        var sampleLabelData = [
            {
                "document_set_id": 2,
                "name": "Divison Order",
                "description": "desc",
                "color": "f9d6e0",
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
                "color": "1764ea",
                "value": 55,
                "toggle": false
            },
            {
                "document_set_id": 2,
                "name": "Correspondence",
                "description": "desc",
                "color": "d8f2fc",
                "value": 75,
                "toggle": false
            },
        ]


        return (
            <div className='padding-left-50 padding-right-50 padding-bottom-20'>
                <h1>LABELS</h1>
                <Component1 data={sampleLabelData} />
                <Component2 data={sampleLabelData} handleEdit={this.props.handleEdit} addLabel={this.props.addLabel} />
                <Component3 />
            </div >
        )
    }
}

class Component1 extends React.Component {
    render() {
        return (
            <div>
                {this.props.data ? <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.data.map((d, i) => (
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1}}><div className="labelColorbox" style={{ backgroundColor: `#${d.color}` }}></div></TableRowColumn>
                                <TableRowColumn ><span className="fontStyle2">{d.name}</span></TableRowColumn>
                                <TableRowColumn><div className="progressBar"><LinearProgress mode="determinate" value={percentage} style={{ height: '30' }}></LinearProgress><div className="progressPercentage">{percentage+'%'}</div></div></TableRowColumn>
                                <TableRowColumn><Toggle  /></TableRowColumn>
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
            <div className='padding-bottom-20 '>
                <div className="dropdown ">
                    <div className="buttonDrop">
                        <button onClick={() => this.changeDisplay()} className="dropbtn"><span className="fontStyle2 pull-left">Add a label</span><span className="pull-right"><FontAwesome
                            className='fa fa-caret-down'
                        /></span></button>
                    </div>
                    <div className={this.state.display ? "show" : "dropdown-content "}>
                        {this.props.data ?
                            <div id="myDropdown" >
                                {/* <ComponentSelect data={this.props.data} changeDisplay={this.changeDisplay}/> */}
                                <ComponentSelect handleEdit={this.props.handleEdit} data={this.props.data} addLabel={this.props.addLabel}/>
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
            <div className='padding-bottom-20 padding-left-20'>
                <table >
                    <col width="75%" />
                    <col width="25%" />
                    <tr>
                        <td>
                            <div className="wrapButtonText fontStyle2">
                                <textarea className="labeltextarea fontStyle2 " placeholder="Remarks" rows="3">
                                </textarea>
                                <button className="buttonInsideText">Submit</button>
                            </div>
                        </td>
                        <td className="align-top">
                            <button className="button button2">Approve</button>
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}

class ComponentSelect extends React.Component {
    render() {
        return (
            <div className="componentSelectSize ">
                {this.props.data ? <Table multiSelectable={true}>
                    <TableBody >
                        {this.props.data.map((d, i) => (
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 1 }}><div className="labelColorbox" style={{ backgroundColor: d.color }}></div></TableRowColumn>
                                <TableRowColumn ><span className="fontStyle2">{d.name}</span></TableRowColumn>
                                <TableRowColumn style={{ width: 40 }}>
                                    <i className="fa fa-trash-o" style={{ color: '#d84f00', fontSize: 25 }}></i>
                                </TableRowColumn>
                            </TableRow>))}
                    </TableBody>
                </Table> : null}
                <div style={{ padding: 15 }}>
                    <input className="inputBox" onChange={this.props.handleEdit} name="newLabel" type="text" placeholder="Create a new label"></input>
                    <span style={
                        {
                            paddingLeft: 20
                        }

                    }>
        <button className="bottonSelectedComponent" onClick={(e)=>this.props.addLabel(e)}>Create Label</button>
                    </span>
                </div>

                <div style={{ paddingLeft: 15 , paddingBottom: 15}} className="fontStyle2">
                    <textarea className="choosetextarea fontStyle2 " placeholder="Description" rows="4">
                    </textarea>
                   
                </div>


                <Divider />
                <div className="align-right padding-20">
                    <span style={{ top: 4 }}><button  onClick={() => this.props.changeDisplay()} className="bottonSelectedComponent">Cancel</button></span>
                    <span style={{ paddingLeft: 10 }}> <button style={{ height: 35 }} className="button">Add Label</button></span>
                </div>
            </div >
        );
    }
}