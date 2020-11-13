export function showGoalInfo(targets) {
    //clear previous info
    const targetWrapper = document.querySelector('#target-list');
    targetWrapper.innerHTML = '';
    for (let target of targets) {
        const goalTargets = document.createElement('p');
        goalTargets.innerHTML = target.code + ' : ' + target.title;
        targetWrapper.append(goalTargets);
    }
}