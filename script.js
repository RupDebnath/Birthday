

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 700);


const giftBox = document.querySelector(".gift-box");

if (giftBox) {

    giftBox.addEventListener("click", () => {

        giftBox.style.transform =
            "scale(1.2) rotate(10deg)";

        setTimeout(() => {

            giftBox.style.transform =
                "scale(1) rotate(0deg)";

        }, 400);

    });

}


const typingElement =
    document.getElementById("typingText");

if (typingElement) {

    const text =
        "Thank you for being the most beautiful part of my life ❤️";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            typingElement.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(typeWriter, 80);
        }

    }

    typeWriter();
}


function blowCandles() {

    const music =
        document.getElementById("cakeMusic");

    if (music) {
        music.play().catch(() => {});
    }

    const candles =
        document.getElementById("candles");

    const wishMessage =
        document.getElementById("wishMessage");

    const wishText =
        document.getElementById("wishText");

    if (!candles) return;

    candles.innerHTML = "💨 💨 💨";

    if (wishText) {
        wishText.innerHTML =
            "🎉 Happy Birthday My Love ❤️";
    }

    if (wishMessage) {
        wishMessage.style.display = "block";
    }

    createFireworks();
}


function createFireworks() {

    const symbols = [
        "❤️",
        "💖",
        "💕",
        "🎉",
        "✨",
        "🎂",
        "🌹"
    ];

    for (let i = 0; i < 100; i++) {

        const firework =
            document.createElement("div");

        firework.classList.add("firework");

        firework.innerHTML =
            symbols[
            Math.floor(
            Math.random() * symbols.length
            )
            ];

        firework.style.left =
            Math.random() * 100 + "vw";

        firework.style.top =
            Math.random() * 100 + "vh";

        firework.style.fontSize =
            (15 + Math.random() * 30) + "px";

        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 4000);

    }
}


function startCelebration() {

    createFireworks();

    setTimeout(() => {

        createFireworks();

    }, 1000);

    setTimeout(() => {

        createFireworks();

    }, 2000);

    setTimeout(() => {

        createFireworks();

    }, 3000);

}


const images =
    document.querySelectorAll(".photo-card img");

images.forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.transform =
            "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform =
            "scale(1)";

    });

});


const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0px)";

        }

    });

}, {
    threshold: 0.1
});

const cards =
document.querySelectorAll(
".glass-card, .photo-card, .flip-card"
);

cards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all 0.8s ease";

    observer.observe(card);

});


function showLovePopup() {

    alert(
`❤️ Happy Birthday ❤️

You are the most special person in my life.

Thank you for every smile,
every memory,
and every beautiful moment.

I Love You Forever ❤️`
    );

}

window.addEventListener("click", () => {

    const music =
        document.getElementById("bgMusic");

    if (music) {

        music.play().catch(() => {});

    }

}, { once: true });


window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition =
        "opacity 1s";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 100);

});


const loveCounter =
document.getElementById("loveDays");

if (loveCounter) {

    const startDate =
        new Date("2024-01-01");

    const today =
        new Date();

    const diffTime =
        today - startDate;

    const days =
        Math.floor(
            diffTime /
            (1000 * 60 * 60 * 24)
        );

    loveCounter.innerHTML =
        days + " Days Together ❤️";

}


const quoteElement =
document.getElementById("loveQuote");

if (quoteElement) {

    const quotes = [

        "You are my favorite notification ❤️",

        "Every love story is beautiful, but ours is my favorite ❤️",

        "You are the reason behind my smile ❤️",

        "I fall for you more every day ❤️",

        "My heart is and always will be yours ❤️"

    ];

    quoteElement.innerHTML =
        quotes[
        Math.floor(
        Math.random() * quotes.length
        )
        ];
}