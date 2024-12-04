document.getElementById('saveWorkspace').addEventListener('click', () => {
  const workspaceName = document.getElementById('workspaceName').value;
  if (workspaceName) {
    chrome.runtime.sendMessage({ action: "saveWorkspace", workspaceName: workspaceName }, () => {
      displayWorkspaces();
    });
  }
});

document.getElementById('loadWorkspace').addEventListener('click', () => {
  displayWorkspaces();
  document.getElementById('workspaces').style.display = 'block'; 
});

function displayWorkspaces() {
  chrome.storage.local.get(null, function(result) {
    const workspacesDiv = document.getElementById('workspaces');
    workspacesDiv.innerHTML = '';
    for (const workspaceName in result) {
      const workspaceItem = document.createElement('div');
      workspaceItem.className = 'workspace-item';
      workspaceItem.textContent = workspaceName;
      workspaceItem.addEventListener('dblclick', () => loadWorkspace(workspaceName));

      const optionsButton = document.createElement('button');
      optionsButton.className = 'options-button';
      optionsButton.textContent = '~_~';
      optionsButton.addEventListener('click', () => showOptions(workspaceName, optionsButton));
      workspaceItem.appendChild(optionsButton);
      workspacesDiv.appendChild(workspaceItem);
    }
  });
}

function showOptions(workspaceName, optionsButton) {
  const existingMenu = optionsButton.parentElement.querySelector('.options-menu');
  
  if (existingMenu) {
    existingMenu.remove(); 
    return;
  }

  const optionsMenu = document.createElement('div');
  optionsMenu.className = 'options-menu';

  const renameOption = document.createElement('button');
  renameOption.textContent = 'Rename';
  renameOption.addEventListener('click', () => renameWorkspace(workspaceName));
  optionsMenu.appendChild(renameOption);

  const deleteOption = document.createElement('button');
  deleteOption.textContent = 'Delete';
  deleteOption.addEventListener('click', () => deleteWorkspace(workspaceName));
  optionsMenu.appendChild(deleteOption);

  optionsButton.parentElement.appendChild(optionsMenu);
}

function renameWorkspace(oldName) {
  const newName = prompt('Enter new workspace name:', oldName);
  if (newName && newName !== oldName) {
    chrome.storage.local.get([oldName], function(result) {
      const tabs = result[oldName].tabs;
      chrome.storage.local.set({ [newName]: { tabs: tabs } });
      chrome.storage.local.remove(oldName);
      displayWorkspaces();
    });
  }
}

function deleteWorkspace(workspaceName) {
  if (confirm(`Are you sure you want to delete ${workspaceName}?`)) {
    chrome.storage.local.remove(workspaceName);
    displayWorkspaces();
  }
}

function loadWorkspace(workspaceName) {
  chrome.runtime.sendMessage({ action: "loadWorkspace", workspaceName: workspaceName });
}

displayWorkspaces();