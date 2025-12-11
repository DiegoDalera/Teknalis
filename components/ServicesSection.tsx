import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSection() {
    return (
        <div className="our-solution section-spacing">
            <div className="container">
                <div className="theme-title-one">
                    <h2>Nuestras Soluciones</h2>
                    <p>En Teknalis ofrecemos un conjunto de servicios diseñados para ayudarte a digitalizar, automatizar
                        y hacer crecer tu negocio. Descubrí cómo podemos colaborar con vos.</p>
                </div>
                <div className="wrapper">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="single-solution-block">
                                <img src="/images/icon/5.png" alt="Desarrollo Web" className="icon" />
                                <h5><Link href="/services">Desarrollo Web</Link></h5>
                                <p>Sitios web modernos y funcionales diseñados para potenciar tu presencia online y
                                    conectar con tus clientes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="single-solution-block">
                                <img src="/images/icon/6.png" alt="Automatizaciones" className="icon" />
                                <h5><Link href="/services">Automatizaciones</Link></h5>
                                <p>Optimizamos procesos repetitivos y creamos flujos de trabajo inteligentes para que
                                    ahorres tiempo y aumentes tu productividad.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="single-solution-block">
                                <img src="/images/icon/7.png" alt="E-commerce" className="icon" />
                                <h5><Link href="/services">E-commerce</Link></h5>
                                <p>Te ayudamos a vender online con tiendas personalizadas, integradas con métodos de
                                    pago y envíos.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="single-solution-block">
                                <img src="/images/icon/8.png" alt="Marketing y SEO" className="icon" />
                                <h5><Link href="/services">Marketing y SEO</Link></h5>
                                <p>Mejoramos tu visibilidad en buscadores y redes sociales para atraer a tus clientes
                                    ideales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
