
import '@testing-library/jest-dom';
import { 
  render, 
  // screen, 
  // fireEvent
} from '@testing-library/react';
import { Button as Component } from '.';
// import faker from '@faker-js/faker';

describe('<Button />', () => {
  describe('Props', () => {
      test('asChild should accept a boolean', () => {
        const { container } = render(<Component asChild={true} />);
        expect(container).toMatchSnapshot();
      });
  });

  describe('Variants', () => {
    describe('variants', () => {
      test('variant', () => {
        const { container } = render(<Component variant="variant" />);
        expect(container).toMatchSnapshot();
      });
      test('size', () => {
        const { container } = render(<Component variant="size" />);
        expect(container).toMatchSnapshot();
      });
    });
    describe('defaultVariants', () => {
      test('variant', () => {
        const { container } = render(<Component variant="variant" />);
        expect(container).toMatchSnapshot();
      });
      test('size', () => {
        const { container } = render(<Component variant="size" />);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
