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

function copyToClipboard() {
    const accountText = document.getElementById("bank-account").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = accountText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // 복사 완료 메시지 표시
    const copyMessage = document.getElementById("copy-message");
    copyMessage.classList.remove("hidden");

    // 2초 후 메시지 숨기기
    setTimeout(() => {
        copyMessage.classList.add("hidden");
    }, 2000);
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

function copyToClipboard2() {
    const accountText = document.getElementById("bank-account2").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = accountText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // 복사 완료 메시지 표시
    const copyMessage = document.getElementById("copy-message2");
    copyMessage.classList.remove("hidden");

    // 2초 후 메시지 숨기기
    setTimeout(() => {
        copyMessage.classList.add("hidden");
    }, 2000);
}
