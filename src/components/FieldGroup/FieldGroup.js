import React, { Component } from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Radio, Checkbox} from 'react-bootstrap'
export default function FieldGroup({ id, label, help,validationState, ...props }) {
  return (
    <FormGroup controlId={id} validationState = {validationState || null}>
      {props.type == 'text' ?
        <div>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
        </div>
        : props.type == 'checkbox' ? <span><Checkbox>{label}</Checkbox></span>
          : props.type == 'radio' ? <span><Radio>{label}</Radio></span>
            : <div> <ControlLabel>{label}</ControlLabel>
              <FormControl {...props} /></div>
      }
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}