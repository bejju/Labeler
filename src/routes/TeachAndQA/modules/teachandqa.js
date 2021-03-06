import axios, {rails_instance} from '../../../lib/axios'
import config from '../../../config'
//action creators
const SET_PROP = 'SET_PROP'
//action handlers

let SetRouteParams = function (routeParams) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PROP,
      payload: {
        key: 'routeParams',
        value: routeParams
      }
    })
    dispatch(FetchDocumentSets())
    dispatch(FetchLabels())
  }
}

let handleEdit = function(e){
  return (dispatch, getState) => {
    dispatch({
      type: SET_PROP,
      payload: {
        key: e.target.name,
        value: e.target.value
      }
    })
  }
}

let FetchDocumentSets = function () {
  return (dispatch, getState) => {
    //let url = `${config.api.FETCH_DOCUMENT_SETS}${getState().teachandqa.routeParams.documentSetId}/documents?fields=id&q=${getState().teachandqa.search}`
    let url = `${config.api.FETCH_DOCUMENT_SETS}${getState().teachandqa.routeParams.documentSetId}/tags`
    axios.get(url).then((response) => {
      console.log(`response: ${JSON.stringify(response)}`)
      if (response.status === config.HTTP_Status.SUCCESS) {
        dispatch({
          type: SET_PROP,
          payload: {
            key: 'data',
            value: response.data || []
          }
        })
      }
    }).catch((err) => {
      console.log(`Error: ${JSON.stringify(err)}`)
    })
  }
}

let FetchLabels = function () {
  return (dispatch, getState) => {
    let url = `${config.rails_api.FETCH_LABELS}`

    rails_instance.get(url).then((response) => {
      if (response.status === config.HTTP_Status.SUCCESS) {
        dispatch({
          type: SET_PROP,
          payload: {
            key: 'labels',
            value: response.data || []
          }
        })
      }
    }).catch((err) => {
      console.log(`Error: ${JSON.stringify(err)}`)
    })
  }
}


function addLabel (e) {
  return (dispatch, getState) => {
    let label = getState().teachandqa.newLabel
    if(!label){
      alert(`Label can't be empty`)
      return
    }
    let url = `label?name=${label}`
    let req = {
      label :
      {document_set_id : 1, 
        name : label, 
        description: "desc", 
        color : "123456"
      }
    }
    rails_instance.get(url).then((response) => {
      dispatch({
        type: SET_PROP,
        payload: true
      })
    }).catch((err) => {
      console.log(`Error: ${JSON.stringify(err)}`)
    })
  }
}

const ACTION_HANDLERS = {
  [SET_PROP]: (state, action) => {
    return Object.assign({}, state, {
      [action.payload.key]: action.payload.value
    })
  }
}

//reducer
const initialState = {
  search: 'word'
}

export default function teachandqaReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}


export function dispatchToProps() {
  return {
    SetRouteParams,
    addLabel,
    handleEdit
  }
}