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


export default class Label extends React.Component {
    render() {
        var sampleLabelData = [
            {
                "document_set_id": 2,
                "name": "Divison Order",
                "description": "desc",
                "color": "yellow",
                "value": 45,
                "toggle": false
            },
            {
                "document_set_id": 2,
                "name": "Title Opinion",
                "description": "desc",
                "color": "blue",
                "value": 65,
                "toggle": false
            },
            {
                "document_set_id": 2,
                "name": "Contract",
                "description": "desc",
                "color": "green",
                "value": 55,
                "toggle": false
            },
            {
                "document_set_id": 2,
                "name": "Correspondence",
                "description": "desc",
                "color": "#000000",
                "value": 75,
                "toggle": false
            },
        ]

        return (
            <div className='padding-left-50 padding-right-50 padding-bottom-20'>
                <h1>LABELS</h1>
                <Component1 data={sampleLabelData} />
                <Component2 data={sampleLabelData} />
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
                                <TableRowColumn style={{ width: 1}}><div className="labelColorbox" style={{ backgroundColor: d.color }}></div></TableRowColumn>
                                <TableRowColumn fontArial><span className="fontStyle2">{d.name}</span></TableRowColumn>
                                <TableRowColumn><LinearProgress mode="determinate" value={d.value} style={{ height: '30' }}></LinearProgress></TableRowColumn>
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
                    <div className={this.state.display ? "show" : "dropdown-content " }>
                        {this.props.data ?
                            <div id="myDropdown" >
                                <ComponentSelect data={this.props.data} />
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
                    <col width="65%" />
                    <col width="35%" />
                    <tr>
                        <td>
                            <textarea className="labeltextarea" rows="4">
                            </textarea>
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
                                <TableRowColumn style={{ width:1 }}><div className="labelColorbox" style={{ backgroundColor: d.color }}></div></TableRowColumn>
                                <TableRowColumn fontArial><span className="fontStyle2">{d.name}</span></TableRowColumn>
                                <TableRowColumn style={{ width: 40 }}><Delete /></TableRowColumn>
                            </TableRow>))}
                    </TableBody>
                </Table> : null}
                <div style={{ padding: 15 }}>
                    <input className="inputBox" type="text" placeholder="Create a new label"></input>
                    <span style={
                        {
                            paddingLeft: 20
                        }
                    }>
                    <button className="bottonSelectedComponent">Create Label</button>
                    </span>
                </div>
                <Divider />
                <div className="align-right padding-20">
                    <span style={{ top: 4 }}><button className="bottonSelectedComponent">Cancel</button></span>
                    <span style={{ paddingLeft: 10 }}> <button style={{ height: 35 }} className="button">Add Label</button></span>
                </div>
            </div >
        );
    }
}