const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 300,
    slidesPerView: 1,
    spaceBetween: 0,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });

function toggleAccount() {
    const account = document.getElementById("bank-account");

    // 보이게 설정
    if (account.classList.contains("hidden")) {
        account.classList.remove("hidden");
    } else {
        account.classList.add("hidden");
    }
}

function toggleAccount2() {
    const account = document.getElementById("bank-account2");

    // 보이게 설정
    if (account.classList.contains("hidden")) {
        account.classList.remove("hidden");
    } else {
        account.classList.add("hidden");
    }
}