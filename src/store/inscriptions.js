import { create } from "zustand";

export const useInscriptionsStore = create((set) => ({
    inscriptions: [],

    setInscriptions: (inscriptions) => set({ inscriptions }),

    createInscription: async (newInscription) => {
        if(!newInscription.name || !newInscription.lastname || !newInscription.document || !newInscription.email || !newInscription.phone){
            return {success: false, message: "Complete todos los campos"}
        }
        const res = await fetch("https://inscripciones-i4tm.onrender.com/abc", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newInscription)

        })
        const data = await res.json();
        set((state) => ({inscriptions:[...state.inscriptions, data.data]}))
        return {success: true, message: "Inscripcion creada con exito"}
    },

    createInsDiscipulado: async (newInscription) => {
        if(!newInscription.name || !newInscription.lastname || !newInscription.document || !newInscription.email || !newInscription.phone){
            return {success: false, message: "Complete todos los campos"}
        }
        const res = await fetch("https://inscripciones-i4tm.onrender.com/dis", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newInscription)

        })
        const data = await res.json();
        set((state) => ({inscriptions:[...state.inscriptions, data.data]}))
        return {success: true, message: "Inscripcion creada con exito"} 
    },

    createInsEsc: async (newInscription) => {
        if(!newInscription.name || !newInscription.lastname || !newInscription.document || !newInscription.email || !newInscription.phone){
            return {success: false, message: "Complete todos los campos"}
        }
        const res = await fetch("https://inscripciones-i4tm.onrender.com/es", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newInscription)

        })
        const data = await res.json();
        set((state) => ({inscriptions:[...state.inscriptions, data.data]}))
        return {success: true, message: "Inscripcion creada con exito"}
    }
}));