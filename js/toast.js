import { Popup } from "./popup.js";

var toastContainer = document.getElementById("toast");

export function Toast() {
  Popup.call(this);
  this.message = null;
  this.type = null;
  this.toastId = 0;
}

Toast.prototype = Object.create(Popup.prototype);
Toast.prototype.constructor = Toast;

Toast.prototype.show = function (message, type) {
  Popup.prototype.show.call(this);
  this.message = message;
  this.type = type;
  this.createToast(this.message, this.type);
};

Toast.prototype.getContainer = function () {
  Popup.prototype.getContainer.call(this);
  this.isOverlay = false;
  this.container = toastContainer;
  console.log(this.container);
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
    Toast.prototype.removeToast.call(
      this,
      document.getElementById("toast_id_" + e.target.id)
    );
  });
  newNode.append(toastButton);
  setTimeout(function () {
    var idToDelete = document.getElementById("toast_id_" + id);
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
