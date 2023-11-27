import React, { useEffect, useState } from 'react';
import './styles.css';

const Container = ({
    children,
    background,
    image,
    styles,
    imageStyle,
}) => {
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setContainerWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStylesD = {
        backgroundImage: image ? `url(${image})` : null,
        backgroundColor: background || '#FFFAFA',
        ...styles,
        ...imageStyle
    };

    return (
        <div className="containerStyles" style={containerStylesD}
        >
            <div className='contentStyles'>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, { containerWidth })
                )}
            </div>
        </div>
    );
};

export default Container;

