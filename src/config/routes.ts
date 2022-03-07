import IRoute from '../interfaces/route';
import HomePage from '../pages/home';
import AboutMe from '../pages/aboutMe';
import MySkills from '../pages/skills';
import MyContact from '../pages/contact';
import MyProjects from '../pages/projects';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/aboutMe',
        name: 'AboutMe',
        component: AboutMe,
        exact: true
    },
    {
        path: '/skills',
        name: 'MySkills',
        component: MySkills,
        exact: true
    },
    {
        path: '/projects',
        name: 'MyProjects',
        component: MyProjects,
        exact: true
    },
    {
        path: '/contact',
        name: 'MyContact',
        component: MyContact,
        exact: true
    }
]

export default routes;