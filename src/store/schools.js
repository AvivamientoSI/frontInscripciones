import {create} from 'zustand';

export const useSchoolsStore = create((set) => ({
    schools: [],
    
    setSchools: (schools) => set({schools}),

    fetchSchools: async () => {
        const response = await fetch('http://localhost:8080/api/schools');
        const data = await response.json();
        
        set({schools: data.data});
    }
}));