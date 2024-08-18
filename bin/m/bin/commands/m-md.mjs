import {marked} from 'marked';
import chalk from 'chalk';
import TerminalRenderer from 'marked-terminal';

// Configure marked to use the TerminalRenderer
marked.setOptions({
  renderer: new TerminalRenderer()
});

// Your Markdown content
const mdContent = `
# Heading 1

Here is some text [with some link](https://www.google.com) and will show up on the command line with a clickable link and the text "Heading 2" be bold and larger in font.
`;

// Convert Markdown to CLI format
console.log(marked(mdContent));
