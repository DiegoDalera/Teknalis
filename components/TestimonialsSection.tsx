export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            text: "Teknalis nos ayudó a lanzar nuestra tienda online en tiempo récord. La atención personalizada y el soporte continuo hicieron toda la diferencia.",
            name: "Laura Martínez",
            role: "Dueña de Tienda Verde"
        },
        {
            id: 2,
            text: "Gracias a las automatizaciones que implementaron, ahorramos horas de trabajo cada semana. Teknalis nos simplificó la gestión como nunca antes.",
            name: "Carlos Gómez",
            role: "Gerente en Logística Express"
        },
        {
            id: 3,
            text: "Desde que contratamos los servicios de marketing digital de Teknalis, nuestros clientes aumentaron un 30%. Estamos más que satisfechos con los resultados.",
            name: "Sofía Pérez",
            role: "Fundadora de Emprendiendo"
        }
    ];

    return (
        <div className="testimonial-section section-spacing">
            <div className="overlay">
                <div className="container">
                    <div className="wrapper">
                        <div className="bg">
                            <div className="testimonial-slider-static">
                                {/* For now displaying just the first one or a grid. Template used slider. 
                     We render a static list or just one. Let's render one for design consistency or map them in a grid if possible.
                     The CSS design is for a single item slider. We'll show just the first one for now or simply map them vertically?
                     Let's show all stacked for now, or just the first.
                 */}
                                {testimonials.map((t, i) => (
                                    <div className="item" key={t.id} style={{ marginBottom: '30px', display: i === 0 ? 'block' : 'none' }}>
                                        <p>“ {t.text} ”</p>
                                        <div className="name">
                                            <h6>{t.name}</h6>
                                            <span>{t.role}</span>
                                        </div>
                                    </div>
                                ))}
                                <div style={{ textAlign: 'center', marginTop: '10px', color: '#fff' }}>
                                    {/* Placeholder for dots */}
                                    <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#001a57', borderRadius: '50%', margin: '0 5px' }}></span>
                                    <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#cecece', borderRadius: '50%', margin: '0 5px' }}></span>
                                    <span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#cecece', borderRadius: '50%', margin: '0 5px' }}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
