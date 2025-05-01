import Image from 'next/image';

interface TestimonialCardProps {
    testimonial: string;
    clientName: string;
    avatarSrc: string;
}

export default function TestimonialCard({ testimonial, clientName, avatarSrc }: TestimonialCardProps) {
    return (
        <div>
            {/* Star Rating */}
            <div className="flex space-x-0.5 mb-4">
                {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-base sm:text-md text-gray-700 mb-6">{testimonial}</p>

            {/* Client Info */}
            <div className="flex items-center">
                <Image
                    src={avatarSrc}
                    alt={`${clientName} avatar`}
                    width={40}
                    height={40}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
                />
                <span className="text-base sm:text-lg font-semibold text-gray-900">{clientName}</span>
            </div>
        </div>
    );
}
