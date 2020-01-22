## middleware

middleware comes into play when the action is about to get dispatched to reducer

it can stop the action before going to reducer

### redux thunk
it allows action creator to return the function. 
* Function is executed as soon as the it is returned   
* 

### action creator 
is an plain function that returns an action object.


### reducers
* take initial state & action & returns a new state.
* don't & shouldn't mutate the initial state.
* are pure function i.e they follow the principle of mathematical induction
* 

### store
* is an immutable object tree in the redux.
* can only modified through reducers
* has 4 methods
  * getState()
  * dispatch(action)
  * subscribe(listener)
  * replaceReducer(nextReducer)



### composability
is as system design principle that deals with inter-relationships of components.
 A highly composable system provides components that can be selected & assembled in various combinations to satisfy user requirements

### React Virtual DOM
* has diffing algorithm it finds differences between the two trees.
* maps the differences in the model to the in memory copy of DOM, the algorithm finds the min num of operations 
to update the real dom. 
