<!--BOOT SCREEN-->

document.addEventListener("DOMContentLoaded",function () {

    const bootScreen =
        document.getElementById(
            "bootScreen"
        );

    const bootText =
        document.getElementById(
            "bootText"
        );

    const bootProgress =
        document.getElementById(
            "bootProgress"
        );

    const bootPercent =
        document.getElementById(
            "bootPercent"
        );

    const bootContent =
        document.querySelector(
            ".boot-content"
        );

    if (!bootScreen) {
        return;
    }

    const bootMessages = [

        "INITIALIZING...",
        "LOADING USER DATA...",
        "SEARCHING FILES...",
        "CHECKING MEMORY...",
        "SEARCHING UNKNOWN USER...",
        "USER FOUND.",
        "WHY ARE YOU HERE?",
        "ACCESS GRANTED."

        ];

    let progress = 0;

    let messageIndex = 0;

    const messageTimer = setInterval(function () {

    if (
        messageIndex < bootMessages.length
    ) {

        bootText.textContent = bootMessages[
            messageIndex
        ];

        messageIndex++;

    }

    },
    430
    );

    const progressTimer = setInterval(function () {

        progress +=
            Math.floor(
                Math.random() * 8
            ) + 2;


        if (progress >= 100) {

            progress = 100;

            clearInterval(
                progressTimer
            );

            clearInterval(
                messageTimer
            );

        bootText.textContent = "ACCESS GRANTED.";
        bootPercent.textContent = "100%";
        bootProgress.style.width = "100%";

        setTimeout(
            function () {

                if (bootContent) {
                    bootContent.classList.add(
                        "glitch"
                    );
                }

                setTimeout(
                    function () {
                    bootScreen.classList.add(
                        "finished"
                    );

                    document.body.style.overflow = "";
                    },
                    300
                );

            },
            500
        );

        }

        bootProgress.style.width = progress + "%";
        bootPercent.textContent = progress + "%";

        if (
            Math.random() < 0.15 &&
            bootContent
        ) {

            bootContent.classList.add(
                "glitch"
            );


            setTimeout(
                function () {
                    bootContent.classList.remove(
                        "glitch"
                    );

                },
                200
            );

        }

    },
    160
    );

    document.body.style.overflow = "hidden";

}

);


/*--MENU--*/

function openMenu() {

    const menu = document.getElementById(
            "menuOverlay"
    );

    if (!menu) {
        return;
    }

    menu.classList.add(
        "active"
    );

    document.body.style.overflow = "hidden";

}


function closeMenu() {

    const menu = document.getElementById(
            "menuOverlay"
    );

    if (!menu) {
        return;
    }

    menu.classList.remove(
        "active"
    );

    document.body.style.overflow = "";

}


/*--ESCAPE--*/

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {
            closeMenu();
        }

    }
);


/*--SYSTEM CLOCK--*/

function updateClock() {

    const clock = document.getElementById(
        "systemClock"
    );

    if (!clock) {
        return;
    }

    const now = new Date();

    const hours = String(
        now.getHours()
    ).padStart(2, "0");

    const minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
        now.getSeconds()
    ).padStart(2, "0");

    clock.textContent = hours + ":" + minutes + ":" + seconds;

}

updateClock();

setInterval(
    updateClock,
    1000
);


/*--RANDOM ERROR--*/

const errors = [

    "ERROR_404",
    "MEMORY_CORRUPTED",
    "FILE_NOT_FOUND",
    "USER_UNKNOWN",
    "SIGNAL_LOST",
    "SYSTEM_UNSTABLE",
    "DO_NOT_REFRESH",
    "PROCESS_FAILED",
    "UNKNOWN_EXCEPTION"

];

function showRandomError() {

    const error = document.getElementById(
        "floatingError"
    );

    if (!error) {
        return;
    }

    const random = errors[
        Math.floor(
            Math.random() * errors.length
        )
    ];

    error.textContent = random;

    error.classList.remove(
        "show"
    );

    void error.offsetWidth;

    error.classList.add(
        "show"
    );

}

setInterval(
    showRandomError, 9000
);


/*--CREEPY SYSTEM MESSAGES--*/

const creepyMessages = [

    "ARE YOU STILL THERE?",
    "DON'T LEAVE YET.",
    "SOMETHING IS WRONG.",
    "YOU WEREN'T SUPPOSED TO FIND THIS.",
    "SYSTEM IS WATCHING.",
    "FILE ACCESS DETECTED.",
    "HELLO?",
    "USER ACTIVITY DETECTED.",
    "CONNECTION STILL ACTIVE.",
    "WHY ARE YOU STILL HERE?"

];

function showCreepyMessage() {

    const message = document.getElementById(
        "creepyMessage"
    );

    if (!message) {
        return;
    }

    const random = creepyMessages[
        Math.floor(
            Math.random() * creepyMessages.length
        )
    ];

    message.textContent = random;

    message.classList.remove(
        "show"
    );

    void message.offsetWidth;

    message.classList.add(
        "show"
    );

}

setTimeout(
    showCreepyMessage, 7000
);

setInterval(
    showCreepyMessage, 17000
);


/*--RANDOM GLITCH--*/

function randomGlitch() {

    const elements = document.querySelectorAll(
        "h1, h2, .logo, .hero-subtitle, .system-label"
    );

    if (!elements.length) {
        return;
    }

    const element = elements[
        Math.floor(
            Math.random() * elements.length
        )
        ];

    element.classList.add(
        "glitching"
    );

    setTimeout(
        function () {

            element.classList.remove(
                "glitching"
            );

        },
        250
    );

}

setInterval(
    randomGlitch, 6000
);


/*--MOUSE REACTION--*/

document.addEventListener(
    "mousemove",
    function (event) {

        const x =
            event.clientX /
            window.innerWidth;

        const y =
            event.clientY /
            window.innerHeight;

        document.documentElement.style.setProperty(
            "--mouse-x",
            event.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            event.clientY + "px"
        );

        const mainWindow =
            document.querySelector(
                ".main-window"
            );

        if (
            mainWindow &&
            window.innerWidth > 900
        ) {

        const rotateX =
            (0.5 - y) * 1.5;

        const rotateY =
            (x - 0.5) * 1.5;

        mainWindow.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        }

    }
);


/*--STOP MAIN WINDOW ROTATION WHEN MOUSE LEAVES--*/

document.addEventListener(
    "mouseleave",
    function () {

        const mainWindow = document.querySelector(
            ".main-window"
        );

        if (mainWindow) {
            mainWindow.style.transform = "";
        }

    }
);


/*--PAGE TRANSITION--*/

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const links =
            document.querySelectorAll(
                'a[href$=".php"]'
            );

        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const href = link.getAttribute(
                            "href"
                        );

                        if (
                            !href ||
                            href.startsWith("#") ||
                            href.startsWith("mailto:")
                        ) {
                            return;
                        }

                        if (
                            link.target === "_blank"
                        ) {
                            return;
                        }

                        event.preventDefault();

                        document.body.style.opacity = "0";

                        document.body.style.transition = "opacity 0.18s ease";

                        setTimeout(
                            function () {
                                window.location.href = href;
                            },
                            180
                        );

                    }
                );

            }
        );

    }
);


/*--RANDOM WINDOW MOVEMENT--*/

function randomWindowGlitch() {

    const windows = document.querySelectorAll(
        ".floating-window"
    );

    if (!windows.length) {
        return;
    }

    const random = windows[
        Math.floor(
            Math.random() * windows.length
        )
    ];

    random.style.transform = "translateX(3px) rotate(1deg)";

    setTimeout(
        function () {
            random.style.transform = "";
        },
        180
    );

}

setInterval(
    randomWindowGlitch, 8000
);


/*--CONSOLE--*/

console.log(
    "%cUNKNOWN_USER.exe",
    "color:#ff8fbd;font-size:22px;font-weight:bold;"
);

console.log(
    "%cYou probably shouldn't be looking here.",
    "color:#a8919c;"
);

console.log(
    "%cSYSTEM STATUS: ONLINE",
    "color:#ff8fbd;"
);

