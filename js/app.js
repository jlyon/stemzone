/* **************** FILES/PHONEGAP support ******************* */

/*function onDeviceReady() {
  alert('ready');
   window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
   window.resolveLocalFileSystemURI("/sdcard/example.txt", onResolveSuccess, fail);
   var isApp = 'yes';
   var root = this;
   cb = window.plugins.childBrowser;
   call();
}*/

function onFileSystemSuccess(fileSystem) {
   console.log(fileSystem.name);
}

function onResolveSuccess(fileEntry) {
   console.log(fileEntry.name);
}

function fail(evt) {
   console.log(evt.target.error.code);
}


function call(){
   window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, successDirectoryReader, null);

}
function successDirectoryReader(fileSystem){
  try {
    var dirEntry = fileSystem.root;
    var directoryReader = dirEntry.createReader();
    directoryReader.readEntries(success,failure);
  } catch (e) {
    alert(e);
  }
}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        alert('ready1');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};