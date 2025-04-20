import { createContext, useState } from 'react';

export const LanguageContext = createContext({});

export const LanguageProvider = (props) => {

    const [isSpanish, setIsSpanish] = useState(true)

    const value = {
        isSpanish,
        setIsSpanish
    }

    return <LanguageContext.Provider value={value}>{props.children}</LanguageContext.Provider>
}