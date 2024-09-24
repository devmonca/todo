import { createContext, ReactNode, useState } from "react";

interface ThemeContextProps{
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
}
export const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    setTheme: () => {}, // Função vazia de placeholder
});

interface ThemeProviderProps{
    children: ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState<string>("light")
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}