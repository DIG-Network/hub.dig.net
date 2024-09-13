import { Card as FlowbiteCard, CardProps } from 'flowbite-react';

const cardTheme = {
  root: {
    base: 'flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800',
  },
};

function Card({ children, ...props }: CardProps) {
  return (
    <FlowbiteCard theme={cardTheme} {...props}>
      {children}
    </FlowbiteCard>
  );
}

export { Card };
