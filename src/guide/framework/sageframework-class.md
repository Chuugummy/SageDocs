# SageFramework Class

**File:** `./packages/framework/core.js`

The base class for the Sage Bot framework. This class is used to create a new instance of the framework module and manages other sub-modules.

## Properties

### .commands
Contains all loaded commands that are being managed by the framework.

Type: **`Array`**


## Methods

### .userHasPermission(<span style="color: rgba(84, 98, 255, 0.8)">user</span>, <span style="color: rgba(84, 98, 255, 0.8)">permission</span>)
Determines whether or not the user has the specified permission.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| user | `GuildMember` | The user to check the permission for. |
| permission | `String` | The permission to check for. |

::: warning
This method will be deprecated and replaced with ``.userHasPermissionEx()`` in the next following releases.
:::

### .registerCommand(<span style="color: rgba(84, 98, 255, 0.8)">client</span>, <span style="color: rgba(84, 98, 255, 0.8)">command</span>)
Registers a command with the bot and adds it to the command list.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| client | `Client` | The client that the command is being registered with. |
| command | `SageCommand` | The command to register. |

### .awaitFulfillment(<span style="color: rgba(84, 98, 255, 0.8)">promise</span>)
Await the fulfillment of a promise.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| promise | `Promise` | The promise to await. |