"use client";
import Link from 'next/link';

export default function AboutSection() {
    return (
        <div className="about-compnay-two section-spacing">
            <div className="overlay">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-7 col-12 text">
                            <div className="theme-title-one">
                                <h2>Nosotros</h2>
                            </div>
                            <p>Quiénes somos: &quot;Somos un equipo de especialistas en tecnología y marketing con una misión
                                clara: simplificar la transformación digital para empresas de todos los tamaños. Nos
                                enfocamos en crear herramientas funcionales, efectivas y adaptadas a las necesidades
                                únicas de cada cliente.</p>
                            <p>Qué nos diferencia: &quot;Nuestra combinación de experiencia técnica y enfoque humano nos
                                permite entender tus desafíos y convertirlos en soluciones inteligentes. Trabajamos
                                contigo para alcanzar resultados reales, sin complicaciones</p>

                            <p>Nuestra visión: &quot;Queremos ser tu socio tecnológico, ayudándote a crecer y a mantenerte
                                competitivo en un mundo digital en constante evolución.&quot;</p>
                            <img src="/images/home/sign.png" alt="" className="sign" />
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="quote-form">
                                <form action="#" className="theme-form-one" onSubmit={(e) => e.preventDefault()}>
                                    <div className="row">
                                        <div className="col-md-6"><input type="text" placeholder="Name *" /></div>
                                        <div className="col-md-6"><input type="text" placeholder="Phone *" /></div>
                                        <div className="col-md-6"><input type="email" placeholder="Email *" /></div>
                                        <div className="col-md-6">
                                            <select className="form-control" id="exampleSelect1">
                                                <option>Choose Services?</option>
                                                <option>Business Services</option>
                                                <option>Consumer Product</option>
                                                <option>Financial Services</option>
                                                <option>Software Research</option>
                                            </select>
                                        </div>
                                        <div className="col-12"><textarea placeholder="Message"></textarea></div>
                                    </div>
                                    <button className="theme-button-one">GET A QUOTES</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

