import { Toast } from "./toast.js";

export class ToastNotification extends Toast {
  constructor() {
    super();
    this.type = "notification";
  }

  show(header) {
    super.show(header);
  }

  getType() {
    return this.type;
  }
}
