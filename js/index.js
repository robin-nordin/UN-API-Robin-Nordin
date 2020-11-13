import {fetchGoals} from './fetchgoalmodule.js';
import {showGoalInfo} from './showgoalmodule.js'

fetchGoals();
displayGoals();
export function displayGoals(listOfGoals) {
    const goalWrapper = document.querySelector('#goal-list');
    goalWrapper.innerHTML = ''; //gives section an empty value
    for (let goal of listOfGoals) {
        console.log('Goal: ', goal.title);
        const goalElement = document.createElement('h3');
        goalElement.innerHTML = goal.title;
        goalWrapper.append(goalElement);
        goalElement.addEventListener('click', function() {
            console.log('Goal clicked: ', goal.title);
            showGoalInfo(goal.targets);
        })
    }
}


