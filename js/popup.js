export function Popup() {
  this.container = null;
  this.header = null;
  this.content = null;
  this.isOverlay = null;
}

Popup.prototype.show = function (header, content) {
  this.header = header;
  this.content = content;
  this.getContainer();
  if (this.isOverlay) {
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    this.container.before(overlay);
    overlay.addEventListener("click", () => {
      this.hide.call(this);
      overlay.remove();
    });
  }
};
Popup.prototype.hide = function () {
  this.getContainer();
};
Popup.prototype.getContainer = function () {
  return null;
};
