import {Modal} from './modal.js'
import {Popup} from './popup.js'
import {Toast} from './toast.js'
(function() {
    var addToast = document.getElementById('add_toast');
    var addModal = document.getElementById('open_modal');
    var inputHeader;
    var inputContent;
    var toast;
    var modal;
    var randomType = function  () { return Math.floor(Math.random() * (4-1+1) + 1)};


        addToast.addEventListener('click', function() {
            inputHeader = document.getElementById('input_header').value;
            toast = new Toast(inputHeader, randomType());
            toast.show();

        }
        )
        addModal.addEventListener('click', function() {
            
            inputHeader = document.getElementById('input_header').value;
            inputContent = document.getElementById('input_content').value;
            modal = new Modal(inputHeader, inputContent);
            modal.show();
        }
        )
    }(Popup, Modal, Toast))


