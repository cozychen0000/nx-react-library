import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './index';
export default { title: "components/Button", component: Button };


export const Colors = (args:ButtonProps) => (
  <div className="flex flex-col space-y-4 mt-8 bg-red-400">
    <div>
      <Button {...args} color="primary">
        Outlined
      </Button>
    </div>
    <div>
      <Button {...args} color="secondary">
        Filled
      </Button>
    </div>
  </div>
);

Colors.args = {
  variant: 'filled',
};