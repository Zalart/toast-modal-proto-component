import { Popup } from "./popup.js";

export function Modal() {
  Popup.call(this);
  this.container = document.body;
}

Modal.prototype = Object.create(Popup.prototype);
Modal.prototype.constructor = Modal;

Modal.prototype.show = function (header, content) {
  Popup.prototype.show.call(this, header, content);
};

Modal.prototype.createContainer = function () {
  var overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.addEventListener("click", function () {
    Modal.prototype.hide();
    overlay.remove();
  });
  this.container.append(overlay);
  return this.createModal(this.header, this.content);
};

Modal.prototype.createModal = function (header, content) {
  var container = document.createElement("div");
  container.id = "modal";
  var headerWrapper = document.createElement("h2");
  headerWrapper.className = "modal_header";
  headerWrapper.innerHTML = header;
  container.className = "open";
  container.append(headerWrapper);
  var contentWrapper = document.createElement("div");
  contentWrapper.className = "modal_content";
  contentWrapper.innerHTML = content;
  container.append(contentWrapper);
  var closeButton = document.createElement("button");
  closeButton.id = "close_modal";
  closeButton.innerText = "close";
  container.append(closeButton);
  closeButton.addEventListener("click", function () {
    Modal.prototype.hide();
    overlay.remove();
  });
  return container;
};

Modal.prototype.hide = function () {
  var modalContainer = document.getElementById("modal");
  modalContainer.remove();
};
