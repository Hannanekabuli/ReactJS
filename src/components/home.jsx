import {Link} from 'react-router-dom';


const Home = () => {
    return ( 
        <>
    <h1>Home page</h1>
    <Link to="/about">about</Link> | 
    <Link to="/courses">courses</Link>
    </>
     );
};

export default Home;
