import { Popup } from "./popup.js";
var toastsContainer = document.getElementById("toasts");
export function Toast() {
  Popup.call(this);
  this.toastId = 0;
  this.container = document.body;
}

Toast.prototype = Object.create(Popup.prototype);
Toast.prototype.constructor = Toast;

Toast.prototype.show = function (header) {
  console.log(toastsContainer);
  if (!toastsContainer) {
    toastsContainer = document.createElement("div");
    toastsContainer.id = "toasts";
    this.container.append(toastsContainer);
    console.log(this.container);
  }
  this.container = toastsContainer;

  Popup.prototype.show.call(this, header);
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
  return this.createToast(this.header, this.type);
};

Toast.prototype.createToast = function (header, type) {
  this.header = header;
  var id = ++this.toastId;
  var newToast = document.createElement("div");
  newToast.id = "toast_" + type + "_" + id;
  newToast.classList.add("toast", type);
  newToast.append(this.header);
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
  newToast.append(toastButton);
  return newToast;
};

Toast.prototype.removeToast = function (idToDelete, timeout) {
  idToDelete.classList.add("hide");
  setTimeout(function () {
    idToDelete.remove();
    if (!toastsContainer.hasChildNodes()) {
      toastsContainer.remove();
    }
  }, timeout);
};
