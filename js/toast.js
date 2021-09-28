import Popup from "./popup.js";

export class Toast extends Popup {
  constructor() {
    super();
    this.message = null;
    this.type = null;
    this.toastId = 0;
  }
  show(message, type) {
    super.show("toast");
    this.message = message;
    this.type = type;
    this.createToast(this.message, this.type);
  }

  createToast(message, type) {
    const id = this.toastId++;
    const newNode = document.createElement("div");
    newNode.id = "toast_id_" + id;
    newNode.classList.add("toast", "type_" + type);
    this.container.append(newNode);
    newNode.append(message);
    const toastButton = document.createElement("span");
    toastButton.className = "delete_toast";
    toastButton.id = id;
    toastButton.addEventListener("click", (e) => {
      this.removeToast(e.target.id);
    });
    newNode.append(toastButton);
    setTimeout(function () {
      const idToDelete = document.getElementById("toast_id_" + id);
      if (idToDelete) {
        idToDelete.remove();
      }
    }, 5000);
  }

  removeToast(id) {
    const nodeTodelete = document.getElementById("toast_id_" + id);
    nodeTodelete.remove();
  }
}
