import Home from '../views/home';
import About from '../views/about';
import Books from '../views/books';
import AboutChild from '../views/aboutChild';

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
  }
];

export default routes;
