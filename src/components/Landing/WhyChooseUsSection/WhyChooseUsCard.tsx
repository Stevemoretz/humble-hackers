interface CardProps {
    number: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export default function WhyChooseUsCard({ number, title, description, icon }: CardProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-6 sm:gap-8 items-center bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            {/* Icon Container */}
            <div className="w-full min-w-30 min-h-30 md:w-56 lg:w-96 bg-purple-100 flex items-center justify-center rounded-lg">
                {icon && <div>{icon}</div>}
            </div>

            {/* Content */}
            <div>
                <span className="text-xs sm:text-sm text-gray-600 font-bold">{number}</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-3">{title}</h3>
                <p className="mt-3 text-sm sm:text-base text-gray-700">{description}</p>
            </div>
        </div>
    );
}
