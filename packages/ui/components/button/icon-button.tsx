import React from 'react';
// packages/shared-ui/Button.tsx
export function IconButton(props: any) {
  return <button className="btn" onClick={() => props.onClick()}>{props.children}</button>;
}
export default IconButton;