export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                    src="/assets/logo.png"
                    alt="Logo"
                    style={{ height: "40px", marginRight: "10px" }}
                />
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#nosotros">Nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#servicios">Servicios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cobertura">Cobertura</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
