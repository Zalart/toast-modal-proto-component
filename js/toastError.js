import { Toast } from "./toast.js";

export function ToastError() {
  Toast.call(this);
  this.message = null;
}
ToastError.prototype = Object.create(Toast.prototype);
ToastError.prototype.constructor = ToastError;

ToastError.prototype.show = function (message) {
  Popup.prototype.show.call(this);
};
