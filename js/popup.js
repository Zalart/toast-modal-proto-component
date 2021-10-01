export class Popup {
  constructor() {
    this.header = null;
    this.content = null;
    this.container = null;
  }
  show(header, content) {
    this.header = header;
    this.content = content;
    this.createContainer();
  }
  hide() {
    return null;
  }
  createContainer() {
    return null;
  }
}
