import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      Home Page of App
      <br />
      <Link to="/starred">Go to Starred Page</Link>
    </div>
  );
};

export default Home;
