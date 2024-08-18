import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';
import chalk from 'chalk'

export const colors = chalk


marked.setOptions({
    // Define custom renderer
    renderer: new TerminalRenderer()
});

const overrideConsole = (method) => {
    const originalMethod = console[method];
    console[method] = function(...args) {
        args = args.map(arg => typeof arg === 'string' ? marked(arg) : arg);
        if (method === 'error') {
            args = args.map(arg => colors.red`${arg}`);
        }
        originalMethod.apply(console, args);
    };
};

['log', 'error', 'info', 'warn'].forEach(method => overrideConsole(method));

  

// export const md = (strings, ...values) => {
//     let markdown;
    
//     if (typeof strings === 'string') {
//         // Called with regular function arguments
//         markdown = strings;
//     } else {
//         // Called with template literals
//         markdown = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
//     }

//     // Check if the function is being invoked by console.log
//     const isInvokedByConsoleLog = new Error().stack.includes('console.log');

//     if (isInvokedByConsoleLog) {
//         return log(markedTerminal(markdown));
//     } else {
//         return markedTerminal(markdown);
//     }
// };

// marked.use(markedTerminal());
