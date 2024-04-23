import { ComponentPropsWithoutRef, forwardRef } from 'react';
import './Button.scss';

const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'>
>((props, ref) => {
  return <button {...props} className={'Button ' + props.className} ref={ref} />;
});

export default Button;
