# Kit-Plugin
This is the base plugin class for creating custom plugins for the kit-framework.


# Install
```bash
npm i @evitcastudio/kit-plugin
```

# Creating a custom plugin

All plugins must have a `name` property as well as define the `onRegistered` event.
A plugin will fail to register if no `name` is found. 
When the `onRegistered` event is fired the plugin is ready to emit events to Kit.
Calling `this.emit` from the plugin will emit a custom event with custom data to pass along to the Kit framework.
Developers using your plugin can listen for your event and do work based on the event and data received.

```ts
import { KitPlugin } from '@evitcastudio/kit-plugin';

export class CustomPlugin extends KitPlugin {
    name = 'CustomPlugin';
    onRegistered(): void {
        this.emit({
            event: 'onRegistered',
            data: { foo: 'bar' }
        });
    }
}
```

Don't worry about instantiating your plugin, Kit will handle that for you upon registering.

# Events
You pass along data in the form of an event. An event consists of two properties: `event` for the name of the event, as well as `data` which is shaped as `Record<string, any>`. 

```js

const event = {
    event: 'EventName',
    data: {
        foo: 'bar'
    }
}

this.emit(event);
```

# Wrapup

As you can see, making a plugin for the Kit framework is easy. 
You simply wait for the `onRegistered` event and emit any events afterwards. Users of your plugin will have access to the created instance of your class, so be sure to document your plugin.
