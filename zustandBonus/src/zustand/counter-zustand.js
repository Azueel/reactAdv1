import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useCounterStore = (id) =>
	create(
		devtools(
			persist(
				(set) => ({
					count: 0,

					incrementador: () => set((state) => ({ count: state.count + 1 })),

					decrementador: () => set((state) => ({ count: state.count - 1 })),
				}),
				{
					name: `counter-storage-${id}`,
				}
			)
		)
	);

export default useCounterStore;
