

Two-Way Binding is a bi-directional binding that keeps the component’s state in sync with the DOM. Any changes to the state in the component are reflected in the view (DOM), and any changes made in the view are immediately updated in the component’s state.

    Two-way binding: The component’s state (variable) and the DOM are synchronized. This means both the component and the view are kept in sync automatically.

Syntax:

<!-- Two-way binding syntax using ngModel -->
<input [(ngModel)]="myValue">

How It Works:

    [(ngModel)] binds the myValue property in the component to the value property of the <input> element.
    Changes to myValue in the component automatically update the DOM, and if the user changes the input value, myValue is automatically updated in the component.

Example:

@Component({
  selector: 'app-two-way-binding',
  template: `<input [(ngModel)]="myValue">`,
})
export class TwoWayBindingComponent {
  myValue = 'Hello, Angular!';
}

Here, if the user types into the input field, the myValue variable will update in the component. If myValue changes in the component, the DOM will reflect the updated value in the input field.