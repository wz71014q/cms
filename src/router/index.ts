import { lazy } from 'react';

const Home = lazy(() => import('../views/home'));
const About = lazy(() => import('../views/about'));
const Books = lazy(() => import('../views/books'));
const AboutChild = lazy(() => import('../views/aboutChild'));
const Count = lazy(() => import('../views/count'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: "/about/:aboutid",
        component: AboutChild
      }
    ]
  },
  {
    path: '/books',
    component: Books
  },
  {
    path: '/count',
    component: Count
  }
];

export default routes;
