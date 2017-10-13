import React from 'react'
import { Button } from 'react-bootstrap';
import { Toggle, RaisedButton, SelectField, MenuItem, TextField, LinearProgress } from 'material-ui'
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Delete from 'material-ui/svg-icons/action/delete';
import './styles.css';
import { Table, TableRow, TableRowColumn, TableHeader, TableBody } from 'material-ui/Table';

const names = [
    'Division Order',
    'Title opinion',
    'Correspondence',
    'Contract',
    'Royality Clause'
];


const show =
    {
        toggle: false
    }

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
                "color": "pink",
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
                                <TableRowColumn style={{ width: 60 }}><div className="labelColorbox" style={{ backgroundColor: d.color }}></div></TableRowColumn>
                                <TableRowColumn><h3>{d.name}</h3></TableRowColumn>
                                <TableRowColumn><LinearProgress mode="determinate" value={d.value} style={{ height: '30' }}></LinearProgress></TableRowColumn>
                                <TableRowColumn><Toggle defaultToggled={d.toggle} thumbStyle={{ top: 5, left: 4, backgroundColor: "white" }} trackStyle={{ width: 70, height: 23 }} trackSwitchedStyle={{ backgroundColor: "#0ef485" }} /></TableRowColumn>
                            </TableRow>))}
                    </TableBody>
                </Table> : null}
            </div>
        )
    }
}

class Component2 extends React.Component {
    render() {
        return (
            <div className='padding-bottom-20'>
                <div className="dropdown">
                    <div>
                        <button  className="dropbtn">Dropdown</button>
                    </div>
                    <div className="dropdown-content">
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
            <div className='padding-bottom-20'>
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
            <div className="componentSelectSize">
                {this.props.data ? <Table multiSelectable={true}>
                    <TableBody >
                        {this.props.data.map((d, i) => (
                            <TableRow style={{ border: 'none' }}>
                                <TableRowColumn style={{ width: 40 }}><div className="labelColorbox" style={{ backgroundColor: d.color }}></div></TableRowColumn>
                                <TableRowColumn><h3>{d.name}</h3></TableRowColumn>
                                <TableRowColumn style={{ width: 40 }}><Delete /></TableRowColumn>
                            </TableRow>))}
                    </TableBody>
                </Table> : null}
                <div style={{ padding: 15 }}>
                    <input style={{ height: 35, width: '60%' }} type="text"></input>
                    <span style={
                        {
                            paddingLeft: 20
                        }
                    }><button style={{ height: 35 }}>Create Label</button>
                    </span>
                </div>
                <hr />
                <div className="align-right">
                    <span style={{ top: 4 }}><button style={{ height: 35 }}>Cancel</button></span>
                    <span style={{ paddingLeft: 10 }}> <button style={{ height: 35 }} className="button">Add Label</button></span>
                </div>
            </div >
        );
    }
}