'use strict';

/*--------Modal Save ---------*/

  let btnSave = document.querySelector(".btn_save");
  let modalSave = document.querySelector(".modal_save");
  let btnYes = document.querySelector(".btn_yes")
  let btnNo = document.querySelector(".btn_no");
  let cross = document.querySelector(".modal__close")

  function openModal() {
    modalSave.classList.add('open')
    modalSave.classList.remove('close')
  }
  function closeModal() {
    modalSave.classList.remove('open')
    modalSave.classList.add('close')
  }
  btnSave.addEventListener('click', () => {
        openModal()
  })
  cross.addEventListener('click', () => {
    closeModal()
  })
  btnNo.addEventListener('click', () => {
    closeModal()
  })
  modalSave.addEventListener("click", (e) => {
  if(e.target === modalSave) {
      closeModal()
    }
  })
  const message = {
    success: 'Спасибо, ваш ответ записан',
    error:'Что-то пошло не так...',
  }

  function ShowThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog')
    prevModalDialog.classList.add('close')
    const thanksModal = document.createElement('div')
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML=`<div class="modal__content">
                                  <div class="modal__close" onclick="closeModal()">&times;</div>
                                  <div class="modal__title">${message}</div>
                          </div>`
    document.querySelector('.modal_save').append(thanksModal)
    setTimeout(() => {
      thanksModal.remove()
      prevModalDialog.classList.add('open')
      prevModalDialog.classList.remove('close')
      closeModal()
    }, 4000)
}
  btnYes.addEventListener('click', () => {
      ShowThanksModal(message.success)
  })


/*--------Modal Details ---------*/

  let btnDetails = document.querySelectorAll(".details");
  let modalDetails = document.querySelector(".modal_details");
  let crossDetails = document.querySelector(".modal_details_close");

  function openDetailsModal() {
    modalDetails.classList.add('open')
    modalDetails.classList.remove('close')
  }
  function closeDetailsModal() {
    modalDetails.classList.remove('open')
    modalDetails.classList.add('close')
  }
  btnDetails.forEach(item => item.addEventListener('click', () => {
        openDetailsModal()
  }))
  crossDetails.addEventListener('click', () => {
    closeDetailsModal()
  })
  modalDetails.addEventListener("click", (e) => {
  if(e.target === modalDetails) {
      closeDetailsModal()
    }
  })

/*--------Popup function---------*/

function Popup() {
  let popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  document.body.addEventListener('click', () => {
    popup.classList.remove("show");
  });
  document.body.addEventListener('touchstart', () => {
    popup.classList.remove("show");
  });
}


/*--------Select functionality---------*/

let x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        let y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("mouseover", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      //this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  let x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

/*----------Default Button Functionality--------*/

let btnDefault = document.querySelector(".btn_default");
let checkboxArr = document.querySelectorAll(".checkbox")

btnDefault.addEventListener("click", () => {
  checkboxArr.forEach(item => {
      item.checked = true
  })
})

/*---------Search Themes--------*/
let parents = document.querySelectorAll(".search_sub_wrapper_elem")
function hide(evt) {
  //evt.currentTarget refers to the parent in this context
  evt.currentTarget.style.display = 'none';
}

// It will fire when each child is clicked
parents.forEach(item => {
  item.addEventListener('click', hide);
})
