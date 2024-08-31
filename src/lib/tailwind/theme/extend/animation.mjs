const keyframes = {
    shadcn: {
        "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
        },
    },
    animata: {
        meteor: {
            "0%": { transform: "translateY(-20%) translateX(-50%)" },
            "100%": { transform: "translateY(300%) translateX(-50%)" },
        },
        "pop-blob": {
            "0%": { transform: "scale(1)" },
            "33%": { transform: "scale(1.2)" },
            "66%": { transform: "scale(0.8)" },
            "100%": { transform: "scale(1)" },
        },
        "bg-position": {
            "0%": { backgroundPosition: "0% 50%" },
            "100%": { backgroundPosition: "100% 50%" },
          },  
    }
}
const animations = {
    shadcn: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
    },
    animata: {
        "meteor": "meteor var(--duration) var(--delay) ease-in-out infinite",
        "pop-blob": "pop-blob 5s infinite",
    }
}

export default {
    animation: {
        ...animations.shadcn,
        ...animations.animata
    },
    keyframes: {
        ...keyframes.shadcn,
        ...keyframes.animata
    },
}