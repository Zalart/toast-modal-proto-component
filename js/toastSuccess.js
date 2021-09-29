import { Toast } from "./toast.js";

export function ToastSuccess() {
  Toast.call(this);
  this.type = null;
}
ToastSuccess.prototype = Object.create(Toast.prototype);
ToastSuccess.prototype.constructor = ToastSuccess;

ToastSuccess.prototype.show = function (message) {
  Toast.prototype.show.call(this, message);
};

ToastSuccess.prototype.getType = function () {
  this.type = "success";
};
