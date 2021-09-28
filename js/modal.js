import Popup from "./popup.js";

export class Modal extends Popup {
  constructor() {
    super();
    this.header = null;
    this.content = null;
  }

  show(header, content) {
    super.show("modal");
    this.header = header;
    this.content = content;
    this.createModal(this.header, this.content);
    if (this.isOverlay) {
      const overlay = document.createElement("div");
      overlay.id = "overlay";
      this.container.before(overlay);
      overlay.addEventListener("click", () => {
        this.hide();
        overlay.remove();
      });
    }
  }

  createModal(header, content) {
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
    });
  }
  hide() {
    super.hide("modal");
    this.destroyModal();
  }
  destroyModal() {
    this.container.className = "";
    this.container.innerHTML = "";
  }
}
