"use client";

import { useEffect, useState } from 'react';
import { generateWeatherBackground } from '@/ai/flows/generate-weather-background';

export function DynamicBackground({ condition }: { condition: string }) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!condition) return;

    let isMounted = true;
    const generate = async () => {
      try {
        const result = await generateWeatherBackground({ weatherCondition: condition });
        if (result && result.backgroundCss && isMounted) {
          const styleObject = result.backgroundCss.split(';').reduce((acc, style) => {
            if (style) {
              const [key, value] = style.split(/:(.*)/s); // Split only on first colon
              if (key && value) {
                const camelCaseKey = key.trim().replace(/-./g, char => char[1].toUpperCase());
                acc[camelCaseKey] = value.trim();
              }
            }
            return acc;
          }, {} as any);
          setStyle(styleObject);
        }
      } catch (error) {
        console.error("Failed to generate weather background:", error);
        setStyle({ backgroundColor: 'hsl(var(--background))' });
      }
    };

    generate();

    return () => {
      isMounted = false;
    };
  }, [condition]);

  return <div className="fixed inset-0 -z-10 transition-all duration-[2000ms] ease-in-out" style={style} />;
}
