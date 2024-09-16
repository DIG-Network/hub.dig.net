import { Button as FlowbiteButton, ButtonGroupProps, ButtonProps } from 'flowbite-react';

// "blue": "border border-transparent bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800
// dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",

const buttonTheme = {
  color: {
    cyan:
      'border border-transparent bg-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 ' +
      'enabled:hover:bg-cyan-600 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 ' +
      'dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700',
  },
};

function Button({ children, ...props }: ButtonProps) {
  return (
    <FlowbiteButton theme={buttonTheme} {...props}>
      {children}
    </FlowbiteButton>
  );
}

function Group({ children, ...props }: ButtonGroupProps) {
  return <FlowbiteButton.Group {...props}>{children}</FlowbiteButton.Group>;
}

Button.Group = Group;

export { Button };
