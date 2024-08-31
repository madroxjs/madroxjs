import{j as n}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as e}from"./index-CA_HyBnq.js";import{af as r,ae as i}from"./index-Dy4-7q8M.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-afcKKGwg.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";const s=`const keyframes = {
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
}`;function m(){return n.jsx(r,{language:"tsx",code:s})}function c(){return""}function a(o){const t={h1:"h1",h2:"h2",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(t.h1,{id:"extended-animation",children:"Extended Animation"}),`
`,n.jsx(i,{isTemplate:!0,title:"Tailwind/Theme/Extended/Animation"}),`
`,n.jsx(c,{}),`
`,n.jsx(t.h2,{id:"source-code",children:"Source Code"}),`
`,n.jsx(m,{})]})}function v(o={}){const{wrapper:t}={...e(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(a,{...o})}):a(o)}export{c as Documentation,m as SourceCode,v as default};
