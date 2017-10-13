import axios from 'lib/axios'
import immutable from 'immutable'
import { fromJS } from 'immutable'
import { push } from 'react-router-redux'
import config from '../config'

const ACTION_HANDLERS = {
}

const initialState = fromJS({})

export default function globalReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler
        ? handler(state, action)
        : state;
}
