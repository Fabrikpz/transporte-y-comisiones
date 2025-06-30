import Map from "./Map";

export default function Contact() {
    return (
        <section id="contacto" className="container my-5">
            <h2>Contacto</h2>
            <p>📞 Teléfono: 351-XXX-XXXX</p>
            <p>📍 Estamos en Villa Dolores, Córdoba</p>
            <Map />
            <a
                href="https://wa.me/54351XXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success mt-3"
            >
                Escribinos por WhatsApp
            </a>
        </section>
    );
}
