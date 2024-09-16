import React, {useState} from 'react';
import {decodeText, encodeText} from '../../services/apiService';
import {useTheme} from '../../contexts/ThemeContext';
import TextArea from '../TextArea/TextArea';
import Button from '../Button/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {Moon, Sun} from 'lucide-react';

const EncodeDecode: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {isDarkMode, toggleTheme} = useTheme();

    const handleAction = async (action: 'encode' | 'decode') => {
        setIsLoading(true);
        setError(null);
        try {
            const result = action === 'encode' ? await encodeText(inputText) : await decodeText(inputText);
            setOutputText(result);
        } catch (err) {
            setError(`Error al ${action === 'encode' ? 'encriptar' : 'desencriptar'}: ${err instanceof Error ? err.message : String(err)}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} flex items-center justify-center p-4 transition-colors duration-300`}>
            <div
                className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 w-full max-w-4xl transition-colors duration-300`}>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Text Encryption</h1>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'} transition-colors duration-300`}
                    >
                        {isDarkMode ? <Sun size={24}/> : <Moon size={24}/>}
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <TextArea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter text to encode/decode"
                    />
                    <div className="flex flex-col justify-center items-center gap-4">
                        <Button onClick={() => handleAction('encode')} disabled={isLoading}>
                            Encrypt
                        </Button>
                        <Button onClick={() => handleAction('decode')} disabled={isLoading}>
                            Decrypt
                        </Button>
                    </div>
                    <TextArea
                        value={outputText}
                        readOnly
                        placeholder="Result will appear here"
                    />
                </div>
                {isLoading && <p className="mt-4 text-center">Processing...</p>}
                {error && <ErrorMessage message={error}/>}
            </div>
        </div>
    );
};

export default EncodeDecode;