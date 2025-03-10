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
            const res = await fetch("https://inscripciones-production.up.railway.app/abc", {
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
            return {success: true, message: `Inscripcion creada con exito`}
        } catch (error) {
            return {success: false, menssage: "Error en la inscripción", error}
        }
    },

    createInsDiscipulado: async (newInscription) => {
        if(!newInscription.name || !newInscription.lastname || !newInscription.document || !newInscription.email || !newInscription.phone){
            return {success: false, message: "Complete todos los campos"}
        }
        try {
            const res = await fetch("https://inscripciones-production.up.railway.app/dis", {
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
            const res = await fetch("https://inscripciones-production.up.railway.app/es", {
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
    },

    fetchInscriptionABC: async () => {
        const response = await fetch('https://inscripciones-production.up.railway.app/table/abc');
        const data = await response.json();
        console.log(data);
        
        set({inscriptions: data.data});
        
    },

    fetchInscriptionDIS: async () => {
        const response = await fetch('https://inscripciones-production.up.railway.app/table/dis');
        const data = await response.json();
        console.log(data);
        
        set({inscriptions: data.data});
        
    },

    fetchInscriptionES: async () => {
        const response = await fetch('https://inscripciones-production.up.railway.app/table/es');
        const data = await response.json();
        console.log(data);
        
        set({inscriptions: data.data});
        
    }

}));