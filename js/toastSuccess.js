import { Toast } from "./toast.js";

export function ToastSuccess() {
  Toast.call(this);
  this.type = "success";
}
ToastSuccess.prototype = Object.create(Toast.prototype);
ToastSuccess.prototype.constructor = ToastSuccess;

ToastSuccess.prototype.show = function (message) {
  Toast.prototype.show.call(this, message);
};

ToastSuccess.prototype.getType = function () {
  return this.type;
};
