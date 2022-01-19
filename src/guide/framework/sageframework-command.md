# SageCommand Class

**File:** `./packages/framework/commands.js`

## Properties

### .name
The name of the command.

Type: **`String`**

### .enabled
Whether or not the command is enabled.

Type: **`Boolean`**

### .serverSpecific
Whether or not the command is server specific.

Type: **`Boolean`**

### .serverSpecificId
The ID of the server that the command is server specific for.

Type: **`String`**

### .description
The description of the command.

Type: **`String`**

### .callback
The callback function fired when the command is executed.

Type: **`Function`**


## Methods

### .setName(<span style="color: rgba(84, 98, 255, 0.8)">name</span>)
Sets the name of the command.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | `String` | The name of the command. |

### .setEnabled(<span style="color: rgba(84, 98, 255, 0.8)">enabled</span>)
Sets whether or not the command is enabled.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| enabled | `Boolean` | Whether or not the command is enabled. |

### .setServerSpecific(<span style="color: rgba(84, 98, 255, 0.8)">serverSpecific</span>)
Sets whether or not the command is server specific.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| serverSpecific | `Boolean` | Whether or not the command is server specific. |

### .setServerSpecificId(<span style="color: rgba(84, 98, 255, 0.8)">serverSpecificId</span>)
Sets the ID of the server that the command is server specific for.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| serverSpecificId | `String` | The ID of the server that the command is server specific for. |

### .setDescription(<span style="color: rgba(84, 98, 255, 0.8)">description</span>)
Sets the description of the command.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| description | `String` | The description of the command. |

### .onExecute(<span style="color: rgba(84, 98, 255, 0.8)">callback</span>)
Sets the callback function fired when the command is executed.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| callback | `Function` | The callback function fired when the command is executed. |

### .jsonData()
Returns the JSON data of the command.

### .execute(<span style="color: rgba(84, 98, 255, 0.8)">msg</span>, <span style="color: rgba(84, 98, 255, 0.8)">args</span>)
Executes the command.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| msg | `Message` | The message that triggered the command. |
| args | `Array` | The arguments passed to the command. |