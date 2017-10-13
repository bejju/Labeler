import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
import TeachAndQA from './TeachAndQA';

import { PageNotFound } from './PageNotFound';

export const createRoutes = (store) => ([
  {
    path: '/',
    component: CoreLayout,
    indexRoute: Home(store),
    childRoutes: [
      TeachAndQA(store)
    ]
  },
  {
    path: '/metadata',
    indexRoute: Home(store),
    Component: CoreLayout
  },//need to remove the TeachAndQA route
  {
    path: '*',
    component: PageNotFound
  }
])
export default createRoutes
