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
    const customText = "우리은행 1002-738-254319 (정동하)"; // 원하는 텍스트 작성
    const textarea = document.createElement("textarea");
    textarea.value = customText; // JS에서 지정한 커스텀 텍스트 설정
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast2");
    toast.classList.add("show");

    // 2초 후 메시지 숨기기
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

function toggleAccount2() {
    const accounts = document.getElementsByClassName("bank-account2");

    Array.from(accounts).forEach(account => {
        if (account.classList.contains("hidden")) {
            account.classList.remove("hidden"); // 보이게 설정
        } else {
            account.classList.add("hidden"); // 숨김 처리
        }
    });
}

function copyToClipboard2_1() {
    const customText = "국민은행 804602-04-116994 (김영재)"; // 원하는 텍스트 작성

    const textarea = document.createElement("textarea");
    textarea.value = customText; // JS에서 지정한 커스텀 텍스트 설정
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast2");
    toast.classList.add("show");

    // 2초 후 메시지 숨기기
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

function copyToClipboard2_2() {
    const customText = "농협은행 217060-52-102956 (송미양)"; // 원하는 텍스트 작성

    const textarea = document.createElement("textarea");
    textarea.value = customText; // JS에서 지정한 커스텀 텍스트 설정
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast2");
    toast.classList.add("show");

    // 2초 후 메시지 숨기기
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

function copyToClipboard2_3() {
    const customText = "국민은행 079802-04-187671 (김해리)"; // 원하는 텍스트 작성

    const textarea = document.createElement("textarea");
    textarea.value = customText; // JS에서 지정한 커스텀 텍스트 설정
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast2");
    toast.classList.add("show");

    // 2초 후 메시지 숨기기
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}
