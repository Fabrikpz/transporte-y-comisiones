export default function Services() {
    return (
        <section id="servicios" className="container my-5">
            <h2>Servicios</h2>
            <ul className="list-unstyled">
                <li>✔ Envíos puerta a puerta</li>
                <li>✔ Comisiones urgentes</li>
                <li>✔ Encomiendas programadas</li>
            </ul>
            <div className="d-flex justify-content-around mt-4">
                <img src="/assets/envios.png" alt="Envíos" style={{width: "100px"}} />
                <img src="/assets/comisiones.png" alt="Comisiones" style={{width: "100px"}} />
                <img src="/assets/encomiendas.png" alt="Encomiendas" style={{width: "100px"}} />
            </div>
        </section>
    );
}
