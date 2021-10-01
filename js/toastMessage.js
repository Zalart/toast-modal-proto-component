import { Toast } from "./toast.js";

export class ToastMessage extends Toast {
  constructor() {
    super();
    this.type = "message";
  }

  show(header) {
    super.show(header);
  }

  getType() {
    return this.type;
  }
}
