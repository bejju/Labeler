import React from 'react'
import { Button } from 'react-bootstrap';
import { Toggle, RaisedButton, SelectField, MenuItem, TextField, LinearProgress } from 'material-ui'
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Delete from 'material-ui/svg-icons/action/delete';
import './styles.css';
import { Table, TableRow, TableRowColumn,TableHeader,TableBody } from 'material-ui/Table';

const value = 25;

const names = [
    'Division Order',
    'Title opinion',
    'Correspondence',
    'Contract',
    'Royality Clause'
];

export default class Label extends React.Component {
    state = {
        values: [],
    };

    handleChange = (event, index, values) => this.setState({ values });

    menuItems(values) {
        return names.map((name) => (
            <MenuItem
                key={name}
                insetChildren={true}
                checked={values && values.indexOf(name) > -1}
                value={name}
                primaryText={name}
                leftIcon={<PersonAdd />}
                rightIcon={<Delete />}
            />
        ));
    }
    render() {
        const { values } = this.state;
        return (
            <div className='padding-left-50 padding-right-50 padding-bottom-20'>
                <h1>LABELS</h1>
                <Table>
                    <TableHeader>
                    </TableHeader>
                    <TableBody>
                        <TableRow style={{border:'none'}}>
                            <TableRowColumn><h3>Division Order</h3></TableRowColumn>
                            <TableRowColumn><LinearProgress mode="determinate" value={value} style={{height:'30'}} /></TableRowColumn>
                            <TableRowColumn><Toggle thumbStyle={{top:4,left:4}} trackStyle={{ width:70,height:20}} /></TableRowColumn>
                        </TableRow>
                        <TableRow style={{border:'none'}}>
                            <TableRowColumn><h3>Title Opinion</h3></TableRowColumn>
                            <TableRowColumn><LinearProgress mode="determinate" value={value} style={{height:'30'}} /></TableRowColumn>
                            <TableRowColumn><Toggle thumbStyle={{top:4,left:4}} trackStyle={{ width:70,height:20}} /></TableRowColumn>
                        </TableRow>
                        <TableRow style={{border:'none'}}>
                            <TableRowColumn><h3>Correspondence</h3></TableRowColumn>
                            <TableRowColumn><LinearProgress mode="determinate" value={value} style={{height:'30'}} /></TableRowColumn>
                            <TableRowColumn><Toggle thumbStyle={{top:4,left:4}} trackStyle={{ width:70,height:20}} /></TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className='padding-bottom-20'>
                    <SelectField
                        multiple={true}
                        hintText="Add a label"
                        value={values}
                        onChange={this.handleChange}>
                        {this.menuItems(values)}
                    </SelectField>
                </div>
                <div className='padding-bottom-20'>
                    <TextField
                        hintText="Remarks"
                        multiLine={true}
                        rows={3}
                    />
                    <RaisedButton className="pull-right" label="Approve" primary={true} />
                </div>
            </div>
        )
    }
}