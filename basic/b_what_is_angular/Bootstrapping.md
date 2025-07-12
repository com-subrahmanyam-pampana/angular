# Bootstrapping
Bootstrapping the application in Angular refers to the process of initializing the application, starting from loading the root module and rendering the root component in the browser. 

It connects the Angular framework with the browser environment and sets the application in motion.

# Steps in Angular Bootstrapping

Load the Angular Framework:
        The Angular runtime starts and prepares the platform for the application.

Initialize the Root Module:
        The root module (usually AppModule) is loaded and configured.
        Dependencies and components declared in the root module are prepared.

Render the Root Component:
        The root component (usually AppComponent) is rendered inside the HTML element specified by its selector (e.g., <app-root>).

Application Lifecycle Begins:
        Angular starts its internal change detection mechanism to handle data bindings and user interactions.