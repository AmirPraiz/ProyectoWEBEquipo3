import React from 'react';
import { useState } from 'react';

export const useCounter = () => {
    const [valor, setValor] = useState(1);
    const acumular = (numero) => {
        setValor(valor + numero);
    }
    return (
        valor,
        acumular
    )
};

export default useCounter;