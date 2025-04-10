import { create } from "zustand";

export const useRegistrationStore = create((set) => ({
    registrations: [],
    message: "",
    setMessage: (msg) => set({ message: msg }),

    setRegistrations: (registrations) => set({ registrations }),

    createRegistration: async (newRegistration) => {
        if (!newRegistration.name || !newRegistration.lastname) {
            return { success: false, message: "Complete todos los campos" };
        }
        try {
            const res = await fetch("https://inscripciones-i4tm.onrender.com/registration", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newRegistration),
            });

            const data = await res.json();

            if (!res.ok) {
                return { success: false, message: "Ya está registrado/a" };
            }

            set((state) => ({registrations: [...state.registrations, data.data],
                message: "Registro creado con exito",
            }));
            return { success: true, message: `Registro creado con exito` };
        } catch (error) {
            return { success: false, message: "Error en el registro", error };
        }
    },

    fetchRegistrations: async () => {
        const response = await fetch('https://inscripciones-i4tm.onrender.com/registration');
        const data = await response.json();
        console.log(data);
        
        set({registrations: data.data});
        
    },

    updateRegistration: async (id, updatedRegistration) => {
        const response = await fetch(`https://inscripciones-i4tm.onrender.com/registration/${id}`, {
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
        set(state => ({registrations: state.registrations.map(registration => registration.id === id ? data.data : registration)}))
        return { success: true, message: "Registro actualizado con exito" };
    }
}));