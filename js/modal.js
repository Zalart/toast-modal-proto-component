import { Popup } from "./popup.js";

export class Modal extends Popup {
  constructor() {
    super();
    this.container = document.body;
  }

  show(header, content) {
    super.show.call(this, header, content);
  }

  createContainer() {
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.addEventListener("click", () => {
      this.hide();
      overlay.remove();
    });
    this.container.append(overlay);
    return this.createModal(this.header, this.content);
  }

  createModal(header, content) {
    const container = document.createElement("div");
    container.id = "modal";
    const headerWrapper = document.createElement("h2");
    headerWrapper.className = "modal_header";
    headerWrapper.innerHTML = header;
    container.className = "open";
    container.append(headerWrapper);
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "modal_content";
    contentWrapper.innerHTML = content;
    container.append(contentWrapper);
    const closeButton = document.createElement("button");
    closeButton.id = "close_modal";
    closeButton.innerText = "close";
    container.append(closeButton);
    closeButton.addEventListener("click", function () {
      Modal.prototype.hide();
      overlay.remove();
    });
    return container;
  }

  hide() {
    const modalContainer = document.getElementById("modal");
    modalContainer.remove();
  }
}
