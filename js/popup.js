export function Popup() {
  this.container = null;
  this.header = null;
  this.content = null;
}

Popup.prototype.show = function (header, content) {
  this.header = header;
  this.content = content;
  this.getContainer();
};
Popup.prototype.hide = function () {
  this.getContainer();
};
Popup.prototype.getContainer = function () {
  return null;
};
