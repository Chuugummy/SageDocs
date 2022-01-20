# SageEvents Class

**File:** `./packages/framework/events.js`

## Properties

### .events
Contains all the events that can be emitted and listened to.

Type: **`Array`**


## Events

### notificationDispatched
Fired when a notification is dispatched (webhook fired).

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| notification | `Object` | The notification that was dispatched. |

### notificationError
Fired when an error occurs while dispatching a notification.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| error | `Error` | The error that occurred. |

### commandRegistered
Fired when a command is registered.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| command | `SageCommand` | The command that was registered. |

### commandExecuted
Fired when a command is executed.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| command | `SageCommand` | The command that was executed. |

### commandError
Fired when an error occurs while executing a command.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| command | `SageCommand` | The command that was executed. |


## Methods

### getEvents
Returns all the events that can be emitted and listened to.

### .emit(<span style="color: rgba(84, 98, 255, 0.8)">eventName</span>, <span style="color: rgba(84, 98, 255, 0.8)">...args</span>)
Emits an event.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| eventName | `String` | The event to emit. |
| args | `Object` | The data to emit. |

### .on(<span style="color: rgba(84, 98, 255, 0.8)">eventName</span>, <span style="color: rgba(84, 98, 255, 0.8)">callback</span>)
Adds a listener to an event.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| eventName | `String` | The event to listen to. |
| callback | `Function` | The callback function to call when the event is emitted. |