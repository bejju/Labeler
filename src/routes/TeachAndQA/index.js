import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Home = require('./containers/TeachAndQAContainer').default
      const reducer = require('./modules/teachandqa').default

      injectReducer(store, { key: 'teachandqa', reducer })

      /*  Return getComponent   */
      cb(null, Home)

      /* Webpack named bundle   */
    }, 'teachandqa')
  }
})
