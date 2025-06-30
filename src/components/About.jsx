export default function About() {
    return (
        <section id="nosotros" className="container my-5">
            <h2>Sobre Nosotros</h2>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="card">
                        <img
                            src="/assets/trabajando.png"
                            alt="Equipo de trabajo"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <p>
                        Carlos Bergalla es una empresa familiar con más de 10 años de experiencia
                        en transporte y comisiones, ofreciendo un servicio rápido, seguro y confiable
                        entre Villa Dolores, Mina Clavero y Córdoba.
                    </p>
                </div>
            </div>
        </section>
    );
}
