function About(){
    return(
    <>
<section id="about" className="about">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      <h2>About</h2>
      <p>Sou um programador atualmente no 3 ano do ensino medio da fiap School, trabalhando como desenvolvedor de sistemas na empresa Starline.</p>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <img src="../../../public/img/profile-img.jpg" class="img-fluid" alt="profile"/>
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content">
        <h3>Web Developer</h3>
        <p className="fst-italic">
          Um pouco mais sobre mim:
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>Aniversario:</strong> <span>30 de setembro</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Idade:</strong> <span>17</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Freelancer:</strong> <span>Disponivel</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
  </>
    )
}
export default About