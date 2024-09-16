import React from 'react';
import {useTheme} from '../../contexts/ThemeContext';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<TextAreaProps> = (props) => {
    const {isDarkMode} = useTheme();
    const baseClasses = 'w-full h-64 p-3 border rounded-lg focus:ring-2 focus:border-transparent resize-none transition-colors duration-300';
    const themeClasses = isDarkMode
        ? 'bg-gray-800 border-gray-700 focus:ring-blue-500'
        : 'bg-white border-gray-300 focus:ring-blue-500';

    return <textarea className={`${baseClasses} ${themeClasses}`} {...props} />;
};

export default TextArea;