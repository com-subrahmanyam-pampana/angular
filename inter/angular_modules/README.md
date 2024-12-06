# Modules depreciated
From Angular v17 onwards, Standalone is now the new default for the CLI.
So when you create a new project, you won't have any modules in it if you don't specify anything.
However, it is still possible to create a module-based app by using the --no-standalone flag : ng new --no-standalone
Standalone components are a feature introduced in v14. With the change in v17, the Angular team strongly recommends to use them as they are easier to use, understand and are require less boilerplate.
