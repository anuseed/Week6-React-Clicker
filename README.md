🎯 What requirements did you achieve?

- I was able to implement the useState hook for both my flowers per second count and flower count elements. I used the workshops we did during the week to help with this. Initially I had each of the states seperately in each of the components with the functions but realized in order to use variables in the one and the other the states and functions relating to both needed to be in the App component. I then had to use props in the child components, the trickiest was the onClick prop for the shop upgrades buy button as the handleClick was in the parent App component.
- I used useEffect to run the timer and used the workshops during the week and the walking skeleton to help with this. Interestingly once I had added the flowersPerSecondCount to the useEffect setFlowerCount function it immediately suggested I add it to the [] as Manny reminded us in the walking skeleton.
- I used componets to render the main DOM elements and to passed props from the parent componet; App.
- I used setInterval in my useEffect to add to the flowerCount every second using the value of the flowersPerSecond.
- I used the map() function to render my Flower Upgrades from a json file I created. This was almost exactly the same as in the workshop so wasn't too difficult.
- I used the js logic from my week 3 cookie clicke to manage the purchase and application of upgrade items in the game.

🎯 Were there any requirements or goals that you were unable to achieve?

- I had possibly wanted to try the stretch goal of saving to local storage but decided since I was able to achieve the mvp a lot quicker this time I would rather use my extra time in styling the app. This is usually something I end up not having time for but enjoy a lot.

🎯 If so, what was it that you found difficult about these tasks?

- What I had to wrap my head around the most was using props and passing these down to the components.
- Other aspects where remembering that I could still use the same js syntax above the return!
- Using images and fonts was also a bit trickier in React but with a lot of googling and reading the error logs I was able to figure it out.
