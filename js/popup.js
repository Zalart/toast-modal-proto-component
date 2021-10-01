export class Popup {
  constructor() {
    this.header = null;
    this.content = null;
  }
  show(header, content) {
    this.header = header;
    this.content = content;
    this.container.append(this.createContainer());
  }
  hide() {
    return null;
  }
  createContainer() {
    return null;
  }
}
