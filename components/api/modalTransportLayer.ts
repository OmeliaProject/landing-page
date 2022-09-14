
class ModalTransportLayer {
  public isModal : boolean;
  public title : string;
  public body : string;

  public openModal(title : string, body : string) {
    this.isModal = true;
    this.title = title;
    this.body = body;
  }

  public closeModal() {
    this.isModal = false;
    this.title = "";
    this.body = "";
  }

  constructor() {
    this.isModal = false;
    this.title = "";
    this.body = "";
  }

}

export default ModalTransportLayer
