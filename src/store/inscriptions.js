import { create } from "zustand";

export const useInscriptionsStore = create((set) => ({
    inscriptions: [],
    message: "",
    setMessage: (msg) => set({ message: msg }),

    setInscriptions: (inscriptions) => set({ inscriptions }),



    createInscription: async (newInscription) => {
        
        if(!newInscription.name || !newInscription.lastname || !newInscription.document || !newInscription.email || !newInscription.phone){
            return {success: false, message: "Complete todos los campos"};
        }
        try {
            const res = await fetch("http://localhost:8080/abc", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newInscription)
            })
            
            const data = await res.json();
            
            if (!res.ok){
                return {success: false, message: "Ya estas registrado/a"}
            }
            
            set((state) => ({inscriptions:[...state.inscriptions, data.data],
                message: "Inscripcion creada con exito"
            }));
            return {success: true, menssage: data.message || "Inscripción creada con éxito"}
        } catch (error) {
            return {success: false, menssage: "Error en la inscripción", error}
        }
    },

    createInsDiscipulado: async (newInscription) => {
        if(!newInscription.name || !newInscription.lastname || !newInscription.document || !newInscription.email || !newInscription.phone){
            return {success: false, message: "Complete todos los campos"}
        }
        try {
            const res = await fetch("https://inscripciones-i4tm.onrender.com/dis", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(newInscription)

            })
            
            const data = await res.json();

            if (!res.ok){
                return {success: false, message: `Ya estas registrado/a`}
            }
            set((state) => ({inscriptions:[...state.inscriptions, data.data]}))
            return {success: true, message: `Inscripcion creada con exito`} 
        } catch (error) {
            return {success: false, menssage: "Error en la inscripción", error}
        }
    },

    createInsEsc: async (newInscription) => {
        if(!newInscription.name || !newInscription.lastname || !newInscription.document || !newInscription.email || !newInscription.phone){
            return {success: false, message: "Complete todos los campos"}
        }
        try{
            const res = await fetch("https://inscripciones-i4tm.onrender.com/es", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(newInscription)

            })
            const data = await res.json();
            if (!res.ok){
                return {success: false, message: `Ya estas registrado/a`}
            }
            set((state) => ({inscriptions:[...state.inscriptions, data.data]}))
            return {success: true, message: "Inscripcion creada con exito"}
        } catch (error) {
            return {success: false, menssage: "Error en la inscripción", error}
        }
    }

}));