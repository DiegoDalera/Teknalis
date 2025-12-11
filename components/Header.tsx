import Link from 'next/link';

export default function Header() {
    return (
        <header className="header-two">
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-4 col-12">
                            <ul className="social-icon">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="theme-menu-wrapper">
                <div className="container">
                    <div className="bg-wrapper clearfix">
                        <div className="logo float-left">
                            <Link href="/">
                                <img src="/images/logo/logoWebTeknalis.jpg" alt="Teknalis Logo" />
                            </Link>
                        </div>
                        {/* Menu Wrapper */}
                        <div className="menu-wrapper float-left">
                            <nav id="mega-menu-holder" className="clearfix">
                                <ul className="clearfix">
                                    <li><Link href="/">Inicio</Link></li>
                                    <li><Link href="/about">Nosotros</Link></li>
                                    <li><Link href="/services">Servicios</Link></li>
                                    <li><Link href="/#testimonials">Testimonios</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact">Contacto</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
