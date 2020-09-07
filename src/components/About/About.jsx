import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Sobre mim" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} width="30px" height="40px" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Me apaixoei por código ainda criança quando gabaritava os questionários de língua portuguesa no laborátorio de informática da escola, um detalhe, todas as páginas eram estáticas.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'No final do ensino fundamental já estava certo do que eu queria da vida, Programar! Entrei no curso técnico em informática no Instituto Federal onde tive contato com Pascal, algoritmos e lógica de programação. Porém me apaixonei pela sintaxe de uma linguagem bem mais simples. Python!'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'No momento estou imerso no desenvolvimento web e mobile. Estudando coisas como ReactJS, React Native e DjangoREST Framework. Focando mais em uma stack que domina o mercado. A stack Javascript!'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Veja meu currículo
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
