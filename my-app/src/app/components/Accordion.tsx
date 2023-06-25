'use client'

import React from "react";
import "../styles/accordion.css"
import { useState } from 'react';

type AccordionProps = {
    items: string[];
    content: string[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            {items.map((item, index, content) => (
                <div key={index}>
                    <span
                        onClick={() => handleClick(index)}
                        style={{ cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        {item}
                    </span>
                    {activeIndex === index && (
                        <span style={{ display: 'block', marginTop: '5px' }}>
                            {content[index]}.
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
