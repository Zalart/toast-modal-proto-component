import { Modal } from "./modal.js";
import { Toast } from "./toast.js";

var modalContainer = document.getElementById("modal");
var toastContainer = document.getElementById("toast");
export function Popup() {
  this.isOverlay = true;
  this.container = null;
}
Popup.prototype.show = function (obj) {
  if (obj instanceof Modal) {
    this.isOverlay = true;
    this.container = modalContainer;
  }
  if (obj instanceof Toast) {
    this.isOverlay = false;
    this.container = toastContainer;
  }
};
Popup.prototype.hide = function (obj) {
  if (obj instanceof Modal) {
    if (this.isOverlay) {
      overlay.remove();
      this.isOverlay = false;
    }
    this.container = modalContainer;
  }
  if (obj instanceof Toast) {
    this.container = toastContainer;
  }
};
