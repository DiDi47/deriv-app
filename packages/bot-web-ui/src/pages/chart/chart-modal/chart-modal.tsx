import React, { Suspense } from 'react';
import { Loading } from '@deriv-app/components';
import { observer, useStore } from '@deriv-app/stores';
import ChartModalDesktop from './chart-modal-desktop';

export const ChartModal = observer(() => {
    const {
        ui: { is_desktop },
    } = useStore();
    return <Suspense fallback={<Loading />}>{is_desktop && <ChartModalDesktop />}</Suspense>;
});

export default ChartModal;
