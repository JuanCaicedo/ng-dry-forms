# Title
_In this post I talk about how to create reusable directives in Angular.js parameterizing their differences into attributes_

#####Introduction
It's a well established principle in programming that duplicating code should be avoided. One of the great advantages of Angular.js is that it allows you to reduce duplicate html by defining new reusable tags that contain all the html you wish to use. These reusable tags are known as directives. Using them allows you to make html files much more readable and makes them much easier to edit.

Doing this is straight-forward for html that is identical everywhere it is used. However, reducing duplicate code is most effective when you can consolidate similar code dispite small differences. In functions this can be done by pushing the differences into parameters, so that the similarities are apparent and the code takes care of handling any differences.

Angular allows you to pass HTML The same strategy can be applied to Angular directives by utilizing attributes as parameters. 

#####Example Project
[Here](https://github.com/JuanCaicedo/ng-dry-forms/tree/before) is a project I made with some duplicated code in it. The two pages each have a form for dealing with an item. The two are not exactly the same


However, there are a few challenges with simply moving all the duplicated code into a directive. They are:
1. The forms need to be handled differently once submitted
2. Both forms have different titles and different submit buttons
3. The item list in createItem.html does not need

#####Step 1 - Create a directive for the forms
Because both forms are so similar, it is possible to consolidate them into a single directive. Their differences can be extracted into a bit of configuration around the directive. There are two ways two good ways to pass information into a directive, using `ng-transclude`, or using an attribute on the directive tag. 

`ng-transclude` works well for full HTML elements, like the title. These can be interpreteded and understood outside the logic of the directive, so I think it makes sense to define them on the main page. The catch with this approach is that, without extra libraries, you can only transclude elements into a single place in the directive html.

The other option is to pass data into the directive using HTML attributes. The way to do this is to define a linking function inside the directive that interprets the parses the attributes and places them in the scope. This is then available to the directive's controller and can be rendered on the page.

For the differing behaviors when submitting the form, it doesn't sense to define this on the outside. The actual submitting behaviors are closely tied to the form data, so it makes sense to definte all possible behaviors inside the directive controller and choose which one to use with an attribute. I like to do this with an object that has all submitting functions as properties, so that you can select them with a simple string value like "post", which you pass in as an attribute.


#####Step 2 - Isolate the data into a DTO service
The hard part after extracting all the duplicated HTML directives is sharing data between their controllers. This is simpler if one controller is embedded in another, but in our case the two directives know nothing about each other.

Services give us a good way to establish a Data Transfer Object between controllers. Because a service is a singleton, you can define a variable inside of it, with whatever accessor and mutator methods you need, and then access is from another controller. As a general principle, I think it's good to have a directive reference only their own DTO service, while page controllers can reference multiple ones. This preserves the encapsulation of a directive, making them more reusable. 

#####Step 3 - Add event handling to keep controllers in sync


