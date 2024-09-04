# 📦 Madrox: Extending the Best of UI Component Libraries

Madrox is a **developer-first UI component library** built by extending the best components from third-party libraries such as **ShadCN/UI**, **Animata**, and others. The goal is to provide a cohesive, **customizable**, and **modern** set of components that integrate seamlessly into your project. 

Madrox gives you the power to leverage well-established libraries, but with additional flexibility and features tailored to your needs. It’s perfect for teams that want to rapidly build applications without reinventing the wheel, but still want to tweak and extend components as needed.

## 🎯 Why Madrox?

- **Installable via NPM**: Quickly integrate Madrox into any project with one command.
- **Extending Existing Libraries**: Built on top of popular libraries like **ShadCN/UI**, **Animata**, and more, giving you tried-and-tested components with additional flexibility and extensions.
- **Customizable UI Components**: Madrox adds **extra variants** and **customizations** to components, letting you extend existing libraries with ease.
- **MDX-powered Documentation**: Automatically generate and maintain component documentation that evolves with your project. Write your own documentation, customize the built-in docs, or extend existing documentation as you tweak components.
- **Built on Modern Tech**: TailwindCSS, Framer Motion, and React Router are core technologies that power Madrox, ensuring fast, efficient, and responsive UIs.

## 🚀 Key Features

### 1. 📦 **Install via NPM**

Madrox can be easily integrated into your project:

```
npm install @madroxjs/madroxjs
```

### 2. 💡 **Extended Components**

Madrox extends components from popular libraries like **ShadCN/UI** and **Animata**, providing additional variants, flexibility, and customization options. This means you get pre-built components from trusted libraries, but with added enhancements tailored to your specific needs.

```
import { Button } from "@madroxjs/madroxjs";

export const MyCustomButton = () => <Button variant="primary">Click Me!</Button>;
```

### 3. 🛠️ **Powered by TailwindCSS and Framer Motion**

Madrox relies on **TailwindCSS** for styling and **Framer Motion** for animations, so all components are **highly customizable** and **performant**:

```
<Button size="large" motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
  Hover me!
</Button>
```

### 4. 📚 **Pre-built and Extended Component Library**

Madrox adds new variants and extensions to components, such as **Buttons**, **Modals**, **Accordions**, and more—extending functionality of libraries like **ShadCN/UI** and **Animata**. Components are responsive, accessible, and designed to fit within any application:

- **Buttons**
- **Hero Sections**
- **Modals**
- **Accordions**
- **Alerts**

### 5. 🔧 **CLI-based Component Creation**

With Madrox, you can quickly generate your own components using the built-in CLI:

```
npx m create component MyNewComponent
```

This scaffolds out your component structure, including **component.tsx**, **story.tsx**, and **documentation** files. You get everything you need to build, document, and extend your components.

### 6. 📄 **Use MDX for Custom Documentation**

Madrox integrates **MDX** so you can write your component documentation in markdown-like syntax with JSX support. Create **dynamic documentation** that evolves with your components and ensures your docs are always up-to-date.

### 7. 🔄 **Flexible Folder Structure**

The folder structure in Madrox is **suggested** but not rigid. Feel free to organize your project in a way that works best for your team. This flexibility allows you to start quickly without needing to restructure your existing project.

## 🛠️ Built Using

Madrox is built on top of several modern tools and libraries:

- **ShadCN/UI**: Provides the foundational UI components that Madrox extends with additional variants and features.
- **Animata**: Used for beautiful, customizable animations.
- **TailwindCSS**: Utility-first CSS for styling.
- **Framer Motion**: Powerful motion library for React, used to add smooth animations to components.
- **React Router**: For modern and flexible routing.
- **MDX**: Enables easy documentation generation with JSX in markdown.

## 🚀 Getting Started

To get started, install Madrox into your project:

```bash
npm install @madroxjs/madroxjs
```

Once installed, you can explore the extended components or even create your own using the CLI.

You can also explore and experiment with components in the Storybook documentation:

- [Storybook Documentation](https://madroxjs.github.io/madroxjs/docs/)

---

Madrox gives you a strong foundation by extending trusted UI libraries, but it also provides flexibility for your own customizations. With built-in MDX documentation and CLI support, you can scale your components while keeping everything well-documented and up-to-date.
