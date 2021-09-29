import { Toast } from "./toast.js";

export function ToastError() {
  Toast.call(this);
  this.type = "error";
}
ToastError.prototype = Object.create(Toast.prototype);
ToastError.prototype.constructor = ToastError;

ToastError.prototype.show = function (header) {
  Toast.prototype.show.call(this, header);
};

ToastError.prototype.getType = function () {
  return this.type;
};
