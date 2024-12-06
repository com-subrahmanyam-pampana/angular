Property Binding is a one-way binding that allows you to set the property of an HTML element from the component's state (variable). In property binding, data flows from the component to the view (DOM).

    One-way binding: The component state (variable) is reflected in the DOM, but any changes made in the DOM do not affect the component's state.

Syntax:

<!-- Property binding syntax -->
<input [value]="myValue">

How It Works:

    myValue is a variable in the component.
    The value of myValue is bound to the value property of the <input> element.
    If myValue changes in the component, it will automatically reflect in the DOM.

However, if the user changes the input in the DOM, the value of myValue in the component is not updated.
Example:

@Component({
  selector: 'app-property-binding',
  template: `<input [value]="myValue">`,
})
export class PropertyBindingComponent {
  myValue = 'Hello, Angular!';
}

If you change the myValue variable in the component, the input field will update accordingly, but the input field does not change the value of myValue in the component when the user edits it.