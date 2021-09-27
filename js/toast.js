import { Popup } from "./popup.js";

export function Toast() {
  Popup.call(this);
  this.message = null;
  this.type = null;
  this.toastId = 0;
}

Toast.prototype = Object.create(Popup.prototype);
Toast.prototype.constructor = Toast;

Toast.prototype.show = function (message, type) {
  Popup.prototype.show.call(this, this);
  this.message = message;
  this.type = type;
  this.createToast(this.message, this.type);
};

Toast.prototype.createToast = function () {
  var id = this.toastId++;
  var newNode = document.createElement("div");
  newNode.id = "toast_id_" + id;
  newNode.classList.add("toast", "type_" + this.type);
  this.container.append(newNode);
  newNode.append(this.message);
  var toastButton = document.createElement("span");
  toastButton.className = "delete_toast";
  toastButton.id = id;
  toastButton.addEventListener("click", function (e) {
    Toast.prototype.removeToast.call(this, e.target.id);
  });
  newNode.append(toastButton);
  setTimeout(function () {
    var idToDelete = document.getElementById("toast_id_" + id);
    if (idToDelete) {
      idToDelete.remove();
    }
  }, 5000);
};

Toast.prototype.removeToast = function (id) {
  var nodeTodelete = document.getElementById("toast_id_" + id);
  nodeTodelete.remove();
};
