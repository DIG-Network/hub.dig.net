import { Select as FlowbiteSelect, SelectProps } from 'flowbite-react';

function Select({ children, ...props }: SelectProps) {
  return <FlowbiteSelect {...props}>{children}</FlowbiteSelect>;
}

export { Select };
