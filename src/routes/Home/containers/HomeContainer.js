import { connect } from 'react-redux'
import Home from '../components/Home.js'

const mapStateToProps = (state) => ({
    role : state.global.toJS().role
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)