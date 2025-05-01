interface CardProps {
    number: string;
    title: string;
    description: string;
    href: string;
}

export default function ServiceCard({ number, title, description, href }: CardProps) {
    return (
        <div className="bg-white p-6 sm:p-8">
            <div className="flex flex-row justify-center gap-10">
                <span className="text-2xl sm:text-3xl text-purple-200 font-bold">{number}</span>
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h3>
                    <p className="mt-3 text-base sm:text-lg text-gray-700 mb-5">{description}</p>
                    <a className="text-purple-800 text-extrabold text-base underline decoration-solid" href="#">Read More</a>
                </div>
            </div>
        </div>
    );
}
