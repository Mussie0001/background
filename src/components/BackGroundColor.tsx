import { useEffect, useState } from 'react';

export default function BackgroundColor() {
    const [color, setColor] = useState<string>('#ffffff');

    const getRandomColor = (): string => {
        const letters = '0123456789ABCDEF';

        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(getRandomColor());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ backgroundColor: color, height: '100vh', transition: 'background-color 0.8s ease-in-out' }}>
        </div>
    );
}
