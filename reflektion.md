# FUTURE REFLECTION

## Chapter 6

Decided to make a class for building an "a" element. I wanted to create a more general header which would build any number of "a" elements. This required me to make a data structure which held the fields required to build it. I originally considered simply making it an anonymous object, however since that would make it hard for the caller to know what to pass, as well as make error handling hard I decided to make a class out of it. The class only consists of 2 fields and they both have getters, which I suppose breaks against the "Data Abstraction" rule, which is to hide the implementation, but as the job of the class is to act as a Data Structure rather than a proper object I feel like this is acceptable. Especially as it does not have any setters.

// TODO IMAGES!!!

## Chapter 7

As I was working I decided to refactor my code in my LinkHeader class, I broke out some validation methods into their own seperate class and decided to throw the error there rather than in the class itself. I then quickly realized that it would become a lot harder to see where the error actually occured, in accordance with the rule "Provide Context with Exceptions". I already had a "handleError" method in this class. (For context the errors thrown in this class are only relevant to the developer). At this point I realized that an end user may not want or need this problem rendered in the UI and simply removed the #handleError function and opted to simply console.error() the error for testing in my try catch with the addition of the filename and the method that the try catch is located in.

![Pre-refactoring](./reportimages/previous-error-method.png)
How the handleError method looked before refactoring.

![Pre-refactoring](./reportimages/errorhandling-in-header.png)
How the validation occured before the refactoring

Provide Context with Exceptions
Each exception that you throw should provide enough context to determine the source and
location of an error. In Java, you can get a stack trace from any exception; however, a stack
trace can’t tell you the intent of the operation that failed.
Create informative error messages and pass them along with your exceptions. Mention the operation that failed and the type of failure. If you are logging in your application,
pass along enough information to be able to log the error in your catch

## Chapter 9

Following test driven development cycle by writing my tests right before implementation.
I did make it easier for myself, for example in the header test I did not test whether the error message was actually rendered, as I would have had to spend a lot of time reading documentation for Jest to achieve this... which is not ideal. I instead made it easier for myself by testing whether the console.error occured. I decided to mainly rely on the automatic test to make sure that everything works as expected, while the automatic tests are for testing things hard to test as a user. (Error handling as in previous example).

// TODO update as ur not supposed to render this specific message

## Chapter 10

The private methods in link.header.js are listed in the order that they are called from top-down. This kind of adheres to the public>private rule talked about in this chapter.
I do not believe that my PageController fulfills the SRP, as it builds and renders the header as well as handles the rendering of the Page components. It also lacks cohesion as the page fields are only used in their specific callbacks. I decided on this structure due to other one I had making it difficult to achieve the "swapping" of components, and instead reloaded the entire page (i wanted it to be more like React). I am aware of this flaw but decided to keep it anyway.
