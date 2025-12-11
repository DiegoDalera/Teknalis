import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="theme-footer-two">
            <div className="top-footer">
                <div className="container">
                    <div className="row">
                        {/* About Teknalis */}
                        <div className="col-lg-4 col-sm-6 col-12 logo-widget">
                            <div className="logo">
                                <Link href="/"><img src="/images/logo/logo2.png" alt="Teknalis Logo" /></Link>
                            </div>
                            <p>En Teknalis ofrecemos soluciones inteligentes en desarrollo web, e-commerce,
                                automatización y marketing digital. Transformamos tus ideas en resultados reales.</p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-2 col-sm-6 col-12 footer-list">
                            <h6 className="title">Enlaces Rápidos</h6>
                            <ul>
                                <li><Link href="/">Inicio</Link></li>
                                <li><Link href="/services">Servicios</Link></li>
                                <li><Link href="/about">Nosotros</Link></li>
                                <li><Link href="/contact">Contacto</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-lg-3 col-sm-6 col-12 contact-widget">
                            <h6 className="title">Contacto</h6>
                            <ul>
                                <li>
                                    <i className="flaticon-direction-signs"></i>
                                    Sin dirección física por el momento.
                                </li>
                                <li>
                                    <i className="flaticon-multimedia-1"></i>
                                    <a href="mailto:info@teknalis.com">info@teknalis.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:+549123456789">+54 9 123 456 789</a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="col-lg-3 col-sm-6 col-12">
                            <h6 className="title">Seguinos</h6>
                            <ul className="social-icon">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-footer">
                <div className="container">
                    <p>&copy; 2024 Teknalis. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
