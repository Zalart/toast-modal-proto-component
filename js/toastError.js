import { Toast } from "./toast.js";

export class ToastError extends Toast {
  constructor() {
    super();
    this.type = "error";
  }

  show(header) {
    super.show(header);
  }

  getType() {
    return this.type;
  }
}
