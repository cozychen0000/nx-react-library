import React from 'react';
// packages/shared-ui/Button.tsx
export function Button2(props: any) {
  return <button onClick={() => props.onClick()}>{props.children}</button>;
}
export default Button2;