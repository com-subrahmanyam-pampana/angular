Before AngularJS, most developers relied heavily on jQuery (or plain JavaScript) to build dynamic, interactive web UIs. While jQuery simplified cross-browser DOM manipulation, it required a lot of imperative code — meaning you had to tell the browser exactly what to do and when.


Angular Js solution:

ng-repeat is like a printing machine: feed it a list and it prints out one tag/card/line per item.

It binds data directly to UI, and automatically reflects any updates to the underlying array.

In contrast to jQuery, you don’t need to manually loop or create DOM elements.


AngularJS does not re-render the entire DOM when something changes. Instead, it uses a "dirty checking" mechanism to detect changes and then updates only the parts of the DOM that are affected.

