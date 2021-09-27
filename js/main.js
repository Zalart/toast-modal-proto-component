import { Modal } from "./modal.js";
import { Popup } from "./popup.js";
import { Toast } from "./toast.js";
(function () {
  var addToast = document.getElementById("add_toast");
  var addModal = document.getElementById("open_modal");
  var inputHeader;
  var inputContent;

  var toast = new Toast();
  var modal = new Modal();

  addToast.addEventListener("click", function () {
    inputHeader = document.getElementById("input_header").value;
    var randomType = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    toast.show(inputHeader, randomType);
  });

  addModal.addEventListener("click", function () {
    inputHeader = document.getElementById("input_header").value;
    inputContent = document.getElementById("input_content").value;

    modal.show(inputHeader, inputContent);
  });
})(Popup, Modal, Toast);
