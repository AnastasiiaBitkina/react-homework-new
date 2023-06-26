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
                <div className="accordion-item" key={index}>
                    <span className="accordion-card"
                        onClick={() => handleClick(index)}
                        style={{ cursor: 'pointer'}}
                    >
                        {item}
                    </span>
                    {activeIndex === index && (
                        <span className="accordion-content" style={{ display: 'block', marginTop: '5px' }}>
                            {content[index]}.
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
