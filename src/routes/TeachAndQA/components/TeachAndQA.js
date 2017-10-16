import React from 'react'
import Divider from 'material-ui/Divider';
import Pagination from 'material-ui-pagination';
import './styles.css';
import History from './History';
import Annotation from './Annotations';
import Label from './Labels';

const dividerStyle = {
    backgroundColor: '#d8f2fc',
    height:'2px'
};

export default class TeachAndQA extends React.Component {
    componentDidMount() {
        this.props.SetRouteParams(this.props.location.query)
        localStorage.setItem('access_token', this.props.location.query.apiToken)
    }
    render() {
        return (
            <div className='border-padding-50 fontArial'>
                <PageTitle />
                <Divider style={dividerStyle} />
                <DocumentInfo />
                <Divider style={dividerStyle} />
                <Label />
                <Divider style={dividerStyle} />
                <Annotation />
                <Divider style={dividerStyle} />
                <History />
            </div>
        )
    }
}

class PageTitle extends React.Component {
    render() {
        return (
            <div className="pageTitle">
                <span className="pull-left fontStyle">Special Provisions</span>
                <span className="pull-right fontStyle">Teach & QA</span>
            </div>
        )
    }
}

class DocumentInfo extends React.Component {
    render() {
        return (
            <div className="documentInfo" >
                <span className="pull-left fontStyle">MMS10-10-66-66.pdf</span>
                <span className="fontStyle status">LABELED</span>
                <span className="pull-right fontStyle"><Pagination /></span>
            </div>
        )
    }
}