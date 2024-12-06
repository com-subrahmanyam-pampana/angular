Angular uses data binding to manage the state and automatically update the DOM when the state changes. There are several types of data binding in Angular:
1. Interpolation (Property Binding)

    Interpolation ({{ }}) binds a component's state to the DOM.
    It allows the DOM to automatically update whenever the state changes in the component.

Example:

<h1>{{ message }}</h1>

    When the message property in the component changes (via a method or event), Angular updates the DOM content accordingly.

2. Event Binding

    Event binding ((event)) allows you to trigger state changes based on user interactions (like clicking a button).
    For example, clicking a button could update a component's state, and the DOM will reflect that change.

Example:

<button (click)="changeMessage()">Change Message</button>

    Here, the changeMessage() method updates the state (message), and Angular will automatically update the DOM to reflect the new value.

3. Two-Way Binding (ngModel)

    Two-way binding ([(ngModel)]) allows for automatic synchronization of data between the component's state and the DOM.

Example:

<input [(ngModel)]="message" />

    When the user types in the input field, the message state will be updated. Similarly, if the message property is updated in the component, the input field will reflect the new value.


Change Detection in Angular

Angular’s change detection mechanism automatically checks for changes in the component’s state and updates the DOM accordingly. This happens whenever:

    An event occurs (e.g., user input, button click).
    An observable emits a new value (e.g., an HTTP request).
    The component's state is manually updated (e.g., via this.message = 'new state').

Angular uses a dirty checking mechanism to check whether the component's model (state) has changed and, if so, it updates the DOM to reflect the changes.