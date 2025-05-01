import Button from "@/components/common/Button";
import Image from 'next/image';
import Link from 'next/link';
import "./Header.css";
import nextConfig from "../../../next.config";

interface Props {
    hero: React.ReactNode;
}

const navLinks = [
    { href: "/#", label: "Home", isHighlighted: true },
    { href: "/#", label: "About", isHighlighted: false },
    { href: "/#", label: "Services", isHighlighted: false },
    { href: "/#", label: "Blog", isHighlighted: false },
    { href: "/#", label: "Contact", isHighlighted: false },
];

export default function Header(props: Props) {
    return (
        <header className={`bg-cover bg-center bg-[url(${nextConfig.basePath}/landing/hero-bg.png)] relative`}>
            <div className="backdrop-brightness-[30%]">
                <div className="absolute w-full top-0 bg-transparent z-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                        <div className="flex items-center">
                            <Image
                                src={`${nextConfig.basePath}/logo.png`}
                                alt="Humble Hacker Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 sm:w-12 sm:h-12 mr-3"
                                sizes="(max-width: 640px) 40px, 48px"
                            />
                            <Link href="/" className="text-xl sm:text-2xl font-extrabold text-white">
                                Humble Hacker
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center">
                            <ul className="flex space-x-6 lg:space-x-8 mr-4 text-base lg:text-lg text-white/80">
                                {navLinks.map((link, index) => (
                                    <li
                                        key={index}
                                        className={`block py-4 text-base ${link.isHighlighted ? 'text-purple-300' : 'text-gray-300'} hover:text-white transition-colors`}
                                    >
                                        <Link href={link.href} className="hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Button href="/#" variant="outline" className="ml-4">
                                Get Started
                            </Button>
                        </nav>

                        {/* Hamburger Icon for Mobile */}
                        <label
                            htmlFor="mobile-menu-toggle"
                            className="md:hidden text-white cursor-pointer z-50 relative"
                        >
                            <svg
                                className="w-6 h-6 hamburger-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 12h16"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 18h16"
                                />
                            </svg>
                            <svg
                                className="w-6 h-6 close-icon hidden"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </label>

                        {/* Mobile Navigation */}
                        <input id="mobile-menu-toggle" type="checkbox" className="hidden"/>
                        <nav className="mobile-nav">
                            <div className="mobile-nav-header">
                                <div className="flex items-center">
                                    <Image
                                        src={`${nextConfig.basePath}/logo.png`}
                                        alt="Humble Hacker Logo"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 mr-3"
                                    />
                                    <span className="text-xl font-extrabold text-white">
                                        Humble Hacker
                                    </span>
                                </div>
                            </div>
                            <div className="mobile-nav-body">
                                <ul className="flex flex-col">
                                    {navLinks.map((link, index) => (
                                        <li key={index} className="border-b border-gray-200">
                                            <Link
                                                href={link.href}
                                                className={`block py-4 text-base ${link.isHighlighted ? 'text-purple-600' : 'text-gray-900'} hover:text-purple-600 transition-colors`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Button href="/#" variant="outline" className="mt-6 w-full text-center">
                                    Get Started
                                </Button>
                            </div>
                        </nav>
                    </div>
                </div>
                {props.hero}
            </div>
        </header>
    );
}
