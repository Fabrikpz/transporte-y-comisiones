export default function Hero() {
    const heroStyle = {
        backgroundImage: 'url(/assets/fondo-transporte.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '80px 20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
    };

    return (
        <div style={heroStyle} className="text-center">
            <h1>Transporte y Comisiones</h1>
            <p>Entre Villa Dolores, Mina Clavero y Córdoba</p>
            <a href="#contacto" className="btn btn-danger mt-3">¡Contactanos!</a>
        </div>
    );
}
