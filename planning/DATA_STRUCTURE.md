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

## User
```js
  const user = {
    _id: String, //MongoDB generated ObjectId
    username: String, //User inputted username
    passwd: String //Hashed password for user
  }
```

## History
```js
  const history = {
    user_id: String, //User id indicates who's history it is
    date: String, //Date the exercise was performed
    exercise //The exercise object
  }
```
