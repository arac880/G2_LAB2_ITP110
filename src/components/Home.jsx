import heroBanner from '../assets/banner.jpg'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url(${heroBanner})`, 
        backgroundPosition: 'center  center',
        backgroundSize: 'cover',
        height: '500px',
      }}
      >
      </div>
    </>
    
  );
}
export default Home;
