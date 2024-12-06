

Steps in Detail

    Application Bootstrapping:
        In main.ts, the Angular application is bootstrapped with the root module (AppModule).

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

Locating the Root Component:

    Angular looks for the bootstrap property in the AppModule:

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent], // Specifies the root component
})
export class AppModule {}

    The AppComponent is identified as the root component, and its selector: 'app-root' tells Angular where to render it.

Replacing <app-root>:

    Angular removes <app-root> from the DOM and inserts the rendered HTML of the AppComponent template in its place.

Before Rendering:

<app-root>Loading...</app-root>

After Rendering:

<h1>Welcome to Angular!</h1>