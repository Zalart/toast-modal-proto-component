import { Popup } from "./popup.js";

const modalContainer = document.getElementById("modal");

export class Modal extends Popup {
  show(header, content) {
    this.container = modalContainer;
    super.show(header, content);
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    this.container.before(overlay);
    overlay.addEventListener("click", () => {
      this.hide();
      overlay.remove();
    });
  }

  createContainer() {
    return this.createModal(this.header, this.content);
  }

  createModal(header, content) {
    this.container = modalContainer;
    const headerWrapper = document.createElement("h2");
    headerWrapper.className = "modal_header";
    headerWrapper.innerHTML = header;
    this.container.className = "open";
    this.container.append(headerWrapper);
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "modal_content";
    contentWrapper.innerHTML = content;
    this.container.append(contentWrapper);
    const closeButton = document.createElement("button");
    closeButton.id = "close_modal";
    closeButton.innerText = "close";
    this.container.append(closeButton);
    closeButton.addEventListener("click", () => {
      this.hide();
      overlay.remove();
    });
  }

  hide() {
    this.destroyModal();
  }

  destroyModal() {
    this.container.className = "";
    this.container.innerHTML = "";
  }
}
