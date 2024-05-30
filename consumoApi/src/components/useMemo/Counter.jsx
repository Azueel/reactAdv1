import React, { memo } from 'react';

export const Counter = memo(({ count }) => {
	console.log('se a actualizado el valor');
	return <div>{count}</div>;
});
