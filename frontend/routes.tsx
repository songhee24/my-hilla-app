import {createBrowserRouter} from 'react-router-dom';


export const routes = [
    {
      path: '/',
      element: <h1>Hello</h1>,
    },
];

const router = createBrowserRouter([...routes]);
export default router;
