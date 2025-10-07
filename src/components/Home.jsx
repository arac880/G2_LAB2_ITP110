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

      <section className="hometwo text-center py-5 bg-light">
        <h1 className="fw-bold text-success">Pamantasan ng Cabuyao</h1>
        <p className="lead text-secondary">
          “Dangal ng Bayan, bringing pride and honor to the nation.”
        </p>
        <p>
          Welcome to the official website of the University of Cabuyao — a center of excellence committed to developing future leaders and professionals guided by integrity, competence, and heroism.
          The Pamantasan ng Cabuyao is a university in the city of Cabuyao, province of Laguna, Philippines. It was founded by then Mayor Proceso “Etok” D. Aguillo, through the enactment of Municipal Ordinance 2003-059 approved on April 16, 2003. TO OUR UNIVERSITY
        </p>
      </section>

    </>
    
  );
}
export default Home;
