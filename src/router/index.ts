import { lazy } from 'react';

const Home = lazy(() => import('@/views/home'));
const About = lazy(() => import('@/views/about'));
const Books = lazy(() => import('@/views/books'));
const AboutChild = lazy(() => import('@/views/aboutChild'));
const Count = lazy(() => import('@/views/count'));
const ReducerCount = lazy(() => import('@/views/reducerCount'));
const UseStateCount = lazy(() => import('@/views/useStateCount'));

const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    name: 'about',
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
    name: 'books',
    path: '/books',
    component: Books
  },
  {
    name: 'count',
    path: '/count',
    component: Count
  },
  {
    name: 'reducerCount',
    path: '/reducerCount',
    component: ReducerCount
  },
  {
    name: 'useStateCount',
    path: '/useStateCount',
    component: UseStateCount
  }
];

export default routes;
