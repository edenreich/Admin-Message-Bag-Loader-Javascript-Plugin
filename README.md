# Admin-Message-Bag-Loader-Javascript-Plugin
For the admin panel, a messagebag, no jQuery needed.

##How To Use
just embed this js file in your project, and then when you want to run it type:
```javascript
AdminPanelLoader.start();
```

normally you would start the loader before the ajax request is sent.

now, during the processing you may make your logic and collect either errors or success messages like so:
```javascript
AdminPanelLoader.addSuccessMessage('This is my custom success message');
AdminPanelLoader.addErrorMessage('This is my custom error message');
```

then once the ajax request is done you want to list all the messages you collected to the user like so:
```javascript
AdminPanelLoader.listMessages();
```

and of course dont forget to stop the loader before you display the messages like that:
```javascript
AdminPanelLoader.stop();
```

you may also empty the collected messages like so:
```javascript
AdminPanelLoader.emptyMessages();
```

