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

    // // 복사 완료 메시지 표시
    // const copyMessage = document.getElementById("copy-message2");
    // copyMessage.classList.remove("hidden");

    // // 2초 후 메시지 숨기기
    // setTimeout(() => {
    //     copyMessage.classList.add("hidden");
    // }, 2000);

    // 팝업 창 열기 (폭 300px, 높이 150px, 가운데 정렬)
    const popupWidth = 300;
    const popupHeight = 150;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const left = (screenWidth - popupWidth) / 2;
    const top = (screenHeight - popupHeight) / 2;

    window.open(
        "",
        "복사완료",
        `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`
    ).document.write(`
        <html>
        <head>
            <title>복사 완료</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                .message { font-size: 16px; font-weight: bold; color: #333; }
                .close-btn { margin-top: 20px; padding: 8px 12px; background: #007bff; color: white; border: none; cursor: pointer; border-radius: 5px; }
                .close-btn:hover { background: #0056b3; }
            </style>
        </head>
        <body>
            <p class="message">📋 계좌번호가 복사되었습니다!</p>
            <button class="close-btn" onclick="window.close()">닫기</button>
        </body>
        </html>
    `);

}
