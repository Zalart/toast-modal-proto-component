import { Popup } from "./popup.js";

var toastContainer = document.getElementById("toast");

export function Toast() {
  Popup.call(this);
  this.toastId = 0;
  this.message = null;
}

Toast.prototype = Object.create(Popup.prototype);
Toast.prototype.constructor = Toast;

Toast.prototype.show = function (message) {
  Popup.prototype.show.call(this);
  this.getType();
  this.createToast(message, this.type);
};

Toast.prototype.getType = function () {
  return null;
};

Toast.prototype.getContainer = function () {
  Popup.prototype.getContainer.call(this);
  this.container = toastContainer;
};

Toast.prototype.createToast = function (message, type) {
  this.message = message;
  var id = this.toastId++;
  var newNode = document.createElement("div");
  newNode.id = "toast_" + type + "_" + id;
  newNode.classList.add("toast", type);
  this.container.append(newNode);
  newNode.append(this.message);
  var toastButton = document.createElement("span");
  toastButton.className = "delete_toast";
  toastButton.id = id;
  toastButton.addEventListener("click", function (e) {
    Toast.prototype.removeToast.call(
      this,
      document.getElementById("toast_" + type + "_" + id)
    );
  });
  newNode.append(toastButton);
  setTimeout(function () {
    var idToDelete = document.getElementById("toast_" + type + "_" + id);
    if (idToDelete) {
      Toast.prototype.removeToast(idToDelete);
    }
  }, 5000);
};

Toast.prototype.removeToast = function (idToDelete) {
  idToDelete.classList.add("hide");
  setTimeout(function () {
    idToDelete.remove();
  }, 1000);
};
