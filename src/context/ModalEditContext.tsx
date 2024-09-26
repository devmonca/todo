import { createContext, ReactNode, useState } from "react";

interface ModalContextProps{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalContext = createContext<ModalContextProps>({
    isOpen: false,
    setIsOpen: () => {}, // Função vazia de placeholder
});

interface ModalProviderProps{
    children: ReactNode;
}

export function ModalProvider({children}: ModalProviderProps){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <ModalContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </ModalContext.Provider>
    )
}