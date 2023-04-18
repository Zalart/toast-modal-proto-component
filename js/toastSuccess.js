import { Toast } from "./toast.js";

export class ToastSuccess extends Toast {
  constructor() {
    super();
    this.type = "success";
  }

  show(header) {
    super.show(header);
  }

  getType() {
    return this.type;
  }
}
