import CoreLayout from '../layouts/CoreLayout';
import UnAuthLayout from '../layouts/UnAuthLayout';
import Home from './Home';

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
    path: '*',
    component: PageNotFound
  },
  {
    path: '/metadata',
    Component: CoreLayout
  }
])
export default createRoutes
