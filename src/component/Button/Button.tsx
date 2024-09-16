import React from 'react';
import {useTheme} from '../../contexts/ThemeContext';
import {ArrowLeftRight} from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    const {isDarkMode} = useTheme();
    const baseClasses = 'w-full md:w-auto px-6 py-2 text-white rounded-lg transition ease-in-out duration-300 flex items-center justify-center';
    const themeClasses = isDarkMode
        ? 'bg-indigo-950 hover:bg-indigo-900'
        : 'bg-violet-500 hover:bg-violet-600';
    const disabledClasses = 'opacity-50 cursor-not-allowed';

    return (
        <button
            className={`${baseClasses} ${themeClasses} ${props.disabled ? disabledClasses : ''}`}
            {...props}
        >
            <ArrowLeftRight className="mr-2" size={20}/>
            {children}
        </button>
    );
};

export default Button;