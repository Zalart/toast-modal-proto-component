import { Toast } from "./toast.js";

export function ToastMessage() {
  Toast.call(this);
  this.type = null;
}
ToastMessage.prototype = Object.create(Toast.prototype);
ToastMessage.prototype.constructor = ToastMessage;

ToastMessage.prototype.show = function (message) {
  Toast.prototype.show.call(this, message);
};

ToastMessage.prototype.getType = function () {
  this.type = "message";
};
