import { Popup } from "./popup.js";

export function Modal() {
  this.header = null;
  this.content = null;
  Popup.call(this);
}

Modal.prototype = Object.create(Popup.prototype);
Modal.prototype.constructor = Modal;

Modal.prototype.show = function (header, content) {
  Popup.prototype.show.call(this, this);
  this.header = header;
  this.content = content;
  this.createModal(this.header, this.content);
  if (this.isOverlay) {
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    this.container.before(overlay);
    overlay.addEventListener("click", () => {
      Modal.prototype.hide.call(this);
      overlay.remove();
    });
  }
};

Modal.prototype.createModal = function (header, content) {
  var headerWrapper = document.createElement("h2");
  headerWrapper.className = "modal_header";
  headerWrapper.innerHTML = header;
  this.container.className = "open";
  this.container.append(headerWrapper);
  var contentWrapper = document.createElement("div");
  contentWrapper.className = "modal_content";
  contentWrapper.innerHTML = content;
  this.container.append(contentWrapper);
  var closeButton = document.createElement("button");
  closeButton.id = "close_modal";
  closeButton.innerText = "close";
  this.container.append(closeButton);
  closeButton.addEventListener("click", () => {
    Modal.prototype.hide.call(this);
  });
};
Modal.prototype.hide = function () {
  Popup.prototype.hide.call(this, this);
  Modal.prototype.destroyModal.call(this);
};
Modal.prototype.destroyModal = function () {
  this.container.className = "";
  this.container.innerHTML = "";
};
