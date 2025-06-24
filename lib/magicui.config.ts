"use client";

import { Easing } from "framer-motion";

export type Config = {
    animations: {
        default: {
            duration: number;
            ease: Easing;
        };
        hover: {
            duration: number;
            ease: Easing;
        };
        spring: {
            type: "spring";
            stiffness: number;
            damping: number;
        };
    };
    styles: {
        colors: {
            brand: Record<string, string>;
        };
        defaults: {
            shimmer: {
                color: string;
                duration: string;
                size: string;
            };
            ripple: {
                color: string;
            };
        };
    };
};

// Default configuration values
const defaultConfig: Config = {
    animations: {
        default: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1] as Easing,
        },
        hover: {
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1] as Easing,
        },
        spring: {
            type: "spring",
            stiffness: 400,
            damping: 30,
        },
    },
    styles: {
        colors: {
            brand: {
                primary: "var(--brand-primary)",
                secondary: "var(--brand-secondary)",
                accent: "var(--brand-accent)",
            },
        },
        defaults: {
            shimmer: {
                color: "rgba(255, 255, 255, 0.1)",
                duration: "1.5s",
                size: "200%",
            },
            ripple: {
                color: "rgba(255, 255, 255, 0.1)",
            },
        },
    },
};

// Hook for accessing Magic UI configuration
export function useMagicUIConfig(): Config {
    return defaultConfig;
}

export default defaultConfig;
