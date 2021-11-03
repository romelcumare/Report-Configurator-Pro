const dragDrop = require( 'drag-drop' );
const { ipcRenderer } = require( 'electron' );
const version = document.getElementById('version');
const notification = document.getElementById('notification');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

// local dependencies
const dom = require( './dom' );

/*****************************/

// get list of files from the `main` process
ipcRenderer.invoke( 'app:get-files' ).then( ( files = [] ) => {
    dom.displayFiles( files );
} );

// handle file delete event
ipcRenderer.on( 'app:delete-file', ( event, filename ) => {
    document.getElementById( filename ).remove();
} );

/*****************************/

// add files drop listener
dragDrop( '#uploader', ( files ) => {

    console.log ("Files Dropped")

    const _files = files.map( file => {
        return {
            name: file.name,
            path: file.path,
        };
    } );

    // // send file(s) add event to the `main` process
    // ipcRenderer.invoke( 'app:on-file-add', _files ).then( () => {
    //     ipcRenderer.invoke( 'app:get-files' ).then( ( files = [] ) => {
    //         dom.displayFiles( files );
    //     } );
    // } );
} );

// open filesystem dialog
window.openDialog = () => {
    ipcRenderer.invoke( 'app:on-fs-dialog-open' ).then( () => {
        ipcRenderer.invoke( 'app:get-files' ).then( ( files = [] ) => {
            dom.displayFiles( files );
        } );
    } );
}


// Updater

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
  ipcRenderer.removeAllListeners('app_version');
  version.innerText = 'Version ' + arg.version;
});

ipcRenderer.on('update_available', () => {
  ipcRenderer.removeAllListeners('update_available');
  message.innerText = 'A new update is available. Downloading now...';
  notification.classList.remove('hidden');
});

ipcRenderer.on('update_downloaded', () => {
  ipcRenderer.removeAllListeners('update_downloaded');
  message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
  restartButton.classList.remove('hidden');
  notification.classList.remove('hidden');
});

function closeNotification() {
  notification.classList.add('hidden');
}

function restartApp() {
  ipcRenderer.send('restart_app');
}