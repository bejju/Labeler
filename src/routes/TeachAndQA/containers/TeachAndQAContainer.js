import { connect } from 'react-redux'
import TeachAndQA from '../components/TeachAndQA.js'

const mapStateToProps = (state) => ({
    role : state.global.toJS().role
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TeachAndQA)