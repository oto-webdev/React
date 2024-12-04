import { create } from "zustand";

const useCounter = create((set) => {
    return {
        count: 5000,
        handleIncreamentValue: () => {
            set((state) => {
                count: state.count + 1
            })
        }
    }
})

export default useCounter;