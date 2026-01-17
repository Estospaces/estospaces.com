import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logoIcon from '../../assets/logo-icon.png';
import { useChat } from '../../contexts/ChatContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { closeChat } = useChat();
    const navigate = useNavigate();

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 100) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        closeChat();
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a 
                        href="/" 
                        onClick={handleNavClick}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <img src={logoIcon} alt="Estospaces" className="w-10 h-10 object-contain" />
                        <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                            Estospaces
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a 
                            href="#features" 
                            onClick={handleNavClick}
                            className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}
                        >
                            Features
                        </a>
                        <a 
                            href="#reviews" 
                            onClick={handleNavClick}
                            className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}
                        >
                            Reviews
                        </a>
                        <a 
                            href="#faq" 
                            onClick={handleNavClick}
                            className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}
                        >
                            FAQ
                        </a>
                        <a 
                            href="/about" 
                            onClick={handleNavClick}
                            className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}
                        >
                            About
                        </a>
                        
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => navigate('/auth/login')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                                    isScrolled 
                                        ? 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary' 
                                        : 'border-white/30 text-white hover:bg-white/10'
                                }`}
                            >
                                <LogIn size={18} />
                                Log In
                            </button>
                            <button
                                onClick={() => navigate('/auth/signup')}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <UserPlus size={18} />
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 ${isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-4 py-4 space-y-3">
                        <a 
                            href="#features" 
                            onClick={handleNavClick}
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                        >
                            Features
                        </a>
                        <a 
                            href="#reviews" 
                            onClick={handleNavClick}
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                        >
                            Reviews
                        </a>
                        <a 
                            href="#faq" 
                            onClick={handleNavClick}
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                        >
                            FAQ
                        </a>
                        <a 
                            href="/about" 
                            onClick={handleNavClick}
                            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                        >
                            About
                        </a>
                        <div className="pt-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
                            <button
                                onClick={() => {
                                    handleNavClick();
                                    navigate('/auth/login');
                                }}
                                className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                            >
                                <LogIn size={18} />
                                Log In
                            </button>
                            <button
                                onClick={() => {
                                    handleNavClick();
                                    navigate('/auth/signup');
                                }}
                                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <UserPlus size={18} />
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
