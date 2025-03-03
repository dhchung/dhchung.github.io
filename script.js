document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let splashScreen = document.getElementById("splash-screen");
        let mainContent = document.getElementById("main-content");

        // 스플래시 화면을 서서히 사라지게 함
        splashScreen.style.opacity = "0";

        // 1.5초 후 스플래시 화면을 완전히 숨기고 본문을 나타나게 함
        setTimeout(function() {
            splashScreen.style.display = "none"; // 완전히 숨기기
            mainContent.style.opacity = "1"; // 본문 나타나게 하기
            mainContent.style.visibility = "visible";
        }, 500); // CSS transition 시간과 맞춤
    }, 4500); // 5초 후 실행
});

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
    const accounts = document.getElementsByClassName("bank-account-broom");

    Array.from(accounts).forEach(account => {
        if (account.classList.contains("hidden")) {
            account.classList.remove("hidden");
        } else {
            account.classList.add("hidden");
        }
    });
}

function copyToClipboardBroom_1() {
    const customText = "하나은행 285-890028-86607 (정환식)";
    const textarea = document.createElement("textarea");
    textarea.value = customText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast");
    toast.classList.add("show");


    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function copyToClipboardBroom_2() {
    const customText = "국민은행 634502-96-107637 (권희자)";
    const textarea = document.createElement("textarea");
    textarea.value = customText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast");
    toast.classList.add("show");


    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function copyToClipboardBroom_3() {
    const customText = "우리은행 1002-738-254319 (정동하)";
    const textarea = document.createElement("textarea");
    textarea.value = customText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast");
    toast.classList.add("show");


    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}


function toggleAccount2() {
    const accounts = document.getElementsByClassName("bank-account-bride");

    Array.from(accounts).forEach(account => {
        if (account.classList.contains("hidden")) {
            account.classList.remove("hidden");
        } else {
            account.classList.add("hidden");
        }
    });
}

function copyToClipboardBride_1() {
    const customText = "국민은행 804602-04-116994 (김영재)";

    const textarea = document.createElement("textarea");
    textarea.value = customText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast");
    toast.classList.add("show");


    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

function copyToClipboardBride_2() {
    const customText = "농협은행 217060-52-102956 (송미양)";

    const textarea = document.createElement("textarea");
    textarea.value = customText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast");
    toast.classList.add("show");


    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

function copyToClipboardBride_3() {
    const customText = "국민은행 079802-04-187671 (김해리)";

    const textarea = document.createElement("textarea");
    textarea.value = customText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const toast = document.getElementById("copy-toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}
