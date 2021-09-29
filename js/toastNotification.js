import { Toast } from "./toast.js";

export function ToastNotification() {
  Toast.call(this);
  this.type = null;
}
ToastNotification.prototype = Object.create(Toast.prototype);
ToastNotification.prototype.constructor = ToastNotification;

ToastNotification.prototype.show = function (message) {
  Toast.prototype.show.call(this, message);
};

ToastNotification.prototype.getType = function () {
  this.type = "notification";
};
