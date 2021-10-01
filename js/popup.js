export function Popup() {
  this.header = null;
  this.content = null;
}
Popup.prototype.show = function (header, content) {
  this.header = header;
  this.content = content;
  this.container.append(this.createContainer());
};
Popup.prototype.hide = function () {
  return null;
};
Popup.prototype.createContainer = function () {
  return null;
};
