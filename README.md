# AstroIshu WorkFlow Manager

#### *~Manage multiple workspaces for streamlined work flow~*

##### Made for Firefox based browsers like Zen.
#### Can work with Chromium based browser too.

## Features
- **Save Workspaces**: Save the current state of all open tabs.
- **Load Workspaces**: Load previously saved workspaces.
- **Rename Workspaces**: Rename existing workspaces.
- **Delete Workspaces**: Delete unwanted workspaces.
- **Options Menu**: Each workspace has an options menu for renaming and deleting.
- **Double-Click to Load**: Double-click a workspace to load it.

## How to Use the Extension
1. **Install the Extension**:
   - Open Firefox and go to ```about:debugging``` .
   - Click on **"This Firefox/Zen"** in the sidebar.
   - Click on **"Load Temporary Add-on"** and select the  ```manifest.json``` file from your extension directory.
   - The extension should now be loaded. Click on the extension icon in the toolbar to open the popup.

2. **Save a Workspace**:
   - Open the extension popup.
   - Enter a name for the workspace in the **"Workspace Name"** field.
   - Click the **"Save"** button to save the current state of all open tabs.

3. **Load a Workspace**:
   - Click the **"Load"** button in the extension popup.
   - A list of previously saved workspaces will appear.
   - _Double-click_ a workspace to load it.

4. **Manage Workspaces**:
   - Each workspace in the list has an options menu.
   - Click the button to open the options menu.
   - Choose *"Rename"* to _rename_ the workspace or *"Delete"* to _delete_ it.

## Files and Their Uses
- **manifest.json**: Contains metadata and configuration for the Chrome extension.
- **background.js**: Handles the background logic for saving and loading workspaces.
- **popup.html**: Defines the structure of the extension's popup window.
- **popup.js**: Handles the logic for the popup, including saving, loading, renaming, and deleting workspaces.
- **styles.css**: Contains the styles for the extension's popup window.

## Contributing
Feel free to contribute to this project by submitting pull requests or reporting issues.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

<!-- Made by AstroIshu -->
