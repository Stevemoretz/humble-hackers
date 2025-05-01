interface HeroContentProps {
    subtitle?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    showDescription?: boolean;
    subtitleClass?: string;
    titleClass?: string;
    descriptionClass?: string;
    className?: string;
}

export default function HeroContent({
                                        subtitle,
                                        title,
                                        description,
                                        showDescription = true,
                                        subtitleClass = 'font-semibold',
                                        titleClass = 'text-4xl md:text-6xl font-bold mt-4 lg:leading-18',
                                        descriptionClass = 'my-6 text-lg max-w-2xl',
                                        className
                                    }: HeroContentProps) {
    return (
        <div className={className}>
            <span className={subtitleClass || ""}>{subtitle}</span>
            <span className={titleClass || ""}>{title}</span>
            {showDescription && (
                <p className={descriptionClass || ""}>{description}</p>
            )}
        </div>
    );
}
