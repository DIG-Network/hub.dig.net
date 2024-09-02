import { NavbarComponentProps } from 'flowbite-react';

function Navbar({ children, ...props }: NavbarComponentProps) {
  return <Navbar {...props}>{children}</Navbar>;
}

export { Navbar };
