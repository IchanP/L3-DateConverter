# Reflections Clean Code

### Index

* [Chapter 2 Meaningful Names](#chapter-2-meaningful-names)
* [Chapter 3 Functions](#chapter-3-functions)
* [Chapter 4 Comments](#chapter-4-comments)
* [Chapter 5 Formatting](#chapter-5-formatting)
* [Chapter 6 Objects and Data Structures](#chapter-6-objects-and-data-structures)
* [Chapter 7 Error Handling](#chapter-7-error-handling)
* [Chapter 8 Boundaries](#chapter-8-boundaries)
* [Chapter 9 Unit Tests](#chapter-9-unit-tests)
* [Chapter 10 Classes](#chapter-10-classes)
* [Chapter 11 Systems](#chapter-11-systems)

## Chapter 2 Meaningful Names

I've tried to give all my variable names meaningful and unique names, the unique names to make them more searchable. The one place I ran into issues was in the `Transformer` classes where very similar operations are performed with only slight differences, I added some more context to the names as can be seen below however as these specific variables are not likely to be searched for specifically as in this context the algorithm itself is more likely to be of interest rather than the specific variable names, in this regard the method names are aptly named in my opinion as they clearly state the format of date which is being worked on.

Initially I did not follow the One Word Per Concept in the `Transformer` and `TemporalConverterWrapper` classes either as the methods in both classes shared the word `convert` while performing different things. Therefore one of these concepts had to be renamed and I selected the ones inside the `TemporalConverterWrapper` class for this, changing the concept word to `translate` instead.

![Good-Names](./reportimages/updated-names.png)

The updated names, the `convert` issue is also visible here in the DateConverter

![Wrapper-Method-Names](./reportimages/wrapper-method-names.png)

`Translate` method names in the `TemporalConverterWrapper` class.

## Chapter 3 Functions

I've done a reasonably good job at not mixing the abstraction levels of my functions, the essence of this rule is to keep things non-confusing and the author Robert, states that mixing them is always confusing. I have conciously violated this rule in my `convertKokiToJapaneseEra` function, seen below, where the operation to split the returned string is of medium level abstraction. It is a concious choice as I feel like the operation is simple enough and the variable names clear enough for this to not cause confusion. I believe a worse offense would have been to perform a low level operation in a high abstraction method, such as also including the following try/catch in this statement
(although this would have violated other rules aswell).

Furthermore in accordance with the rule of extracting try/catch blocks, this has been done wherever possible. While this makes the code a lot easier to understand it also makes the handling of the error substantially easier, as the error is handled closer to where it was thrown, compared to how I was previously handling them, while also keeping the number of try/catches to a minimum. This also synergizes with the rule of DRY, as the error handling and catching is now done in one place, and one place only.

I have where possible adhered to DRY but in the controllers `bigconversionpage` and `smallconversionpage` the event listeners and error handling is duplicated. I would have liked to make an abstract class and have them both inherit from that, but that would not have been possible in this scenario as they both are HTMLElements and already extend that... Therefore I settled on duplication in this case...

![mix-abstraction](./reportimages/mix-abstraction.png)

The mixing of abstraction levels in the `convertKokiToJapaneseEra` function.

![convertKokiToJapaneseEra](./reportimages/extracted-try-catch.png)

Found in [temporalconverterwrapper.js](./src/model/TemporalConverterUtils/TemporalConverterWrapper.js)

## Chapter 4 Comments

In regards to comments I made a concious choice to use the [lnu eslint standard](https://www.npmjs.com/package/@lnu/eslint-config), with no modifications. This standard enforces JSDOC for ALL non-anonymous methods. And while I did make an effort to not have redundant JSDOC comments it is quite hard when following good naming standards, I am aware that this is a clear violation of the `Mandated Comments` rule, which states that it is silly to enforce JSDOC/Javadocs for every method. The choice to use the lnu standard without modification was to illustrate that I understand the idea that the `Team Rules` rule found in Chapter 5 may and will result in messier code, and because I am simply comfortable/like the lnu standard. Howver JSDOCs do bring one good point, which is the type expected to be passed to a method, which is otherwise invisible, atleast in my IDE.

Outside of the codestandard I did not interact much with comments while working in the project. In a few JSDOC's I listed the date formats which would result in an error not being thrown, which I believe fulfils the rule about `Informative Comments`. This information I believe is hard to fulfil with only a good function name.

![informative-comment](./reportimages/informative-comment.png)

Example of an informative comment, this explanation of date formats is also found in another similar function.

## Chapter 5 Formatting

I feel like the rule/guideline mentioned in Chapter 10; `Public functions should follow the list of variables. We like to put the private utilities called by a public function right after the public function itself.` is quite difficult to implement while also keepin the rule regarding `Vertical Distance` in mind. Vertical Distance states that closely related concepts should be grouped near eachother.  This means that a choice has to be made, which I made in my `TemporalConverterWrapper` class. I have two `tryTranslate` methods which encapsulates two different calls in a try catch. In this instance I decided to put them right below the method that called each seperate `tryTranslate`. The same was done for `handle` methods I included in this class, where they are listed right below the `tryTranslate`. Meaning that in this instance I adhered to the `Class Organization` rule instead. Rather than the `Vertical Distance` rule. I have however consistently followed the `Vertical Ordering` rule where function calls flow downward.

In regards to the Chapter 10 rule mentioned above and the rule regarding `Dependant Functions` I have in my [pg222pb-dateconverter](../src/view/pg222pb-dateconverter/pg222pb-dateconverter.js) component opted to put the methods that the constructor calls, right below it, eventhough they are private methods, and this therefore breaks against the Chapter 10 rule. I opted to do this to give context to the constructor as what follows are the public methods, and later on the event handlers which are tied to elements inside the components shadow DOM. I feel like this is a sensible structure for this class. An argument could be made that the class should be broken up as it can be divided into 3 parts, however as the event listeners work on some of the elements being worked on in the constructor and the public methods I feel like this is not sensible.

![Formatting-rules](./reportimages/formatting-rules.png)

Function calls flow downward, but don't adhere to `Vertical Distance` rule in this scenario.

## Chapter 6 Objects and Data Structures

Decided to make a class for building an "a" element. I wanted to create a more general header which would build any number of "a" elements. This required me to make a data structure which held the fields required to build it. I originally considered simply making it an anonymous object, however since that would make it hard for the caller to know what to pass, as well as make error handling hard I decided to make a class out of it. The class only consists of 2 fields and they both have getters, which I suppose breaks against the "Data Abstraction" rule, which is to hide the implementation, but as the job of the class is to act as a Data Structure rather than a proper object I feel like this is acceptable. Especially as it does not have any setters.

![data-structure](./reportimages/data-structure.png)

## Chapter 7 Error Handling

As I was working I decided to refactor my code in my LinkHeader class, I broke out some validation methods into their own seperate class and decided to throw the error there rather than in the class itself. I then quickly realized that it would become a lot harder to see where the error actually occured, in accordance with the rule "Provide Context with Exceptions". I therefore decided to console.error the name of the file that the error was caught in, which worked fine in this specific scenario. However it provided far less information when used in the `SmallDateConverter` class, as the error bubbled through the application to reach there. I therefore believe that this should be used on a case-by-case basis, as the errors that bubbled through to `SmallDateConverter` were still easily traceable, but had very little to do with what was actually going on in the `SmallDateConverter` class. However this may change as the application grows...

Furthermore I opted to set any error messages inside the extended error classes I made, as these are the ones that will be rendered to the user. I did this as I felt like it would be easier to keep track of the error messages and to keep them consistent. This also makes it easier to change the error messages should the need arise.

![error-class](./reportimages/error-class.png)

Example of my custom made error class.

## Chapter 8 Boundaries

I am certain that I have missed a few points in my code where the applicability is similar but, I decided to try to take the "minimze impact of change" to heart, hence why I in my Validator class decided to wrap the "isArray" in my own API. (As this is a class that I can see myself reusing I also don't feel like it matters to much whether this particular function was reused in this project). Benefit obviously being that if the isArray function for some ungodly reason would change in the future this is the only place in the project where a change would have to occur. (I am aware that making the methods static breaks against OOP convention/rules(?) however I did not feel like it made much sense to have to declare a Validator as an object everytime I wanted to use it, this simply looks cleaner).

In vein with what I mentioned earlier I refactored my code to hold the `DateStringBuilder` object inside my `TemporalConverterWrapper` class, I thought this made sense as a change in how the `TemporalConverterWrapper` class returns its dates would require a change in logic in the `DateStringBuilder` class. Keeping it close to the `TemporalConverterWrapper` class makes it easier to see that they are related and that a change in one may require a change in the other. The third party code (my own module), is also wrapped inside the `TemporalConverterWrapper`, keeping it contained so that should any changes to the module occur that would impact this app any changes would only have to occur inside this class and the `DateStringBuilder` class.

![date-string-builder](./reportimages/date-string-builder.png)

Date string builder is held as a field in the `TemporalConverterWrapper` class.

## Chapter 9 Unit Tests

I decided to follow a TTD, where I wrote tests right before the implementation code. This worked quite well, especially for the few automatic tests I wrote, as I was refactoring my code after writing it for the first time to see that it worked. This made the refactoring process a lot easier as I could quite easily tell whether something worked or not by simply running the test. The book also pressed that the test code should follow the same standard as the production code, I did not write that many automatic tests, however, I made a concious effort to group concepts/related tests together. Example being I grouped tests that SHOULD throw next to eachother.

Something I noticed in regards to using TTD, is that my manual test cases ended up not being grouped together, but rather spread out. Meaning that test cases that dealt with, for example, whether the date format were supported for Western and Japanese style calendars ended up seperated as one was implemented before the other. While this is not code I feel like the same principle should be applied to the artifacts in some manner, however re-ordering the test cases is problematic as previous test reports would then not refer to the correct test case.

![grouped-jp-validator](./reportimages/grouped-jp-validator.png)

![grouped-linkheader](./reportimages/grouped-linkheader.png)

Conciously made an effort to group the `should throw` and `should log texts`, although the example is extremely small.

## Chapter 10 Classes

I do not believe that my PageController fulfills the SRP, as it builds and renders the Header as well as handles the rendering of the Page components. It also lacks cohesion as the page fields are only used in their specific callbacks. I decided on this structure due to the  other one I had making it difficult to achieve the "swapping" of components, and instead reloaded the entire page (i wanted it to be more like React). I am aware of this flaw but decided to keep it anyway. I would have liked to use abstractions more, by for example implementing the Observer pattern instead of sending out events to listen to, however Javascript does not support interfaces. One example is in the `SimpleDateConversionPage` where I would have liked to send it in as an Observer into the `SmallDateConverter`, instead of relying on the "convert" event that is fired inside `SmallDateConverter`. As should the event name change it would also have to change in `SimpleDataConversionPage`. Essentially, there's a hidden dependency here which could have been avoided.

My classes has, where it's applicable followed the guideline of public>private>public for methods and fields, where the public method is imemdiately followed by any private method it uses. I have previously tried to put my public functions at the top and all my private functions at the bottom. However this way of doing it makes it a lot easier to grasp the full context and details of any given function. This is also supported by the rule "Vertical Distance" found in chapter 5, which states the following: `Dependent Functions. If one function calls another, they should be vertically close, and the caller should be above the callee, if at all possible`.

I am not entirely sure how to treat methods called from the constructor, for example I have in my DateConverter class that calls several validation methods, which is placed in the constructor, should this be right below the constructor? This to me breaks the public>private>public pattern as the first method would then be a private method, therefore I simply opted to put it at the bottom. [Link to the class in question](./src/model/DateConverter.js)

![Example of the event that could have been avoided](./reportimages/convert-listen.png)

The listener that has a hidden dependency to "convert".

![Example of the event that could have been avoided](./reportimages/convert-dispatch.png)

The event being fired.

![public-private-public](./reportimages/public-private-public.png)

Example of public>private>public methods.

## Chapter 11 Systems

I struggle to relate much of what was mentioned in this chapter to my project. The main takeaway I bring from it is separation of concerns and the usefulness of abstractions. In my project I made an attempt to abstract. For example in the `TemporalConverterWrapper` the dateTransformer paramater is of the abstract class `DateTransformer`, true abstract classes are not possible in Javascript nor are interfaces which made working with abstractions as taught through the OOP courses previously incredibly difficult or flat out impossible. However this was my attempt at using `Dependency Injection` in Javascript.

![construction](./reportimages/construction.png)

Type of date transformer being conditionally constructed and passed as an argument.

![abstract-class](./reportimages/abstract-class.png)

Abstract class in question.
