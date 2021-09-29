import { Toast } from "./toast.js";

export function ToastError() {
  Toast.call(this);
  this.type = null;
}
ToastError.prototype = Object.create(Toast.prototype);
ToastError.prototype.constructor = ToastError;

ToastError.prototype.show = function (message) {
  Toast.prototype.show.call(this, message);
};

ToastError.prototype.getType = function () {
  this.type = "error";
};
