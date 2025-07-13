import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Intro } from '@/features/intro/intro';

const meta = {
    component: Intro,
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    play: async ({ canvas }) => {
        await expect(canvas.getByRole('heading')).toHaveTextContent('Welcome to frontend vibe coding template');
    },
};
