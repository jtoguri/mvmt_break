# Application planning

* initial idea was to essentially have something that can quickly generate an activity or exercise for a user to do on a work break, designed for ppl wfh who want to enforce these breaks with minimal outside distraction

* start with command line node js application that random generates an exercise/stretch/isometric/movement (need to come up with generic name here) with either rep count or duration

* build a database of exercises, start with just js objects until the correct structure is found

* some ideas to start with structure could be:
  * type of movement (stretch, isometric, negatives, dynamic, etc.)
  * rep_count
  * duration
  * targetted body part/muscle
  * equipment needed
  * level? like beginner to advanced - this could also be difficulty

* implement some type of system to keep track of whats been done and incrementally build on reps/duration they can be designed as a goal then user inputs the actual

* eventually move in from command line application to web application, then potential android/ios

* design database to be self populating

* potentially add in functionality:
  * user has certain exercises they want to do everyday? this could be part of the bushido application (not yet started) though
  * allow users to add in their own exercises

Current next step:
* set up project repo
* start compiling exercises (5 per day) start with ones i want to do everyday