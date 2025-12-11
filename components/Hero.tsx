import Link from 'next/link';

export default function Hero() {
    return (
        <div id="theme-main-banner" className="banner-one">
            {/* 
        Legacy slider used data-src and Camera.js. 
        Converted to a static banner for modern React implementation. 
        Background image set via style.
      */}
            <div style={{ backgroundImage: "url('/images/home/slide-6.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                <div className="camera_caption">
                    <div className="container">
                        <p className="animated fadeInUp">Transformamos tu visión en realidad</p>
                        <h1 className="animated fadeInUp" style={{ animationDelay: '0.2s' }}>
                            Soluciones Digitales<br />Personalizadas
                        </h1>
                        <Link href="/about" className="theme-button-one animated fadeInUp" style={{ animationDelay: '0.39s' }}>
                            Conocé Más
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
