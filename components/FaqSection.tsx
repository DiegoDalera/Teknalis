"use client";
import { useState } from 'react';

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            id: 1,
            question: "1. ¿Qué tipos de empresas pueden beneficiarse de sus servicios?",
            answer: "Trabajamos con negocios de todos los tamaños, desde pequeñas empresas y emprendedores hasta medianas empresas que buscan optimizar y digitalizar sus procesos."
        },
        {
            id: 2,
            question: "2. ¿Cuánto tiempo toma desarrollar un sitio web o e-commerce?",
            answer: "El tiempo varía según el alcance del proyecto. Un sitio web estándar puede estar listo en 2 a 4 semanas, mientras que un e-commerce puede tomar de 4 a 6 semanas."
        },
        {
            id: 3,
            question: "3. ¿Ofrecen soporte después de entregar un proyecto?",
            answer: "Sí, ofrecemos planes de mantenimiento y soporte para asegurar que tu sistema funcione perfectamente y siempre esté actualizado."
        },
        {
            id: 4,
            question: "4. ¿Qué herramientas utilizan para las automatizaciones?",
            answer: "Dependiendo del proyecto, trabajamos con plataformas como Zapier, APIs personalizadas, y otras soluciones avanzadas para optimizar tus flujos de trabajo."
        },
        {
            id: 5,
            question: "5. ¿Puedo contratar solo un servicio específico?",
            answer: "Por supuesto. Nuestros servicios están diseñados para ser flexibles y adaptarse a tus necesidades específicas."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            <div className="overlay">
                <div className="container">
                    <div className="theme-title-one">
                        <h2>Preguntas Frecuentes</h2>
                        <p>Respondemos las dudas más comunes para que tomes una decisión informada sobre tus necesidades tecnológicas.</p>
                    </div>
                    <div className="wrapper row no-gutters">
                        <div className="col-xl-6 col-lg-7 order-last">
                            <div className="faq-content">
                                <div className="accordion-one">
                                    <div className="panel-group theme-accordion" id="accordion">
                                        {faqs.map((faq, index) => (
                                            <div className="panel" key={faq.id}>
                                                <div className="panel-heading">
                                                    <h6 className="panel-title">
                                                        <a
                                                            href="#"
                                                            onClick={(e) => { e.preventDefault(); toggleAccordion(index); }}
                                                            className={openIndex === index ? "" : "collapsed"}
                                                        >
                                                            {faq.question}
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div className={`panel-collapse collapse ${openIndex === index ? "show" : ""}`}>
                                                    <div className="panel-body">
                                                        <p>{faq.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 order-first">
                            <div className="img-box">
                                {/* 
                  Video link handled via Fancybox in template. 
                  For now, we replace fancybox with simple link or just static.
                */}
                                <a href="https://www.youtube.com/watch?v=r-AuLm7S3XE" target='_blank' rel='noreferrer' className="play">
                                    <i className="fa fa-play" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
