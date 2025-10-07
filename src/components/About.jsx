function About() {
  return (
    <section className="py-4 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h3 className="fw-bold mb-1">About Our Group</h3>
            <p className="text-muted small">
              We are IT students from Pamantasan ng Cabuyao building a simple React SPA.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Card 1: Carille */}
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-3">
                <img
                  src="/src/assets/carille.jpeg"
                  alt="Carille Zapata"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-1 small">Carille Zapata</h6>
                <p className="text-primary mb-2 small">Web Developer</p>
                <p className="small text-muted" style={{ fontSize: "0.8rem", lineHeight: 1.35 }}>
                  Passionate IT student specializing in web development with React and Node.js.
                </p>
                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>React</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>JavaScript</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Php</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>MySQL</span>
                </div>
                <div className="d-flex justify-content-center gap-3 small">
                  <a href="mailto:zapatacarille13@gmail.com" className="text-decoration-none">Email</a>
                  <a href="https://github.com/Ellirac" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Molly */}
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-3">
                <img
                  src="/src/assets/molly.jpg"
                  alt="Molly Geraldez"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-1 small">Molly Geraldez</h6>
                <p className="text-primary mb-2 small">Web Designer</p>
                <p className="small text-muted" style={{ fontSize: "0.8rem", lineHeight: 1.35 }}>
                  Simple and creative web designer with a knack for user-friendly designs.
                </p>
                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Html</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Figma</span>
                </div>
                <div className="d-flex justify-content-center gap-3 small">
                  <a href="mailto:geraldezmolly36@gmail.com" className="text-decoration-none">Email</a>
                  <a href="https://github.com/mollygeraldez" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Zoen */}
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-3">
                <img
                  src="/src/assets/zoen.png"
                  alt="Zoen Aldueza"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-1 small">Zoen Aldueza</h6>
                <p className="text-primary mb-2 small">Frontend Developer</p>
                <p className="small text-muted" style={{ fontSize: "0.8rem", lineHeight: 1.35 }}>
                  I’m an aspiring frontend developer learning to build clean, responsive, and user-friendly websites.
                </p>
                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>HTML</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>CSS</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>JavaScript</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Responsive Design</span>
                </div>
                <div className="d-flex justify-content-center gap-3 small">
                  <a href="mailto:alduezazoen77@gmail.com" className="text-decoration-none">Email</a>
                  <a href="https://github.com/ZAA-ZAA" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Lawrence */}
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-3">
                <img
                  src="/src/assets/mindanao.png"
                  alt="Lawrence Mindanao"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-1 small">Lawrence Mindanao</h6>
                <p className="text-primary mb-2 small">Web Developer</p>
                <p className="small text-muted" style={{ fontSize: "0.8rem", lineHeight: 1.35 }}>
                  An ispiring IT student with a hopes of growing in the field of web development. Specializes in full-stack development.
                </p>
                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>React</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Laravel</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Java</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>MySQL</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>C++</span>
                </div>
                <div className="d-flex justify-content-center gap-3 small">
                  <a href="mailto:mindanaolawrence86@gmail.com" className="text-decoration-none">Email</a>
                  <a href="https://github.com/stretchStress" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Genesis */}
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-3">
                <img
                  src="/src/assets/abanales.jfif"
                  alt="Genesis M. Abanales"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-1 small">Genesis M. Abanales</h6>
                <p className="text-primary mb-2 small">Networking and Hardware</p>
                <p className="small text-muted" style={{ fontSize: "0.8rem", lineHeight: 1.35 }}>
                  IT student with skills in networking and hardware. Configuring routers, switches, and troubleshooting hardware.
                </p>
                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Networking 1&2</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Router & Switch Setup</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>VLAN</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Hardware Troubleshooting</span>
                </div>
                <div className="d-flex justify-content-center gap-3 small">
                  <a href="mailto:abanalesgenesis76@gmail.com" className="text-decoration-none">Email</a>
                  <a href="https://github.com/Genesis2327" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Jake Abriam */}
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-3">
                <img
                  src="/src/assets/abriam.jpg"
                  alt="Jake Abriam"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-1 small">Jake Abriam</h6>
                <p className="text-primary mb-2 small">IT Support Specialist</p>
                <p className="small text-muted" style={{ fontSize: "0.8rem", lineHeight: 1.35 }}>
                  Aspiring IT Professional interested technical assistance and ensures smooth system operations by supporting end-users and maintaining reliable IT solutions
                </p>
                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Troubleshooting</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Technical Support</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>System Maintenance</span>
                </div>
                <div className="d-flex justify-content-center gap-3 small">
                  <a href="mailto:abriamjake13@gmail.com" className="text-decoration-none">Email</a>
                  <a href="https://github.com/abriamjake13" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 7: Ara Christina C. Ceres */}
          <div className="col-xl-3 col-lg-4 col-md-6 mb-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-3">
                <img
                  src="/src/assets/CERES_2x2.png"
                  alt="Ara Christina C. Ceres"
                  className="rounded-circle mb-2"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mb-1 small">Ara Christina C. Ceres</h6>
                <p className="text-primary mb-2 small">Quality Assurance(QA) Tester/Project Manager</p>
                <p className="small text-muted" style={{ fontSize: "0.8rem", lineHeight: 1.35 }}>
                  An aspiring QA Tester interested handling identifying bugs and ensuring software reliability. Organizes, coordinates, and oversees project tasks to ensure timely delivery and team collaboration
                </p>
                <div className="mb-2">
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Project Planning</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Debugging</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Bug Tracking</span>
                  <span className="badge bg-light text-dark me-1 mb-1" style={{ fontSize: "0.7rem" }}>Problem-Solving</span>
                </div>
                <div className="d-flex justify-content-center gap-3 small">
                  <a href="mailto:ceresarachritina74@gmail.com" className="text-decoration-none">Email</a>
                  <a href="https://github.com/arac880" target="_blank" rel="noreferrer" className="text-decoration-none">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
