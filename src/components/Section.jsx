import React, { useRef } from 'react';
import useInView from '../hooks/useInView';

const Section = ({ children, className, id }) => {
    const ref = useRef();
    const isInView = useInView(ref);

    return (
        <section
            ref={ref}
            id={id}
            className={`transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;
