import React from 'react';
import { simpleUniqueId } from '../../utils/simpleUniqueId';
import { Wrapper, Input, Label } from './styles';

type ToggleButtonProps = React.InputHTMLAttributes<HTMLInputElement>;

export function ToggleButton(props: ToggleButtonProps) {
  const [id] = React.useState(() => simpleUniqueId('switch'));

  return (
    <Wrapper>
      <Input {...props} type="checkbox" id={id} />
      <Label htmlFor={id} />
    </Wrapper>
  );
}
