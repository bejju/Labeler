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

    constructor() {
        super();
        this.state = {
            paginationIndex: 0,
            samplePaginationData: [
                {
                    "document_name": "MMS10-10-66-66.pdf",
                    "document_status": "APPROVED",
                },
                {
                    "document_name": "PPS10-30-40-50.pdf",
                    "document_status": "LABELED",
                },
                {
                    "document_name": "AAF10-40-50-60.pdf",
                    "document_status": "UNAPPROVED",
                }
            ]
        }
        this.incrementIndex = this.incrementIndex.bind(this);
        this.decrementIndex = this.decrementIndex.bind(this);
    }

    incrementIndex() {
        this.setState({ paginationIndex: this.state.paginationIndex + 1 == this.state.samplePaginationData.length ? this.state.paginationIndex : this.state.paginationIndex + 1 });
    };

    decrementIndex() {
        this.setState({ paginationIndex: this.state.paginationIndex == 0 ? 0 : this.state.paginationIndex - 1 });
    };

    render() {

        return (
            <div className='padding-10 fontArial'>
                <PageTitle />
                <Divider style={dividerStyle} />
                <DocumentInfo data={this.state.samplePaginationData} index={this.state.paginationIndex} incrementIndex={this.incrementIndex} decrementIndex={this.decrementIndex} />
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
                <div className="filename pull-left fontStyle2">{this.props.data[this.props.index].document_name}</div>
                <div className={this.props.data[this.props.index].document_status == 'APPROVED' ? "filestatus fontStyle3approve" : "filestatus fontStyle3 "}>{this.props.data[this.props.index].document_status}</div>
                <div className="pull-right pagination">
                    <div className="arrow-left pagination" onClick={() => this.props.decrementIndex()}></div>
                    <span className='pagenumber padding-left-20 padding-right-20 fontStyle2'>{this.props.index + 1} of {this.props.data.length}</span>
                    <div className="arrow-right pagination" onClick={() => this.props.incrementIndex()}></div>
                </div>
            </div>
        )
    }
}