import { Toast } from "./toast.js";

export class ToastSuccess extends Toast {
  constructor() {
    super();
    this.type = "success";
  }

  show(message) {
    super.show.call(this, message);
  }

  getType() {
    return this.type;
  }
}
