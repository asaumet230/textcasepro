'use client'

import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

import { validateAndConvert } from '@/helpers';
import { BsCheckAll } from 'react-icons/bs';

export const TextConverterForm = () => {

    const [input, setInput] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [isCopy, setIsCopy] = useState<boolean>(false);

    const toUpper = () => {

        if (!validateAndConvert(input)) return;
        setOutput(input.toUpperCase());
    }

    const toLower = () => {

        if (!validateAndConvert(input)) return;
        setOutput(input.toLowerCase());
    }

    const capitalize = () => {
        
        if (!validateAndConvert(input)) return;
        setOutput(input.toLowerCase().replace(/((?:^|\s|[.!?])\s*)(\w)/g, (_, prefix, c) => prefix + c.toUpperCase()));
    }

    const afterDot = () => {

        if (!validateAndConvert(input)) return;
        setOutput(input.toLowerCase().replace(/(^\s*|\.[\s\n]*)\w/g, match => match.toUpperCase()));
    }

    const copyTextResult = () => {

        if (!output) return;
        navigator.clipboard.writeText(output);
        setIsCopy(true);

        setTimeout(() => {
            setIsCopy(false);
        }, 3000);
    }

    const clear = () => {
        setInput('');
        setOutput('');
    }

    return (
        <div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

                <textarea
                    className="w-full px-3 py-8 border border-gray-400 rounded-md resize-none h-80 text-sm"
                    placeholder="Ingresa tu texto aquí..."
                    value={input}
                    onChange={e => setInput(e.target.value)} />

                <div className="relative w-full">

                    <textarea
                        className="w-full px-3 py-8 border border-gray-400 rounded-md resize-none h-80 bg-gray-100 text-sm"
                        value={output}
                        readOnly
                    />

                    <button
                        onClick={copyTextResult}
                        className="absolute flex items-center top-1 right-5 px-3 py-1 text-sm cursor-pointer text-gray-500 bg-white/30 backdrop-blur-md rounded hover:text-gray-700 hover:bg-white/40 transition-colors">
                        {
                            isCopy
                                ?
                                (
                                    <>
                                        <BsCheckAll size={18} className='mr-0.5 text-green-600' />
                                        <span className='text-green-600'>Copiado</span>
                                    </>
                                )
                                : (
                                    <>
                                        <FiCopy size={16} className='mr-0.5' />
                                        <span>Copiar texto</span>
                                    </>
                                )
                        }
                    </button>
                </div>

            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
                <button onClick={toUpper} className="cursor-pointer font-semibold w-56 px-4 py-2 rounded text-white bg-blue-700 hover:bg-blue-800 transition">TODO A MAYÚSCULAS</button>
                <button onClick={toLower} className="cursor-pointer font-semibold w-56 px-4 py-2 rounded text-white bg-blue-700 hover:bg-blue-800 transition">todo a minúsculas</button>
                <button onClick={capitalize} className="cursor-pointer font-semibold w-56 px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 transition">Capitalizar</button>
                <button onClick={afterDot} className="cursor-pointer font-semibold w-56 px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 transition">Mayúsculas tras punto</button>
                <button onClick={clear} className="cursor-pointer w-56 font-semibold px-4 py-2 rounded text-black bg-yellow-400 hover:bg-yellow-500 transition">Limpiar texto</button>
            </div>


            <p className="text-center text-gray-500 mt-6">
                {input.split(/\s+/).filter(Boolean).length} palabras • {input.length} caracteres
            </p>
        </div>
    )
}


export default TextConverterForm;