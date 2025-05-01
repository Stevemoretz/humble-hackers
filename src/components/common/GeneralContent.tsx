import HeroContent from "@/components/common/HeroContent";

interface HeroContentProps {
    subtitle?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    subtitleClass?: string;
    titleClass?: string;
    descriptionClass?: string;
    className?: string;
}

export default function GeneralContent({
                                        subtitle,
                                        title,
                                        description,
                                        subtitleClass,
                                        titleClass,
                                        descriptionClass,
                                        className
                                    }: HeroContentProps) {

    return (
        <div>
            <HeroContent
                className={className}
                subtitle={<span className="text-sm">{subtitle}</span>}
                title={<h2 className="text-2xl md:text-4xl mt-6 font-extrabold md:leading-13">{title}</h2>}
                description={<span>{description}</span>}
                descriptionClass={descriptionClass}
                subtitleClass={subtitleClass}
                titleClass={titleClass}
            />
        </div>
    )
}
