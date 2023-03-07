import React, {lazy} from 'react';

  const layouts=lazy(() => import('./Layout/Layout'))
  const contcat=lazy(()=>import('./Pages/Contcat page/ContcatUs'))
  
  export const routes = [
    {
      exact: true,
      path: '/',
      element: layouts
    },
    
    {
      exact: true,
      path: '/about_us',
      element: layouts
    },

    {
      exact: true,
      path: '/get_involved',
      element: layouts
    },
    
    {
      exact: true,
      path: '/contact',
      element: contcat
    },
    
    
    
  ];
  
  export default routes;
