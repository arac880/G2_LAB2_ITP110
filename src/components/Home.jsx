import heroBanner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="hero-section position-relative text-white"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '550px',
        borderRadius: '0 0 16px 16px',
        overflow: 'hidden',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(26, 30, 37, 0.65)',
          zIndex: 1,
        }}
      ></div>
      
      <div
        className="container h-100 w-100 d-flex flex-column justify-content-center"
        style={{
          zIndex: 2,
          position: 'relative',
          maxWidth: '800px',
        }}
      >
        <h2
          className="fw-semibold mb-3"
          style={{ fontSize: '2rem', letterSpacing: '1px' }}
        >
          Welcome to
        </h2>

        <h1
          className="fw-bold mb-3"
          style={{
            fontSize: '3rem',
            textTransform: 'uppercase',
            color: '#f8f9fa',
          }}
        >
          The University of Dangal ng Bayan
        </h1>

        <p
          className="mb-4"
          style={{
            fontSize: '1.4rem',
            maxWidth: '600px',
            color: '#eeeeeeff',
          }}
        >
          Where shaping globally competitive,
          value-driven professionals ready to make contribute in community.
        </p>

        <Link
          to="/about"
          className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill w-25"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
export default Home;
