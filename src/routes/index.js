import CoreLayout from '../layouts/CoreLayout';
import UnAuthLayout from '../layouts/UnAuthLayout';
import Home from './Home';
import TeachAndQA from './TeachAndQA';

import { PageNotFound, UnAuthorize } from './PageNotFound';

export const createRoutes = (store) => ([
  {
    path: '/',
    component: CoreLayout,
    indexRoute: Home(store),
    childRoutes: [  ]
  },
  {
    path: '/unauthorized',
    component: CoreLayout,
    indexRoute: UnAuthorize
  },
  
  {
    path: '/metadata',
    indexRoute: Home(store),
    Component: CoreLayout
  },
  {
    path: '/TeachAndQA',
    indexRoute: TeachAndQA(store),
    Component: CoreLayout
  },//need to remove the TeachAndQA route
  {
    path: '*',
    component: PageNotFound
  }
])
export default createRoutes
