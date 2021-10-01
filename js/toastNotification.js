import { Toast } from "./toast.js";

export class ToastNotification extends Toast {
  constructor() {
    super();
    this.type = "notification";
  }

  show(message) {
    super.show.call(this, message);
  }

  getType() {
    return this.type;
  }
}
