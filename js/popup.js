export function Popup() {
  this.container = null;
  this.header = null;
  this.content = null;
}

Popup.prototype.show = function (header, content) {
  this.header = header;
  this.content = content;
  this.createContainer();
};
Popup.prototype.hide = function () {
  this.createContainer();
};
Popup.prototype.createContainer = function () {
  return null;
};
