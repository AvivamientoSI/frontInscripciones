import {create} from 'zustand';

export const useSchoolsStore = create((set) => ({
    schools: [],
    
    setSchools: (schools) => set({schools}),

    fetchSchools: async () => {
        const response = await fetch('https://inscripciones-production.up.railway.app/api/schools');
        const data = await response.json();
        
        set({schools: data.data});
    }
}));
