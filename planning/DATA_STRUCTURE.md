# Data structures for project

## Exercise
```js
  const exercise = {
    _id: String, //MongoDB generated ObjectId
    name: String, //Name of the exercise
    type: String, //Exercise classification (strength, endurance, balance, flexibility)
    description: String || null, //Optional additional description
    defaultReps: Int || null, //Optional number of reps to do
    defaultTime: Int || null //Optional duration of exercise in seconds
  }
```

## History
```js
  const history = [exercise] //An array of exercises that a user has completed
```
