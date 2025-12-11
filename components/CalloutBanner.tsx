import Link from 'next/link';

export default function CalloutBanner() {
    return (
        <div className="callout-banner section-spacing">
            <div className="container clearfix">
                <h3 className="title">Soluciones inteligentes para que tu negocio crezca</h3>
                <p>En Teknalis, transformamos tus ideas en resultados reales. Digitalizamos procesos, creamos
                    herramientas personalizadas y optimizamos tu presencia online para que te enfoques en lo que mejor
                    hacés: hacer crecer tu negocio.</p>
                <Link href="/contact" className="theme-button-one">Solicitá Asesoramiento</Link>
            </div>
        </div>
    );
}
