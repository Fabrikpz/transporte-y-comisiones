import Map from "./Map";

export default function Contact() {
    return (
        <section id="contacto" className="container my-5">
            <h2>Contacto</h2>
            <p>📞 Teléfono: 351-XXX-XXXX</p>
            <p>📍 Estamos en Villa Dolores, Córdoba</p>

            <a
                href="https://wa.me/54351XXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
            >
                Escribinos por WhatsApp
            </a>

            {/* Mapa embebido con depósitos */}
            <div className="mt-4">
                <Map />
            </div>
        </section>
    );
}
