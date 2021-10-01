import { Toast } from "./toast.js";

export class ToastError extends Toast {
  constructor() {
    super();
    this.type = "error";
  }

  show(message) {
    super.show.call(this, message);
  }

  getType() {
    return this.type;
  }
}
