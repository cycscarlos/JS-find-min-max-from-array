<h2>How to find the min/max from array into the arrays using Javascript</h2>

<br>

---

<br>

![Website banner!](./assets/img/readme.jpg)

<br>

Take a look at the website at the following link [Github Pages] (https://cycscarlos.github.io/JS-find-min-max-from-array):

<br>

---

<br>

<h3>Its include the following:</h3>

<br>

Let's say we have an array of users, but each user is also an array.

For the example, we'll use the following data.

const users = [
['Nicole', 31],
['Chris', 33],
['Yaatree', 2],
['Sanne', 29],
];

As you can see, each user array holds two objects:

The user's name
The user's age
How can we quickly return the user with the highest age and the user with the lowest age?

Let's find out together.

Finding the highest value from an array of arrays permalink

First, we need to find a way to extract the data, and I thought the reduce method would be a great one for that.

The trick to using this method is to not pass the initial value. This way, we can only start counting from the actual array of items.

const highest = users.reduce((previous, current) => {
return current[1] > previous[1] ? current : previous;
});

console.log(highest);
// [ 'Chris', 33 ]
Let's see how this works.

As a reminder, the reduce function loop over each array item takes two arguments.

previous: The previous accumulated value
current: The current looped item
We then check if the current item property 1 (meaning the age) is bigger than the current one. If that is the case, we return the current item as it's higher. Else, we return whatever was in the previous value.

In our loop, it works like this:

current = Nicole nothing exists, so Nicole becomes the highest
current = Chris, Chris's age is higher than Nicole's, so Chris will become the returned value
current = Yaatree, Chris is higher, so keep returning Chris as the highest
current = Sanne, Chris is still higher, so keep Chris
We are ending in Chris being the highest value.

Finding the lowest value from an array of arrayspermalink
But what if we now take the same approach but want to find a lower age.

We can use the same reduce but swap the arrow.

const lowest = users.reduce((previous, current) => {
return current[1] < previous[1] ? current : previous;
});

console.log(lowest);
// [ 'Yaatree', 2 ]
Note that we switched the > to a <.

Again to explain it more verbally, this is the flow of action:

current = Nicole, nothing exists, so Nicole becomes the lowest
current = Chris, Nicole is lower, so keep returning Nicole as the lowest
current = Yaatree, Yaatree is lower so return Yaatree
current = Sanne, Yaatree is lower so return Yaatree
The result is that we return Yaatree as the lowest.

Optimising the reduce methodpermalink
I've decided to write the reduce function to make it easier for you to read.

However, this is unnecessary, and we can use the shorthand function.

const highest = users.reduce((prev, cur) => (cur[1] > prev[1] ? cur : prev));

const lowest = users.reduce((prev, cur) => (cur[1] < prev[1] ? cur : prev));

This might be a bit harder to read, but we remove the wrapping curly braces, which omit the use of a return statement as they return directly.

Dealing with an empty array permalink

But what happens if our array is empty?

We will get the following error: TypeError: Reduce of empty array with no initial value.

That is because we didn't provide an initial value to the reduce method. We can add an empty null value which would be our fallback.

For the reduce to work, we also need to evaluate starting with the previous value; this way, the other return is always the current.

const users = [];

const highest = users.reduce((previous, current) => {
return previous?.[1] > current[1] ? previous : current;
}, null);

console.log(highest);
// null
