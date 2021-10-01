import { Modal } from "./modal.js";
import { ToastError } from "./toastError.js";
import { ToastNotification } from "./toastNotification.js";
import { ToastSuccess } from "./toastSuccess.js";
import { ToastMessage } from "./toastMessage.js";
(function () {
  var addToast = document.getElementById("add_toast");
  var addModal = document.getElementById("open_modal");
  var inputHeader;
  var inputContent;
  var toast = [
    new ToastError(),
    new ToastNotification(),
    new ToastSuccess(),
    new ToastMessage(),
  ];
  var modal = new Modal();

  addToast.addEventListener("click", function () {
    inputHeader = document.getElementById("input_header").value;
    var randomToast = Math.floor(Math.random() * 4);
    toast[randomToast].show(inputHeader);
  });

  addModal.addEventListener("click", function () {
    inputHeader = document.getElementById("input_header").value;
    inputContent = document.getElementById("input_content").value;

    modal.show(inputHeader, inputContent);
  });
})(Modal, ToastError, ToastNotification, ToastSuccess, ToastMessage);
