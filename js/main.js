var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  $('.third-block__input--phone').mask('+7 (999) 999-99-99');
});


//кнопка вызова формы
let b = document.getElementById('overlay');
function swa() {
  b.style.visibility = 'visible';
  b.style.opacity = '1';
  b.style.transition = 'all 0.7s ease-out 0s';
}
function swa2() {
  b.style.visibility = 'hidden';
  b.style.opacity = '0';
}

const postData = body => fetch('http://3d.akspro.ru/send.php', {
  method: 'POST',
  headerd: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

const forms = document.querySelectorAll('form');
const modalText = document.querySelector('.modal__text');

forms.forEach(x => x.addEventListener('submit', e => {
  swa2();
  e.preventDefault();

  const formData = new FormData(x),
    body = {};
  formData.forEach((v, k) => body[k] = v);
  postData(body)
    .then(response => {
      if (response.status > 400) {
        throw new Error('Status network is not 200');
      }
      modalText.textContent = 'Ваша заявка принята. В ближайшее время с Вами свяжется наш специалист.';
      x.reset();
    })
    .catch(error => {
      modalText.textContent = 'Что-то пошло не так... Попробуйте еще раз!';
      console.error(error);
    }).finally(() => {
      openModal();
      setTimeout(() => {
        closeModal();
      }, 2000);
    })
}));

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

let closeButton = document.querySelector('.modal__button');
closeButton.addEventListener('click', closeModal);


function closeModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}


