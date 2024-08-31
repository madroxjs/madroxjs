import{j as e}from"./jsx-runtime-DBEcOq3S.js";import{useMDXComponents as o}from"./index-CA_HyBnq.js";import{ae as t}from"./index-Dy4-7q8M.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-afcKKGwg.js";import"../sb-preview/runtime.js";import"./index-BqTDQIm7.js";import"./index-D-8MO0q_.js";import"./extends-CF3RwP-h.js";import"./_defineProperty-DSxlPr5D.js";import"./_overArg-BZNRQ6_9.js";import"./_baseAssignValue-DD5bxUnJ.js";import"./_getPrototype-By7W0WFf.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"components-glossary",children:"Components Glossary"}),`
`,e.jsx(t,{title:"Documentation/Components Folder"}),`
`,e.jsx(n.h2,{id:"atomic-design",children:"Atomic Design"}),`
`,e.jsx(n.h3,{id:"general-relativity-in-atomic-design",children:"General Relativity in Atomic Design"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://atomicdesign.bradfrost.com/chapter-2/",rel:"nofollow",children:"Atomic Design Chapter 2: Atomic Design Methodology"})]}),`
`,e.jsx(n.p,{children:'In the "general relativity" framework of atomic design, as popularized by Brad Frost, the definitions and roles are universally agreed upon:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"}),": Fundamental, stateless building blocks like buttons, inputs, and labels. They are the simplest UI components, purely presentational, and at their most fundamental are made up of HTMLElements."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecules"}),": Combinations of atoms that form more complex components. Molecules manage local state or contain subcomponents, allowing for interactive and functional UI elements like a form group with an input and label."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Organisms"}),": More complex structures composed of groups of molecules and atoms, such as a header or a user profile section. Organisms might manage more extensive local state and interactions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Templates"}),": Page-level layouts that combine organisms to create page structures without specific content. They define the layout and structure."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pages"}),": Templates filled with actual content, delivering the final product. Pages are the highest level in this hierarchy, representing fully realized web pages."]}),`
`]}),`
`,e.jsx(n.h3,{id:"special-relativity-in-atomic-design",children:"Special Relativity in Atomic Design"}),`
`,e.jsx(n.p,{children:'In the "special relativity" framework, atomic design is tailored to the needs and architecture of a specific design library. Here, molecules manage local state or have subcomponents, making them key players in managing interactions and functionality:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"}),": Defined as stateless, fundamental building blocks specific to the design library. They are the components all other components are built off of."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Molecules"}),": Components that manage local state or have subcomponents outside of the atoms. They are versatile and complex, handling specific interactions and state requirements within the design library. Examples include a dropdown menu or a form field with validation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Organisms"}),": Complex components that may leverage GraphQL (or a similar state management system) to manage and pass down state. They combine molecules and atoms to form sophisticated structures within the design library, such as a dashboard or a navigation bar."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Templates and Pages"}),": In this special relativity framework, templates and pages share their definition with the general case."]}),`
`]}),`
`,e.jsx(n.h2,{id:"composite-or-compound-components",children:"Composite or Compound Components"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://www.smashingmagazine.com/2021/08/compound-components-react/",rel:"nofollow",children:"Smashing Magazine: Compound Components In React"})]}),`
`,e.jsx(n.p,{children:"Composite or compound components in React refer to a design pattern where multiple related components work together to form a cohesive, higher-level interface. These components are often used to manage state and share context, allowing for more flexible and reusable code. This pattern is beneficial in complex UIs where different parts of the component need to be aware of each other’s state."}),`
`,e.jsx(n.h3,{id:"benefits",children:"Benefits:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reusability"}),": By breaking down a UI into smaller, interrelated components, you can reuse these components across different parts of your application."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexibility"}),": Compound components allow for greater flexibility in how UI components are composed, making it easier to manage complex interactions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maintainability"}),": This pattern leads to cleaner and more maintainable code, as the logic for how components interact is encapsulated within the compound component itself."]}),`
`]}),`
`,e.jsx(n.h3,{id:"examples",children:"Examples:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Select/Dropdown Components"}),": A ",e.jsx(n.code,{children:"Select"})," component might contain multiple ",e.jsx(n.code,{children:"Option"})," components, with the ",e.jsx(n.code,{children:"Select"})," managing the overall state and the ",e.jsx(n.code,{children:"Option"})," components rendering each selectable item."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tabs Component"}),": A ",e.jsx(n.code,{children:"Tabs"})," component with ",e.jsx(n.code,{children:"Tab"})," and ",e.jsx(n.code,{children:"TabPanel"})," subcomponents that work together to display tabbed content."]}),`
`]}),`
`,e.jsx(n.h2,{id:"react",children:"React"}),`
`,e.jsx(n.h3,{id:"class-to-functional-components",children:"Class to Functional Components"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://bootcamp.uxdesign.cc/separating-%EF%B8%8F-business-logic-from-ui-components-in-react-18-aa1775b3caba",rel:"nofollow",children:"Separating Business Logic from UI Components in React 18"})]}),`
`,e.jsx(n.p,{children:"The transition from class components to functional components in React has been largely driven by the introduction of Hooks in React 16.8. Hooks allow you to use state and other React features without writing a class. This shift has simplified React development and made it more intuitive."}),`
`,e.jsx(n.h3,{id:"key-differences",children:"Key Differences:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State Management"}),": In class components, state is managed through ",e.jsx(n.code,{children:"this.state"})," and ",e.jsx(n.code,{children:"setState()"}),". In functional components, the ",e.jsx(n.code,{children:"useState"})," Hook is used for state management."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lifecycle Methods"}),": Class components use lifecycle methods like ",e.jsx(n.code,{children:"componentDidMount"})," and ",e.jsx(n.code,{children:"componentWillUnmount"}),". Functional components use the ",e.jsx(n.code,{children:"useEffect"})," Hook to manage side effects, effectively replacing lifecycle methods."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Code Readability"}),": Functional components tend to be more concise and easier to read, as they eliminate the need for boilerplate code like ",e.jsx(n.code,{children:"this"})," bindings."]}),`
`]}),`
`,e.jsx(n.h3,{id:"composition",children:"Composition"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://reactjs.org/docs/composition-vs-inheritance.html",rel:"nofollow",children:"React Documentation"})]}),`
`,e.jsx(n.p,{children:"Composition is the recommended way to build React components. It allows components to be nested within each other, enabling the creation of complex UIs from simple building blocks. This pattern encourages code reuse and modular design."}),`
`,e.jsx(n.h3,{id:"hooks",children:"Hooks"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://reactjs.org/docs/hooks-intro.html",rel:"nofollow",children:"React Documentation"})]}),`
`,e.jsx(n.p,{children:"Hooks are functions that let you “hook into” React state and lifecycle features from functional components. They simplify the use of state and other React features, leading to more manageable and understandable code."}),`
`,e.jsx(n.h3,{id:"popular-hooks",children:"Popular Hooks:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useState"}),": Manages state in a functional component."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useEffect"}),": Manages side effects like fetching data, directly replacing lifecycle methods."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"useContext"}),": Accesses context values without using ",e.jsx(n.code,{children:"contextType"})," or ",e.jsx(n.code,{children:"Context.Consumer"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"micro-frontends",children:"Micro Frontends"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://www.altexsoft.com/blog/micro-frontend/",rel:"nofollow",children:"Micro Frontend: A Microservice Approach to Developing Web UIs"})]}),`
`,e.jsx(n.p,{children:"Micro frontends are an architectural style where a frontend application is decomposed into individual, semi-independent “micro” apps that work together to create the overall user interface. This approach brings the benefits of microservices to frontend development, enabling teams to work independently on different parts of an application."}),`
`,e.jsx(n.h3,{id:"benefits-1",children:"Benefits:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Independence"}),": Different teams can develop, deploy, and maintain their own micro frontends independently."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Scalability"}),": Allows large applications to be more easily scaled, as each micro frontend can be optimized and scaled separately."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resilience"}),": The failure of one micro frontend doesn’t necessarily bring down the entire application, improving overall system resilience."]}),`
`]}),`
`,e.jsx(n.h3,{id:"challenges",children:"Challenges:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Integration"}),": Integrating multiple micro frontends into a seamless user experience can be challenging."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Communication"}),": Ensuring smooth communication and shared state between micro frontends requires careful planning and implementation."]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-library",children:"Component Library"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://www.uxpin.com/studio/blog/building-component-library-guide/",rel:"nofollow",children:"Building a Component Library – A Step-by-Step Guide"})]}),`
`,e.jsx(n.p,{children:"A component library is a collection of reusable UI components that can be shared across multiple projects. This approach promotes consistency, reduces development time, and makes it easier to maintain a cohesive design language across an application or suite of applications."}),`
`,e.jsx(n.h3,{id:"steps-to-build-a-component-library",children:"Steps to Build a Component Library:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Define Your Needs"}),": Determine the scope of your component library and what components need to be included."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Design Components"}),": Work closely with designers to ensure that components meet design guidelines and are visually consistent."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Develop Components"}),": Implement components using best practices, ensuring they are flexible and easy to use in various contexts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Document Components"}),": Provide clear documentation for each component, including usage examples and API details."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Distribute Components"}),": Make the component library available through a package manager or private repository."]}),`
`]}),`
`,e.jsx(n.h3,{id:"benefits-2",children:"Benefits:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistency"}),": Ensures a consistent look and feel across different parts of an application."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Efficiency"}),": Speeds up development by providing pre-built components."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maintainability"}),": Centralized updates to the component library propagate across all projects using it, simplifying maintenance."]}),`
`]}),`
`,e.jsx(n.h2,{id:"storybook-driven-development",children:"Storybook Driven Development"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://medium.com/nulogy/storybook-driven-development-a3c517276c07",rel:"nofollow",children:"Storybook Driven Development"})]}),`
`,e.jsx(n.p,{children:"Storybook Driven Development (SBDD) is a development approach where components are developed and tested in isolation using Storybook. This approach allows developers to focus on individual components, ensuring they are well-documented and thoroughly tested before being integrated into the broader application."}),`
`,e.jsx(n.h3,{id:"advantages-of-sbdd",children:"Advantages of SBDD:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Isolation"}),": Components are developed in isolation, reducing the complexity and making it easier to focus on individual component functionality."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation"}),": Storybook provides built-in documentation, ensuring that all components are well-documented and easy to understand."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Testing"}),": With SBDD, you can test components thoroughly in Storybook before integrating them into the application, reducing the likelihood of bugs."]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-driven-design",children:"Component Driven Design"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://medium.com/@arqex/what-is-component-driven-development-and-why-to-use-it-e3e57abbc449",rel:"nofollow",children:"What is Component Driven Development?"})]}),`
`,e.jsx(n.p,{children:"Component Driven Development (CDD) is an approach to UI development where the focus is on building and testing components first, before integrating them into screens or applications. This methodology ensures that components are reusable, scalable, and maintainable."}),`
`,e.jsx(n.h3,{id:"process",children:"Process:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Design"}),": Start by designing and developing the smallest components first (atoms) and gradually compose them into larger units (molecules, organisms)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Testing"}),": Test each component independently to ensure it behaves as expected."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Integration"}),": Once components are verified, they can be integrated into"]}),`
`]}),`
`,e.jsx(n.h2,{id:"emergent-design",children:"Emergent Design"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://martinfowler.com/bliki/EmergentDesign.html",rel:"nofollow",children:"Emergent Design"})]}),`
`,e.jsx(n.p,{children:"Emergent design is an approach where the design evolves over time through continuous refactoring and iteration rather than being fully defined upfront. This philosophy aligns well with Agile methodologies, emphasizing adaptability, responsiveness to change, and the development of simple, yet robust, solutions."}),`
`,e.jsx(n.h3,{id:"key-principles",children:"Key Principles:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Incremental Development"}),": Design evolves with each iteration, responding to the actual needs of the project as they emerge."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Continuous Refactoring"}),": Regularly revisiting and improving the design keeps the system clean and maintainable."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Adaptability"}),": The design must be flexible enough to accommodate new requirements without requiring significant rework."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simplicity"}),": Focus on creating the simplest design that works, avoiding over-engineering."]}),`
`]}),`
`,e.jsx(n.h3,{id:"benefits-3",children:"Benefits:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Flexibility"}),": By not committing to a rigid design upfront, teams can adapt to changes more easily."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced Complexity"}),": Emergent design encourages simplicity, which in turn reduces the complexity of the codebase."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Improved Quality"}),": Continuous refactoring helps maintain high code quality, as issues are addressed as they arise rather than accumulating."]}),`
`]}),`
`,e.jsx(n.h2,{id:"design-systems",children:"Design Systems"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://www.designbetter.co/design-systems-handbook",rel:"nofollow",children:"Design Systems Handbook"})]}),`
`,e.jsx(n.p,{children:"A design system is a comprehensive guide that provides a shared language for teams to create consistent and cohesive digital products. It typically includes components, design patterns, style guides, and best practices to ensure that products are visually and functionally unified."}),`
`,e.jsx(n.h3,{id:"components-of-a-design-system",children:"Components of a Design System:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Style Guide"}),": Defines the visual language, including typography, color schemes, and spacing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Library"}),": A collection of reusable components that follow the design system's guidelines."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Design Tokens"}),": Variables that store design decisions, such as color values, font sizes, and spacing units, to ensure consistency across platforms."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Documentation"}),": Provides detailed guidelines and best practices for using the design system effectively."]}),`
`]}),`
`,e.jsx(n.h3,{id:"benefits-4",children:"Benefits:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistency"}),": Ensures a unified look and feel across all products, regardless of platform or team."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Efficiency"}),": Speeds up the design and development process by providing reusable components and patterns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Collaboration"}),": Facilitates collaboration between designers and developers by providing a common language and set of guidelines."]}),`
`]}),`
`,e.jsx(n.h3,{id:"challenges-1",children:"Challenges:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maintenance"}),": Keeping the design system up-to-date and aligned with evolving brand and product needs can be resource-intensive."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Adoption"}),": Ensuring widespread adoption across teams requires careful planning and clear communication."]}),`
`]}),`
`,e.jsx(n.h2,{id:"philosophies",children:"Philosophies"}),`
`,e.jsxs("small",{children:["Source - ",e.jsx(n.a,{href:"https://medium.com/upskilling/design-philosophy-emergence-9e30c11e06c0",rel:"nofollow",children:"Design Philosophy: Emergence"})]}),`
`,e.jsx(n.p,{children:"Design philosophies guide how teams approach the creation of digital products. Emergence, in particular, is a philosophy that embraces complexity and change, advocating for solutions that evolve naturally over time rather than being strictly planned from the start."}),`
`,e.jsx(n.h3,{id:"emergence-in-design",children:"Emergence in Design:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Natural Growth"}),": Like natural systems, design should evolve organically, responding to new challenges and opportunities."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interconnectedness"}),": Recognizes that every part of the system is interconnected and changes in one area can impact others."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Continuous Learning"}),": Encourages ongoing experimentation, feedback, and learning, allowing the design to improve iteratively."]}),`
`]}),`
`,e.jsx(n.h3,{id:"application",children:"Application:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Responsive Design"}),": Ensures that products adapt to different devices, screen sizes, and user needs."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"User-Centered Design"}),": Focuses on understanding and meeting the needs of users as they evolve over time."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Agile Development"}),": Aligns well with Agile methodologies, where design and development are done in small, iterative cycles, allowing for continuous improvement."]}),`
`]})]})}function w(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{w as default};
