# SagePlugin Class

**File:** `./packages/framework/plugins.js`

## Properties

### .name
The name of the plugin.

Type: **`String`**

### .version
The version of the plugin.

Type: **`String`**

### .author
The author of the plugin.

Type: **`String`**

### .description
The description of the plugin.

Type: **`String`**

### .license
The license of the plugin.

Type: **`String`**


## Methods

### .onLoad(<span style="color: rgba(84, 98, 255, 0.8)">callback</span>)
Called when the plugin is loaded. Contains the plugin code.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| callback | `Function` | The callback to execute. |

### .load()
Loads the plugin.

### .registerCommand(<span style="color: rgba(84, 98, 255, 0.8)">command</span>)
Registers a command with the bot and the plugin.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| command | `SageCommand` | The command to register. |

### .registerCommands(<span style="color: rgba(84, 98, 255, 0.8)">commands</span>)
Registers multiple commands with the bot and the plugin.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| commands | `SageCommand[]` | The commands to register. |