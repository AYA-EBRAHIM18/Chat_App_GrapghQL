import {create} from "zustand"

export const useChats=create((set)=>({
    selectedChats:null,
    setSelectedChats:(selectedChats) =>set({selectedChats}),
    messages:[],
    setMessages:(messages) =>set({messages})
}))