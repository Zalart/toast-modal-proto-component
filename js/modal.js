import {Popup} from './popup.js';

export function Modal (header, content){
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
    console.log('container', this.container)
    overlay.addEventListener('click', () => {
        Modal.prototype.hide.call(this);
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
    closeButton.addEventListener('click', () => {
    Modal.prototype.hide.call(this);
    })
}
Modal.prototype.hide = function () {
    Popup.prototype.hide.call(this, this);
    Modal.prototype.destroyModal.call(this);
}
Modal.prototype.destroyModal = function () {
    this.container.className = '';
    this.container.innerHTML = '';
}