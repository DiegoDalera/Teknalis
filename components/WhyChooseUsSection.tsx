import Link from 'next/link';

export default function WhyChooseUsSection() {
    return (
        <div className="why-choose-us section-spacing">
            <div className="container">
                <div className="theme-title-one">
                    <h2>¿Por Qué Elegirnos?</h2>
                </div>
                <div className="wrapper">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="single-block">
                                <i className="icon flaticon-puzzle"></i>
                                <h5><Link href="#">Estrategias Personalizadas</Link></h5>
                                <p>Nos enfocamos en entender tus necesidades y diseñar soluciones a medida para
                                    maximizar tu impacto en el mercado.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-block">
                                <i className="icon flaticon-presentation"></i>
                                <h5><Link href="#">Servicios de Alta Calidad</Link></h5>
                                <p>Ofrecemos tecnología de vanguardia, atención al detalle y un estándar de excelencia
                                    en cada proyecto.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="single-block">
                                <i className="icon flaticon-people"></i>
                                <h5><Link href="#">Soporte Cercano y Continuo</Link></h5>
                                <p>Nuestro compromiso no termina con la entrega. Te acompañamos para asegurar que todo
                                    funcione perfectamente y logres tus objetivos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
