

# root module:
1.In Angular, the root module is the main module of your application, typically named AppModule.(You can name what ever name you want) 

2.It serves as the entry point for bootstrapping the application. 

3.All Angular applications must have at least one module, and the root module ties together components, directives, pipes, and other modules used in the application.

4.In Angular,apart from the root module , you can have as many modules as you need, depending on the size and complexity of your application. These additional modules are often referred to as feature modules, and they help organize and modularize your application into logical sections.


# Types of Angular Modules

    Root Module:
        Every Angular application must have one root module (usually named AppModule).
        This is the entry point for bootstrapping the application.

    Feature Modules:
        Designed to organize the app into functional sections or features.
        Example: UserModule, AdminModule, ProductModule.

    Shared Modules:
        Contain reusable components, directives, and pipes that can be shared across multiple feature modules.
        Example: SharedModule with common UI components (like buttons, cards).

    Core Module:
        Contains services or components that are used globally throughout the app, such as singleton services.
        Typically includes services like AuthService, LoggerService.

    Lazy-Loaded Modules:
        Loaded dynamically when the user navigates to a specific route to reduce the initial load time of the app.
        Example: A ReportsModule that loads only when a user visits the reports section.

    Third-Party Modules:
        Angular allows importing third-party libraries or modules such as FormsModule, HttpClientModule, or third-party UI libraries like Angular Material.

# How to write an module:
The @NgModule() decorator makes a class an Angular module by attaching metadata to it. 
This metadata defines:
The components, directives, and pipes that belong to the module.
The external modules it imports.
The components it bootstraps (if any).

    // Define the root module
    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule],
      bootstrap: [AppComponent],
    })
    class AppModule {}
(i).The declarations array is used to register components, directives, and pipes that belong to this module.
bootstrap

(ii).The bootstrap array specifies the root component(s) that Angular should render when the application starts.
Used only in the root module (AppModule in most cases).
    Defines the starting point of the application.
    Typically includes just one component, like AppComponent.

(iii).imports
 imports the required modules like BrowserModule.
