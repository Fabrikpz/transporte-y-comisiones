export default function Services() {
    const services = [
        { title: 'Envíos puerta a puerta', image: '/assets/moto-traslado.png', cover: true },
        { title: 'Comisiones urgentes', image: '/assets/mercancia.png', cover: true },
        { title: 'Encomiendas programadas', image: '/assets/camion.png', cover: false },
    ];

    return (
        <section id="servicios" className="container my-5">
            <h2 className="mb-4">Servicios</h2>
            <div className="row">
                {services.map((service, idx) => (
                    <div key={idx} className="col-md-4 mb-4">
                        <div className="card shadow-sm h-100 d-flex flex-column">
                            <div
                                style={{
                                    height: '200px',
                                    width: '100%',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: service.cover ? 'transparent' : '#f8f9fa',
                                }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{
                                        height: '100%',
                                        width: service.cover ? '100%' : 'auto',
                                        objectFit: service.cover ? 'cover' : 'contain',
                                    }}
                                />
                            </div>
                            <div className="card-body text-center mt-auto">
                                <h5 className="card-title">{service.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
