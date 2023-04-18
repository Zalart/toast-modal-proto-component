import { Modal } from "./modal.js";
import { ToastError } from "./toastError.js";
import { ToastNotification } from "./toastNotification.js";
import { ToastSuccess } from "./toastSuccess.js";
import { ToastMessage } from "./toastMessage.js";
(function () {
  const addToast = document.getElementById("add_toast");
  const addModal = document.getElementById("open_modal");
  const toast = [
    new ToastError(),
    new ToastNotification(),
    new ToastSuccess(),
    new ToastMessage(),
  ];
  const modal = new Modal();

  addToast.addEventListener("click", () => {
    const inputHeader = document.getElementById("input_header").value;
    const randomToast = Math.floor(Math.random() * 4);
    toast[randomToast].show(inputHeader);
  });

  addModal.addEventListener("click", () => {
    const inputHeader = document.getElementById("input_header").value;
    const inputContent = document.getElementById("input_content").value;

    modal.show(inputHeader, inputContent);
  });
})(Modal, ToastError, ToastNotification, ToastSuccess, ToastMessage);
