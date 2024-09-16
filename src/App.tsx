import React from 'react';
import {ThemeProvider} from './contexts/ThemeContext';
import EncodeDecode from "./component/EncodeDecode/EncodeDecode.tsx";


const App: React.FC = () => {
    return (
        <ThemeProvider>
            <EncodeDecode/>
        </ThemeProvider>
    );
};

export default App;