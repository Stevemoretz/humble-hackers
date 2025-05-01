import Link from 'next/link';

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'outline';
}

export default function Button({ href, children, className = '', variant = 'primary' }: ButtonProps) {
    const baseStyles = 'inline-block text-sm md:text-base px-6 py-2.5 rounded-none transition-all duration-200';
    const variantStyles =
        variant === 'primary'
            ? 'bg-blue-600 text-white'
            : 'bg-transparent border-2 border-white text-white';
    const hoverStyles = 'hover:bg-purple-600 hover:text-white hover:border-transparent';

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variantStyles} ${hoverStyles} ${className}`}
        >
            {children}
        </Link>
    );
}
