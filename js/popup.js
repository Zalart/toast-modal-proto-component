export function Popup() {
  this.container = null;
}
Popup.prototype.show = function () {
  this.getContainer();
};
Popup.prototype.hide = function () {
  this.getContainer();
};
Popup.prototype.getContainer = function () {
  return null;
};
