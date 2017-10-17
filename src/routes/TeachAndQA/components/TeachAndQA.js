import React from 'react'
import Divider from 'material-ui/Divider';
import Pagination from 'material-ui-pagination';
import './styles.css';
import History from './History';
import Annotation from './Annotations';
import Label from './Labels';
import FontAwesome from 'react-fontawesome';

const dividerStyle = {
    backgroundColor: '#d8f2fc',
    height: '2px'
};

export default class TeachAndQA extends React.Component {

    componentDidMount() {
        this.props.SetRouteParams(this.props.location.query)
        localStorage.setItem('access_token', this.props.location.query.apiToken)
    }
    render() {
        return (
            <div className='padding-10 fontArial'>
                <PageTitle />
                <Divider style={dividerStyle} />
                <DocumentInfo />
                <Divider style={dividerStyle} />
                <Label labels={this.props.labels} addLabel={this.props.addLabel} handleEdit={this.props.handleEdit} />
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
            <div className="pageTitle padding-15 fontArial">
                <span className="pull-left fontStyle ">Special Provisions</span>
                <span className="pull-right fontStyle">Teach & QA</span>
            </div>
        )
    }
}

class DocumentInfo extends React.Component {
    render() {
        return (
            <div className="documentInfo padding-15" >
                <div className="filename pull-left fontStyle2">MMS10-10-66-66.pdf</div>
                <div className="filestatus fontStyle3approve">APPROVED</div>
                <div className="pull-right pagination">
                    <div className="arrow-left pagination" onClick={() => alert('previous')}></div>
                    <span className='pagenumber padding-left-20 padding-right-20 fontStyle2'>1 of 2,0000</span>
                    <div className="arrow-right pagination" onClick={() => alert('next')}></div>
                </div>
            </div>
        )
    }
}