(function() {

var modalContainer = document.getElementById('modal');
var toastContainer = document.getElementById('toast');
var addToast = document.getElementById('add_toast')
var addModal = document.getElementById('open_modal')
var toastToRemove = document.getElementById('id')
console.log(toastToRemove)

    this.Popup = function(){

        this.isOverlay = null;
    }

    this.Popup.prototype.show = function(){
            this.isOverlay = true;

        };

    this.Popup.prototype.hide = function(){
            this.isOverlay = false;
 
        };

    this.Modal = function(header, content){
        this.header = header;
        this.content = content;
    }
    this.Modal.prototype = Object.create(this.Popup.prototype);
    this.Modal.prototype.constructor = this.Modal;
    
    this.Modal.prototype.show = function (node) {
        this.createModal(node);
        Popup.prototype.show.apply(this);
    }
    this.Modal.prototype.createModal = function (node) {
        node.innerHTML = this.header;
        node.append(' ' + this.content);
    }
    this.Modal.prototype.hide = function (node) {
        Popup.prototype.hide.apply(this);
        this.destroyModal(node);
    }
    this.Modal.prototype.destroyModal = function (node) {
        node.innerHTML = '';
    }

    //=========================

    this.Toast = function(message, type){
        this.message = message;
        this.type = type;
        this.toastId = 0;
    }

    this.Toast.prototype = Object.create(this.Popup.prototype);
    this.Toast.prototype.constructor = this.Toast;
    
    this.Toast.prototype.show = function (node) {
        this.createToast(node);
        Popup.prototype.show.apply(this);
    }
    this.Toast.prototype.createToast = function (node) {
         var id = this.toastId++;
        // this.toasts.push(id);
        var newNode = document.createElement('div');
        newNode.id = 'toast_id_' + id;
        node.append(newNode);
        newNode.append(this.message + ' - ' + this.type);
        var toastButton = document.createElement('div');
        toastButton.innerHTML = 'X';
        toastButton.className = 'delete_toast';
        toastButton.id = id;
        toastButton.addEventListener('click',
        function(e){
            toast.removeToast.call(this, e.target.id);
        })
        newNode.append(toastButton);
        setTimeout(function(){
            var idToDelete = document.getElementById('toast_id_'+ id);
            if (idToDelete) {
                idToDelete.remove();
            }
            
        }, 5000)
    }

    this.Toast.prototype.removeToast = function (id) {

        var nodeTodelete = document.getElementById('toast_id_' + id);
        nodeTodelete.remove();
    } 

    var modal = new Modal('header', 'content');
    var toast = new Toast('test toast', 'success')


    //var toast = new Toast('content', type);

    console.log(modal)
    modalContainer.addEventListener('click', function() {
        modal.hide(modalContainer);
    }
    )
    addToast.addEventListener('click', function() {
        toast.show(toastContainer);
    }
    )
    addModal.addEventListener('click', function() {
        modal.show(modalContainer);
    }

    )

    console.log(modal)

})()