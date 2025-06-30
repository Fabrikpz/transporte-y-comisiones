import { Carousel } from 'react-bootstrap';

export default function GalleryCarousel() {
    const images = [
        { src: '/assets/foto1.png', alt: 'Foto 1' },
        { src: '/assets/foto2.png', alt: 'Foto 2' },
        { src: '/assets/vehiculo-y-mula.png', alt: 'Vehículo y mula' },
        { src: '/assets/deposito.png', alt: 'Depósito' },
        { src: '/assets/foto3.png', alt: 'Foto 3' },
        { src: '/assets/foto4.png', alt: 'Foto 4' },
        { src: '/assets/mercancia.png', alt: 'Mercancía' },
        { src: '/assets/foto5.png', alt: 'Foto 5' },
        { src: '/assets/foto6.png', alt: 'Foto 6' },
        { src: '/assets/moto-traslado.png', alt: 'Moto traslado' }
    ];

    return (
        <section className="container my-5">
            <h2>Galería</h2>
            <Carousel interval={3000} pause={false}>
                {images.map((img, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + img.src}
                            alt={img.alt}
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
}
