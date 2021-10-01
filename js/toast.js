import { Popup } from "./popup.js";
let toastsContainer = document.getElementById("toasts");
export class Toast extends Popup {
  constructor() {
    super();
    this.toastId = 0;
    this.container = document.body;
  }

  show(header) {
    if (!toastsContainer) {
      toastsContainer = document.createElement("div");
      toastsContainer.id = "toasts";
      this.container.append(toastsContainer);
    }
    this.container = toastsContainer;

    super.show.call(this, header);
    const idToDelete = document.getElementById(
      "toast_" + this.type + "_" + this.toastId
    );
    if (idToDelete) {
      setTimeout(() => {
        this.removeToast(idToDelete, 1000);
      }, 5000);
    }
  }
  createContainer() {
    return this.createToast(this.header, this.type);
  }

  createToast(header, type) {
    this.header = header;
    const id = ++this.toastId;
    const newToast = document.createElement("div");
    newToast.id = "toast_" + type + "_" + id;
    newToast.classList.add("toast", type);
    newToast.append(this.header);
    const toastButton = document.createElement("span");
    toastButton.className = "delete_toast";
    toastButton.id = id;
    toastButton.addEventListener("click", () => {
      this.removeToast(
        document.getElementById("toast_" + type + "_" + id),
        1000,
        true
      );
    });
    newToast.append(toastButton);
    return newToast;
  }

  removeToast(idToDelete, timeout) {
    idToDelete.classList.add("hide");
    setTimeout(function () {
      idToDelete.remove();
    }, timeout);
  }
}
