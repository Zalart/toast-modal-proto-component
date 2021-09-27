import { Popup } from './popup.js';

export function Toast (message, type){
    this.message = message;
    this.type = type;
    this.toastId = 0;
}

Toast.prototype = Object.create(Popup.prototype);
Toast.prototype.constructor = Toast;

Toast.prototype.show =  function () {
    Popup.prototype.show.call(this, this);
    this.createToast(this.message, this.type);
}

Toast.prototype.createToast = function (message, type) {
    var id = this.toastId++;
    var newNode = document.createElement('div');
    newNode.id = 'toast_id_' + id;
    this.container.append(newNode);
    newNode.append(message + ' - ' + type);
    var toastButton = document.createElement('div');
    toastButton.innerHTML = 'X';
    toastButton.className = 'delete_toast';
    toastButton.id = id;
    toastButton.addEventListener('click',
    function(e){
        Toast.prototype.removeToast.call(this, e.target.id);
    })
    newNode.append(toastButton);
    setTimeout(function(){
        var idToDelete = document.getElementById('toast_id_'+ id);
        if (idToDelete) {
            idToDelete.remove();
        }
        
    }, 5000)
}

Toast.prototype.removeToast = function (id) {
    var nodeTodelete = document.getElementById('toast_id_' + id);
    nodeTodelete.remove();
} 