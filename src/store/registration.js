import { create } from "zustand";

export const useRegistrationStore = create((set) => ({
    registrations: [],
    message: "",
    setMessage: (msg) => set({ message: msg }),

    setRegistrations: (registrations) => set({ registrations }),

    createRegistration: async (newRegistration) => {
        if (!newRegistration.name || !newRegistration.lastname || !newRegistration.document) {
            return { success: false, message: "Complete todos los campos" };
        }
        try {
            const res = await fetch("https://inscripciones-production.up.railway.app/registration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newRegistration),
            });

            const data = await res.json();
            

            if (!res.ok) {
                if (data.data.sex === "Masculino") /* trae el registro existente */ {                
                return { success: false, message: "Ya está Registrado"}
            } else if (data.data.sex === "Femenino") {
                return { success: false, message: "Ya está Registrada"}
            } else {
                return { success: false, message: "Ya está Registrado/a" };
            }
        }
            
            
            set((state) => ({registrations: [...state.registrations, data.data],
                message: "Registro creado con exito",
            }));
            
            if (data.data.sex === "Masculino") /* trae el registro recien creado */
                return {success: true, message: `Hermano registrado con éxito` };
            else if (data.data.sex === "Femenino")
                return {success: true, message: `Hermana registrada con éxito` };
            else 
                return {success: true, message: `Registro creado con éxito` };
            
        } catch (error) {
            return { success: false, message: "Error Supremo en el registro", error };
        }
    },

    fetchRegistrations: async () => {
        const response = await fetch('https://inscripciones-production.up.railway.app/registration');
        const data = await response.json();
        
        set({registrations: data.data});
        
    },

    updateRegistration: async (id, updatedRegistration) => {
        
        if (!id) {
            return { success: false, message: "ID no proporcionado" };
          }
        
        const response = await fetch(`https://inscripciones-production.up.railway.app/registration/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedRegistration),
        });
        const data = await response.json();
        if (!data.success) {
            return { success: false, message: "Error al actualizar el registro" };
        };
        set(state => ({registrations: state.registrations.map(registration => registration._id === id ? data.data : registration)}))
        return { success: true, message: "Registro actualizado con éxito" };
    },

    deleteRegistration: async (id) => {
        const response = await fetch(`https://inscripciones-i4tm.onrender.com/registration/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        if (!data.success) {
            return { success: false, message: "Error al eliminar el registro" };
        };
        set((state) => ({registrations: state.registrations.filter(registration => registration._id !== id)}))
        return { success: true, message: "Eliminado con exito" };
    }
}));