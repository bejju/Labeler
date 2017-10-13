import React from 'react'
import Divider from 'material-ui/Divider';
import Pagination from 'material-ui-pagination';
import './styles.css';
import History from './History';
import Annotation from './Annotations';
import Label from './Labels';

const dividerStyle = {
    backgroundColor: '#49E9FF'
};

export default class TeachAndQA extends React.Component {
    componentDidMount() {
        this.props.SetRouteParams(this.props.location.query)
        localStorage.setItem('access_token', this.props.location.query.apiToken)
    }
    render() {
        return (
            <div className='border-padding-50'>
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
            <div className="title">
                <h2 className="firstleft">Special Provisions</h2>
                <h2 className="firstright">Teach & QA</h2>
            </div>
        )
    }
}

class DocumentInfo extends React.Component {
    render() {
        return (
            <div className="title">
                <table>
                    <tr>
                        <td><h2 className="labelName"><a href='#' value={this.props.id} onClick={(e) => this.props.viewPdf(e)}>MMS10-10-66-66.pdf</a></h2></td>
                        <td><h2 className="status">LABELED</h2></td>
                        <td><h2 className="page"><Pagination /></h2>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}