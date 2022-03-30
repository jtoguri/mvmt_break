// Creating example data for testing
// Data will be stored in database for fully functioning application

let exercises = [];
class Exercise {
  constructor(name, exerciseType, duration, repCount, operation) {
    this.name = name;
    this.exerciseType = exerciseType;
    this.duration = duration;
    this.repCount = repCount
    this.operation = operation
  }
}

const pushups = new Exercise('pushups', 'strength', null, 10, 'bilateral');
exercises.push(pushups);

const pullups = new Exercise('pullups', 'strength', null, 8, 'bilateral');
exercises.push(pullups);

const seiza = new Exercise('seiza', 'flexibility', 2, null, 'bilateral');
exercises.push(seiza);

const tibRaises = new Exercise('wall tibialis raises', 'strength', null, 25, 'bilateral');
exercises.push(tibRaises);

const plantar = new Exercise('plantar stretch', 'flexibility', 2, null, 'bilateral');
exercises.push(plantar);

const tibs = new Exercise('tibialis stretch', 'flexibility', 3, null, 'bilateral');
exercises.push(tibs);

const ankleEversion = new Exercise('standing ankle eversion', 'flexibility', 1, null, 'unitlateral');
exercises.push(ankleEversion);

const standCalfStraight = new Exercise('standing calf stretch, straight leg', 'flexibility', 1.5, null, 'unilateral');
exercises.push(standCalfStraight);

const standCalfBent = new Exercise('standing calf stretch, bent leg', 'flexibility', 1.5, null, 'unilateral');
exercises.push(standCalfBent);

const neckRotation = new Exercise('neck rotations', 'idk what type this is', null, 15, null);
exercises.push(neckRotation);

module.exports = {
  exercises
}

// console.log(exercises);
// console.log(exercises.length);