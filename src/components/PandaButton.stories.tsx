import type { Meta, StoryObj } from '@storybook/react';
import { PandaButton } from './PandaButton';

const meta = {
  title: 'Components/PandaButton',
  component: PandaButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Primary 버튼 스타일 적용 여부',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼 크기',
    },
    label: {
      control: 'text',
      description: '버튼 텍스트',
    },
  },
} satisfies Meta<typeof PandaButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
    primary: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium Button',
    primary: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
    primary: true,
  },
};

