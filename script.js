/* =========================================
   UNIVERSO DE KIM
   Sistema de interacciones
========================================= */


/* =========================================
   ENTRADA AL UNIVERSO
========================================= */

function enterUniverse() {

    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "universo.html";
    }, 1000);

}


/* =========================================
   INFORMACIÓN DE LAS SECCIONES
========================================= */

const sections = {

    recuerdos: {
        icon: "⭐",
        title: "Nuestros recuerdos",
        text: "Cada momento contigo merece su propio lugar entre las estrellas.",
        color: "#b9a7ff"
    },

    cartas: {
        icon: "💌",
        title: "Cartitas para ti",
        text: "Pequeñas palabras que quizá no siempre sé decirte en persona, pero que quería dejar flotando por aquí.",
        color: "#d6bfff"
    },

    musica: {
        icon: "🎵",
        title: "Nuestra música",
        text: "Canciones que me hacen pensar en ti, momentos que tienen sonido y melodías que ahora también forman parte de nuestro universo.",
        color: "#91b5ff"
    },

    constelacion: {
        icon: "✦",
        title: "Nuestra constelación",
        text: "Una colección de momentos, fechas y pequeñas cosas que, juntas, terminaron formando nuestra propia constelación.",
        color: "#c4b5ff"
    },

    yoongi: {
        icon: "🐈‍⬛",
        title: "Yoongi's Room",
        text: "Un pequeño rincón ficticio inspirado en la personalidad pública de Yoongi. No representa al artista real ni pretende hablar en su nombre. Solo es una pequeña parte de este universo creada para ti.",
        color: "#9faeff"
    },

    secreto: {
        icon: "🔐",
        title: "Zona secreta",
        text: "Hay lugares del universo que no aparecen hasta que sabes exactamente dónde mirar...",
        color: "#a98cff"
    }

};


/* =========================================
   CREAR ESTILOS DEL MODAL
========================================= */

const modalStyles = document.createElement("style");

modalStyles.textContent = `

    .universe-modal {

        position: fixed;
        inset: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 25px;

        background: rgba(1, 2, 12, .78);

        backdrop-filter: blur(14px);

        opacity: 0;

        visibility: hidden;

        transition:
            opacity .45s ease,
            visibility .45s ease;

        z-index: 9999;

    }


    .universe-modal.active {

        opacity: 1;

        visibility: visible;

    }


    .modal-card {

        position: relative;

        width: min(500px, 92vw);

        padding: 45px 30px 35px;

        border-radius: 28px;

        text-align: center;

        background:
            linear-gradient(
                145deg,
                rgba(35, 27, 75, .94),
                rgba(7, 9, 27, .97)
            );

        border: 1px solid rgba(190, 170, 255, .35);

        box-shadow:
            0 0 35px rgba(130, 100, 255, .25),
            0 0 100px rgba(70, 60, 180, .12),
            inset 0 0 30px rgba(255,255,255,.03);

        transform:
            translateY(30px)
            scale(.94);

        transition:
            transform .5s cubic-bezier(.2,.8,.2,1);

        overflow: hidden;

    }


    .universe-modal.active .modal-card {

        transform:
            translateY(0)
            scale(1);

    }


    .modal-card::before {

        content: "";

        position: absolute;

        width: 180px;
        height: 180px;

        top: -90px;
        left: 50%;

        transform: translateX(-50%);

        border-radius: 50%;

        background: var(--modal-color);

        filter: blur(70px);

        opacity: .18;

        pointer-events: none;

    }


    .modal-icon {

        position: relative;

        font-size: 58px;

        margin-bottom: 18px;

        display: block;

        filter:
            drop-shadow(
                0 0 15px var(--modal-color)
            );

        animation: modalFloat 3s ease-in-out infinite;

    }


    .modal-title {

        position: relative;

        margin-bottom: 15px;

        font-size: clamp(26px, 7vw, 38px);

        letter-spacing: 1px;

        background:
            linear-gradient(
                90deg,
                #ffffff,
                var(--modal-color),
                #ffffff
            );

        background-size: 200%;

        -webkit-background-clip: text;

        background-clip: text;

        color: transparent;

        animation: modalShine 5s linear infinite;

    }


    .modal-text {

        position: relative;

        max-width: 410px;

        margin: auto;

        color: #c5c1d8;

        font-size: 14px;

        line-height: 1.8;

    }


    .modal-close {

        position: absolute;

        top: 15px;
        right: 18px;

        width: 38px;
        height: 38px;

        border-radius: 50%;

        border: 1px solid rgba(210,200,255,.2);

        background: rgba(255,255,255,.05);

        color: white;

        font-size: 20px;

        cursor: pointer;

        transition: .3s ease;

    }


    .modal-close:hover {

        transform: rotate(90deg) scale(1.1);

        background: rgba(170,140,255,.2);

        box-shadow:
            0 0 20px rgba(160,130,255,.35);

    }


    .modal-orbit {

        position: absolute;

        width: 280px;
        height: 280px;

        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        border:

            1px solid
            rgba(190,170,255,.08);

        border-radius: 50%;

        pointer-events: none;

    }


    @keyframes modalFloat {

        0%, 100% {

            transform: translateY(0);

        }

        50% {

            transform: translateY(-8px);

        }

    }


    @keyframes modalShine {

        from {

            background-position: 0%;

        }

        to {

            background-position: 200%;

        }

    }


    @media (max-width: 600px) {

        .modal-card {

            padding:
                40px
                22px
                30px;

            border-radius: 24px;

        }


        .modal-icon {

            font-size: 48px;

        }


        .modal-text {

            font-size: 13px;

        }

    }

`;

document.head.appendChild(modalStyles);


/* =========================================
   ABRIR SECCIÓN
========================================= */

function openSection(section) {

    const data = sections[section];

    if (!data) {

        console.log("Sección no encontrada:", section);

        return;

    }


    /* Crear modal */

    const modal = document.createElement("div");

    modal.className = "universe-modal";

    modal.innerHTML = `

        <div
            class="modal-card"
            style="--modal-color: ${data.color}"
        >

            <div class="modal-orbit"></div>

            <button
                class="modal-close"
                aria-label="Cerrar"
            >
                ×
            </button>

            <span class="modal-icon">
                ${data.icon}
            </span>

            <h2 class="modal-title">
                ${data.title}
            </h2>

            <p class="modal-text">
                ${data.text}
            </p>

        </div>

    `;


    document.body.appendChild(modal);


    /* Animación de entrada */

    requestAnimationFrame(() => {

        modal.classList.add("active");

    });


    /* Botón cerrar */

    const closeButton =
        modal.querySelector(".modal-close");


    closeButton.addEventListener(
        "click",
        () => closeModal(modal)
    );


    /* Cerrar tocando fuera */

    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {

                closeModal(modal);

            }

        }
    );


    /* Cerrar con ESC */

    document.addEventListener(
        "keydown",
        function escapeHandler(event) {

            if (event.key === "Escape") {

                closeModal(modal);

                document.removeEventListener(
                    "keydown",
                    escapeHandler
                );

            }

        }
    );

}


/* =========================================
   CERRAR MODAL
========================================= */

function closeModal(modal) {

    modal.classList.remove("active");

    setTimeout(() => {

        modal.remove();

    }, 500);

}
