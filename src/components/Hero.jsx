const heroStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/vehiculo-y-mula.png"})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#0d6efd',
};

export default function Hero() {
    return (
        <div style={heroStyle}>
            <h1>Transporte y Comisiones Carlos Bergalla</h1>
            <p>
                Servicio de transporte de personas y encomiendas entre <strong>Villa Dolores, Mina Clavero</strong> y <strong>Córdoba Capital</strong>. Viajes diarios, puntuales y seguros.
            </p>
            <a href="#contacto" className="btn btn-danger mt-3">¡Contactanos!</a>
        </div>
    );
}
