import Image from 'next/image';

const galleryImages = [
    {
        src: '/gallery-01.png',
        alt: 'Abstract colorful strings',
    },
    {
        src: '/gallery-02.png',
        alt: 'Abstract purple and orange structure',
    },
    {
        src: '/gallery-03.png',
        alt: 'Blue and yellow abstract shape',
    },
    {
        src: '/gallery-04.png',
        alt: 'Clocks and pills abstract composition',
    },
];

export default function GallerySection() {
    return (
        <section>
            <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-4 gap-4 sm:gap-1 lg:gap-3">
                {galleryImages.map((image, index) => (
                    <div key={index} className="w-full h-64 sm:h-60 lg:h-120">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
