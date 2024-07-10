import React from 'react';
import { screen, render } from '@testing-library/react';
import InlineNoteWithIcon from '../inline-note-with-icon';

jest.mock('@deriv-app/components', () => {
    const original_module = jest.requireActual('@deriv-app/components');
    return {
        ...original_module,
        Icon: jest.fn(() => 'mockedIcon'),
    };
});
describe('<InlineNoteWithIcon />', () => {
    const props = {
        icon: 'string',
        message: 'test message',
        title: 'test title',
    };

    it('should render the InlineNoteWithIcon component', () => {
        render(<InlineNoteWithIcon {...props} />);
        expect(screen.getByText('mockedIcon')).toBeInTheDocument();
        expect(screen.getByText(/test message/i)).toBeInTheDocument();
        expect(screen.getByText(/test title/i)).toBeInTheDocument();
    });
});
