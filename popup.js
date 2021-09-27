(function() {

    var modalContainer = document.getElementById('modal');
    var toastContainer = document.getElementById('toast');
    
    var addToast = document.getElementById('add_toast')
    var addModal = document.getElementById('open_modal')
    var toastToRemove = document.getElementById('id')

    
        function Popup (){
    
            this.isOverlay = true;
            this.closeBUtton = null;
            this.modal = null;
            this.container = null;
        }
        Popup.prototype.show = function(obj){
            if (obj instanceof Modal) {
                this.isOverlay = true;
                this.container = modalContainer;
            }
            };
        Popup.prototype.hide = function(obj){
            if (obj instanceof Modal) {
                if (this.isOverlay) {
                    overlay.remove();
                    }
                this.isOverlay = false;
                this.container = modalContainer;
            }
            };


            //================================
        function Modal (header, content){
                this.header = header;
                this.content = content;
            }
            Modal.prototype = Object.create(Popup.prototype);
            Modal.prototype.constructor = Modal;
            
            Modal.prototype.show = function () {
                Popup.prototype.show.call(this, this);
                this.createModal(this.header, this.content);
                if(this.isOverlay) {
                var overlay = document.createElement('div');
                overlay.id = 'overlay'
                this.container.before(overlay);
                overlay.addEventListener('click', function(){
                    modal.hide();
                    overlay.remove();
                })
                }
            }

            Modal.prototype.createModal = function (header, content) {
                this.container.className = 'open'
                this.container.innerHTML = header;
                this.container.append(' ' + content);
                var closeButton = document.createElement('button');
                closeButton.id = 'close_modal';
                closeButton.innerText = 'close';
                this.container.append(closeButton);
                closeButton.addEventListener('click', function() {
                modal.hide();
                })
            }
            Modal.prototype.hide = function () {
                Popup.prototype.hide.call(this, this);
                this.destroyModal();
                console.log(modal)
            }
            Modal.prototype.destroyModal = function () {
                this.container.className = ''
                this.container.innerHTML = '';
            }
        
            function Toast (message, type){
            this.message = message;
            this.type = type;
            this.toastId = 0;
        }
        
        Toast.prototype = Object.create(Popup.prototype);
        Toast.prototype.constructor = Toast;
        
        Toast.prototype.show = function (node) {
            this.createToast(node);
            Popup.prototype.show.apply(this);
        }
        Toast.prototype.createToast = function (node) {
             var id = this.toastId++;
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
                
            }, 20000)
        }
        
        Toast.prototype.removeToast = function (id) {
        
            var nodeTodelete = document.getElementById('toast_id_' + id);
            nodeTodelete.remove();
        } 
        


        var popup = new Popup()
        var modal = new Modal('header', 'content');
        var toast = new Toast('test toast', 'success');
        console.log(modal)
    
    

        // modalContainer.addEventListener('click', function() {
        //     modal.hide(modalContainer);
        // }
        // )
        addToast.addEventListener('click', function() {
            toast.show(toastContainer);
        }
        )
        addModal.addEventListener('click', function() {
            modal.show();
        }
    
        )
    
        console.log(modal)
    
    })()


