import { connect } from 'react-redux'
import TeachAndQA from '../components/TeachAndQA.js'
import { dispatchToProps } from '../modules/teachandqa.js'

const mapStateToProps = (state) => ({
    ...state.teachandqa
})
const mapDispatchToProps = {
...dispatchToProps()
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachAndQA)