import { Toast } from "./toast.js";

export class ToastMessage extends Toast {
  constructor() {
    super();
    this.type = "message";
  }

  show(message) {
    super.show.call(this, message);
  }

  getType() {
    return this.type;
  }
}
