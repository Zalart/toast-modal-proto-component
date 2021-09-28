import { Modal } from "./modal.js";
import Popup from "./popup.js";
import { Toast } from "./toast.js";
(function () {
  const addToast = document.getElementById("add_toast");
  const addModal = document.getElementById("open_modal");
  const toast = new Toast();
  const modal = new Modal();

  addToast.addEventListener("click", function () {
    const inputHeader = document.getElementById("input_header").value;
    const randomType = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    toast.show(inputHeader, randomType);
  });

  addModal.addEventListener("click", function () {
    const inputHeader = document.getElementById("input_header").value;
    const inputContent = document.getElementById("input_content").value;

    modal.show(inputHeader, inputContent);
  });
})(Popup, Modal, Toast);
