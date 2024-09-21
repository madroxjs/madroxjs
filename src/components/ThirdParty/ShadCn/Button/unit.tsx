/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { 
  render, 
  // screen, 
  // fireEvent
} from '@testing-library/react';
import { Button } from '.';
// import faker from '@faker-js/faker';

describe('<Button />', () => {
  describe('Props', () => {
      test('debug', () => {
        const { debug } = render(<Button />);
        debug()
      });
  });
  describe('Variants', () => {

      describe('variant', () => {
  
        test('default', () => {
          const { container } = render(<Button variant={"default"} />)
          expect(container).toMatchSnapshot();
        })
        test('destructive', () => {
          const { container } = render(<Button variant={"destructive"} />)
          expect(container).toMatchSnapshot();
        })
        test('outline', () => {
          const { container } = render(<Button variant={"outline"} />)
          expect(container).toMatchSnapshot();
        })
        test('secondary', () => {
          const { container } = render(<Button variant={"secondary"} />)
          expect(container).toMatchSnapshot();
        })
        test('ghost', () => {
          const { container } = render(<Button variant={"ghost"} />)
          expect(container).toMatchSnapshot();
        })
        test('link', () => {
          const { container } = render(<Button variant={"link"} />)
          expect(container).toMatchSnapshot();
        })
        test('expandIcon', () => {
          const { container } = render(<Button variant={"expandIcon"} />)
          expect(container).toMatchSnapshot();
        })
        test('ringHover', () => {
          const { container } = render(<Button variant={"ringHover"} />)
          expect(container).toMatchSnapshot();
        })
        test('shine', () => {
          const { container } = render(<Button variant={"shine"} />)
          expect(container).toMatchSnapshot();
        })
        test('gooeyRight', () => {
          const { container } = render(<Button variant={"gooeyRight"} />)
          expect(container).toMatchSnapshot();
        })
        test('gooeyLeft', () => {
          const { container } = render(<Button variant={"gooeyLeft"} />)
          expect(container).toMatchSnapshot();
        })
        test('linkHover1', () => {
          const { container } = render(<Button variant={"linkHover1"} />)
          expect(container).toMatchSnapshot();
        })
        test('linkHover2', () => {
          const { container } = render(<Button variant={"linkHover2"} />)
          expect(container).toMatchSnapshot();
        })
      })
      describe('size', () => {
  
        test('default', () => {
          const { container } = render(<Button size={"default"} />)
          expect(container).toMatchSnapshot();
        })
        test('sm', () => {
          const { container } = render(<Button size={"sm"} />)
          expect(container).toMatchSnapshot();
        })
        test('lg', () => {
          const { container } = render(<Button size={"lg"} />)
          expect(container).toMatchSnapshot();
        })
        test('icon', () => {
          const { container } = render(<Button size={"icon"} />)
          expect(container).toMatchSnapshot();
        })
      })
    })
  })
