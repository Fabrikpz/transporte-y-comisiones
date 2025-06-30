export default function Coverage() {
    return (
        <section id="cobertura" className="bg-light py-5">
            <div className="container">
                <h2>Cobertura</h2>
                <p>Trabajamos en:</p>
                <ul>
                    <li>Villa Dolores</li>
                    <li>Mina Clavero</li>
                    <li>Córdoba Capital</li>
                    <li>Y localidades intermedias</li>
                </ul>

                <h3>Frecuencia de viajes</h3>
                <p>Realizamos viajes los días <strong>martes</strong> y <strong>viernes</strong>.</p>

                <h3>Depósitos</h3>
                <p>
                    Bº Docente, Manzana 78 Casa 2, X5870 Villa Dolores, Córdoba<br />
                    Complejo Ucoma II, Av. Savio 6150 - Interfábrica, Córdoba Capital.
                </p>

                <div className="text-center mt-4">
                    <img
                        src={process.env.PUBLIC_URL + "/assets/deposito.png"}
                        alt="Depósito"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
}
