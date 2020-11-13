import {displayGoals} from './index.js';

export async function fetchGoals() {
    const FETCH_GOALS_URL = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true'; 
    try {
        const response = await fetch (FETCH_GOALS_URL);
        const data = await response.json();
        console.log(data);
        displayGoals(data);
    } catch(error){
        console.log('ERROR: ' + error);
    }
}