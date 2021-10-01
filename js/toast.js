import { Popup } from "./popup.js";

const toastContainer = document.getElementById("toast");

export class Toast extends Popup {
  constructor() {
    super();
    this.toastId = 0;
  }

  show(header) {
    this.container = toastContainer;
    super.show(header);
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
    const newNode = document.createElement("div");
    newNode.id = "toast_" + type + "_" + id;
    newNode.classList.add("toast", type);
    this.container.append(newNode);
    newNode.append(this.header);
    const toastButton = document.createElement("span");
    toastButton.className = "delete_toast";
    toastButton.id = id;
    toastButton.addEventListener("click", (e) => {
      this.removeToast(
        document.getElementById("toast_" + type + "_" + id),
        1000,
        true
      );
    });
    newNode.append(toastButton);
  }

  removeToast(idToDelete, timeout) {
    idToDelete.classList.add("hide");
    setTimeout(function () {
      idToDelete.remove();
    }, timeout);
  }
}
