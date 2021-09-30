import { Popup } from "./popup.js";

var toastContainer = document.getElementById("toast");

export function Toast() {
  Popup.call(this);
  this.toastId = 0;
}

Toast.prototype = Object.create(Popup.prototype);
Toast.prototype.constructor = Toast;

Toast.prototype.show = function (header) {
  Popup.prototype.show.call(this, header);
  this.createToast(header, this.type);
  var idToDelete = document.getElementById(
    "toast_" + this.type + "_" + this.toastId
  );
  if (idToDelete) {
    setTimeout(function () {
      Toast.prototype.removeToast(idToDelete, 1000);
    }, 5000);
  }
};

Toast.prototype.createContainer = function () {
  Popup.prototype.createContainer.call(this);
  this.container = toastContainer;
};

Toast.prototype.createToast = function (header, type) {
  this.header = header;
  var id = ++this.toastId;
  var newNode = document.createElement("div");
  newNode.id = "toast_" + type + "_" + id;
  newNode.classList.add("toast", type);
  this.container.append(newNode);
  newNode.append(this.header);
  var toastButton = document.createElement("span");
  toastButton.className = "delete_toast";
  toastButton.id = id;
  toastButton.addEventListener("click", function (e) {
    Toast.prototype.removeToast.call(
      this,
      document.getElementById("toast_" + type + "_" + id),
      1000,
      true
    );
  });
  newNode.append(toastButton);
};

Toast.prototype.removeToast = function (idToDelete, timeout) {
  idToDelete.classList.add("hide");
  setTimeout(function () {
    idToDelete.remove();
  }, timeout);
};
