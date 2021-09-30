import { Popup } from "./popup.js";

var modalContainer = document.getElementById("modal");

export function Modal() {
  Popup.call.this;
  this.isOverlay = null;
}

Modal.prototype = Object.create(Popup.prototype);
Modal.prototype.constructor = Modal;

Modal.prototype.show = function (header, content) {
  Popup.prototype.show.call(this, header, content);

  var overlay = document.createElement("div");
  overlay.id = "overlay";
  this.container.before(overlay);
  overlay.addEventListener("click", () => {
    this.hide.call(this);
    overlay.remove();
  });

  this.createModal(this.header, this.content);
};

Modal.prototype.getContainer = function () {
  this.container = modalContainer;
  this.isOverlay = true;
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
  closeButton.addEventListener("click", function () {
    Modal.prototype.hide();
    overlay.remove();
  });
};
Modal.prototype.hide = function () {
  Popup.prototype.hide.call(this);
  this.destroyModal();
};
Modal.prototype.destroyModal = function () {
  this.container.className = "";
  this.container.innerHTML = "";
};
