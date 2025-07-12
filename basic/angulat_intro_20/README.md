

Steps in Detail:


# index.html

index.html Is the Main Entry Point like all the web applications.

"app-root" tag is a custom HTML element that serves as the entry point of your Angular application.


# All scripts are loaded to html page

When you run ng build or ng serve, Angular CLI injects something like this into index.html at runtime

<script src="main.js"></script>
<script src="polyfills.js"></script>
<script src="runtime.js"></script>


The "<app-root>" tag is just a placeholder. The scripts are injected and executed separately by Angular CLI.





# main.ts
    Application Bootstrapping:
        In main.ts, the Angular application is bootstrapped with the root module (AppModule).



import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


# bootstrapApplication method in the main.ts

bootstrapApplication(App, appConfig)

App: Your root component (like <app-root> in older Angular).

appConfig: Configuration like providers, environment setup, maybe routing.

When this line runs:

Angular initializes the framework

Applies any configuration (e.g., DI providers)

Renders your App component to the DOM

Starts watching for changes (via zone.js or Signals)



# app.ts:
There’s no official Angular rule that says you must have a file called app.ts, but in modern standalone component-based Angular apps (Angular 14+), app.ts is often used as a shortcut name for the main root component of the app.

This file typically contains a standalone Angular component

@Component: Declares this as a component

selector: 'app-root': Links this to <app-root> in index.html

standalone: true: Marks this as a standalone component (not part of an NgModule)

export class App {}: This class defines your component behavior (logic, properties, methods)



# Replacing "app-root"

   Angular removes <app-root> from the DOM(this tag is inside index.html) and inserts the rendered HTML of the AppComponent template in its place.

Before Rendering:

<app-root>Loading...</app-root>

After Rendering:

<h1>Welcome to Angular!</h1>




Can we rename <app-root> in index.html?

Yes, you can rename <app-root> to anything you want — as long as the selector in your component matches.


@Component({
  selector: 'my-main',  // 👈 custom selector
  standalone: true,
  template: `<h1>Custom Selector</h1>`
})
export class App {}



<my-main></my-main>  <!-- ✅ Works -->



# Can I rename main.ts?
Yes, technically you can — but it requires extra setup.

Why?
Angular CLI looks for src/main.ts by default when building or serving.
Update angular.json

"architect": {
  "build": {
    "options": {
      "main": "src/main.ts",   ← change this
