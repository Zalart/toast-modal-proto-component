/* import { Modal } from "./modal.js";
import { Toast } from "./toast.js"; */

// пришлось убрать циклические ссылки при переходе на классы

const modalContainer = document.getElementById("modal");
const toastContainer = document.getElementById("toast");
export default class Popup {
  constructor() {
    this.isOverlay = true;
    this.container = null;
  }
  show(obj) {
    if (obj === "modal") {
      this.isOverlay = true;
      this.container = modalContainer;
    }
    if (obj === "toast") {
      this.isOverlay = false;
      this.container = toastContainer;
    }
  }
  hide(obj) {
    if (obj === "modal") {
      if (this.isOverlay) {
        overlay.remove();
        this.isOverlay = false;
      }
      this.container = modalContainer;
    }
    if (obj === "toast") {
      this.container = toastContainer;
    }
  }
}
