/* =========================================
   UNIVERSO DE KIM
   Sistema principal de interacciones
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
   CONTENIDO DE LAS SECCIONES
========================================= */

const sections = {

    recuerdos: {

        icon: "⭐",

        title: "Nuestros recuerdos",

        text:
            "Hay momentos que quizá parecían pequeños cuando sucedieron, pero que ahora forman parte de mi universo favorito: el que comparto contigo.",

        color: "#b9a7ff"

    },


    cartas: {

        icon: "💌",

        title: "Cartitas para mi niña",

        text:
            "Porque decirte solamente que te amo se me hizo demasiado básico. Así que hice un universo entero para compensarlo, obvio. 🎀💜",

        color: "#d6bfff"

    },


    musica: {

        icon: "🎵",

        title: "Nuestra música",

        text:
            "Canciones, melodías y momentos que tienen una manera muy extraña de hacerme pensar en ti.",

        color: "#91b5ff"

    },


    constelacion: {

        icon: "✦",

        title: "Nuestra constelación",

        text:
            "Cada estrella guarda algo. Una fecha, una memoria, una palabra o simplemente una razón por la que me alegra que estés aquí.",

        color: "#c4b5ff"

    },


    yoongi: {

        icon: "🐈‍⬛",

        title: "Yoongi's Room",

        text:
            "Un pequeño espacio ficticio inspirado en la personalidad pública de Yoongi. No representa al artista real ni pretende hablar en su nombre. Solo es una parte especial de este universo creada para ti.",

        color: "#9faeff"

    },


    secreto: {

        icon: "🔐",

        title: "Zona secreta",

        text:
            "Este lugar todavía no debería aparecer tan fácilmente. Algunas cosas bonitas están hechas para descubrirse.",

        color: "#a98cff"

    }

};


/* =========================================
   ABRIR UNA SECCIÓN
========================================= */

function openSection(section) {

    const data = sections[section];

    if (!data) {

        console.log(
            "Sección no encontrada:",
            section
        );

        return;

    }


    const modal =
        document.createElement("div");


    modal.className =
        "universe-modal";


    modal.innerHTML = `

        <div
            class="modal-card"
            style="--modal-color:${data.color}"
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

            <button
                class="enter-section"
                data-section="${section}"
            >
                Entrar ✨
            </button>

        </div>

    `;


    document.body.appendChild(modal);


    /* Animación de entrada */

    requestAnimationFrame(() => {

        modal.classList.add("active");

    });


    /* Botón cerrar */

    const closeButton =
        modal.querySelector(
            ".modal-close"
        );


    closeButton.addEventListener(
        "click",
        () => closeModal(modal)
    );


    /* Cerrar tocando fuera */

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeModal(modal);

            }

        }
    );


    /* Botón entrar */

    const enterButton =
        modal.querySelector(
            ".enter-section"
        );


    enterButton.addEventListener(
        "click",
        () => {

            showSectionMessage(
                section,
                modal
            );

        }
    );


    /* Cerrar con ESC */

    document.addEventListener(
        "keydown",
        function escapeHandler(event) {

            if (
                event.key === "Escape"
            ) {

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
   MOSTRAR CONTENIDO DE LA SECCIÓN
========================================= */

function showSectionMessage(
    section,
    modal
) {

    const card =
        modal.querySelector(
            ".modal-card"
        );


    const data =
        sections[section];


    /* =====================================
       CARTAS
    ===================================== */

    if (section === "cartas") {

        card.innerHTML = `

            <button
                class="modal-close"
                aria-label="Cerrar"
            >
                ×
            </button>

            <span class="modal-icon">
                💌
            </span>

            <h2 class="modal-title">
                Para mi niña
            </h2>

            <p class="modal-text">

                Mi niña, no sé si alguna vez voy
                a encontrar suficientes palabras
                para explicarte todo lo que
                significas para mí.

                <br><br>

                Pero sí sé algo:

                <br><br>

                Te amo muchísimo.

                <br><br>

                Amo tenerte en mi vida, amo
                nuestros momentos, nuestras
                tonterías y hasta esas pequeñas
                cosas que probablemente tú ni
                notas, pero que yo guardo con
                muchísimo cariño.

                <br><br>

                Y si hice todo este universo
                para ti, es porque una simple
                cartita claramente no me parecía
                suficiente. 🎀💜

            </p>

            <button
                class="enter-section"
                onclick="nextLetter(this)"
            >
                Una última, princesa 💌
            </button>

        `;

    }


    /* =====================================
       DEMÁS SECCIONES
    ===================================== */

    else {

        card.innerHTML = `

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

                Esta parte de mi universo
                todavía está tomando forma.

                <br><br>

                Pero no te preocupes,
                princesa.

                <br><br>

                La estoy construyendo poquito
                a poquito para que cuando esté
                lista sea todavía más bonita
                para ti. ✨💜

            </p>

        `;

    }


    /* Botón cerrar */

    card.querySelector(
        ".modal-close"
    ).addEventListener(
        "click",
        () => closeModal(modal)
    );

}


/* =========================================
   SEGUNDA CARTA
========================================= */

function nextLetter(button) {

    const card =
        button.closest(
            ".modal-card"
        );


    card.innerHTML = `

        <button
            class="modal-close"
            aria-label="Cerrar"
        >
            ×
        </button>

        <span class="modal-icon">
            🌙
        </span>

        <h2 class="modal-title">
            Para mi princesa
        </h2>

        <p class="modal-text">

            Mi niña, no sé si alguna vez voy
            a encontrar suficientes palabras
            para explicarte todo lo que
            siento por ti.

            <br><br>

            Pero sí sé que te amo muchísimo.

            <br><br>

            Amo tenerte en mi vida, amo
            nuestros momentos, nuestras
            tonterías y esas pequeñas cosas
            que probablemente tú ni notas,
            pero que yo guardo con muchísimo
            cariño.

            <br><br>

            Y aunque a veces no sea la persona
            más cariñosa del planeta, quiero
            que sepas que contigo siento
            muchísimo.

            <br><br>

            Eres mi niña, mi princesa y una
            de las personas más especiales
            que tengo en mi vida. 🎀💜

        </p>

        <button
            class="enter-section"
            onclick="finalLetter(this)"
        >
            Una última, princesa 💌
        </button>

    `;


    card.querySelector(
        ".modal-close"
    ).addEventListener(
        "click",
        () => {

            const modal =
                card.closest(
                    ".universe-modal"
                );

            closeModal(modal);

        }
    );

}


/* =========================================
   CARTA FINAL
========================================= */

function finalLetter(button) {

    const card =
        button.closest(
            ".modal-card"
        );


    card.innerHTML = `

        <button
            class="modal-close"
            aria-label="Cerrar"
        >
            ×
        </button>

        <span class="modal-icon">
            🪐
        </span>

        <h2 class="modal-title">
            Mi lugar favorito
        </h2>

        <p class="modal-text">

            Mi princesa,

            <br><br>

            Entre todos los planetas, estrellas
            y universos que podrían existir,
            qué bonito que mi vida haya
            coincidido con la tuya.

            <br><br>

            Eres mi niña, mi personita especial
            y una de las partes más bonitas
            de mi vida.

            <br><br>

            No hice este universo porque
            pudiera explicar perfectamente
            todo lo que siento por ti.

            <br><br>

            Lo hice porque a veces siento
            tanto que decir simplemente
            "te amo" se queda cortito.

            <br><br>

            Así que aquí tienes un universo
            entero, princesa. 🌌💜

            <br><br>

            Te amo muchísimo, mi niña.

            <br><br>

            Siempre tú. 🪐🎀

        </p>

        <div
            style="
                margin-top:25px;
                font-size:11px;
                letter-spacing:3px;
                color:#aaa0e9;
            "
        >
            PARA MI NIÑA ✦
        </div>

    `;


    card.querySelector(
        ".modal-close"
    ).addEventListener(
        "click",
        () => {

            const modal =
                card.closest(
                    ".universe-modal"
                );

            closeModal(modal);

        }
    );

}


/* =========================================
   CERRAR MODAL
========================================= */

function closeModal(modal) {

    if (!modal) return;


    modal.classList.remove(
        "active"
    );


    setTimeout(() => {

        modal.remove();

    }, 500);

}


/* =========================================
   ESTILOS DE LOS BOTONES INTERNOS
========================================= */

const extraStyles =
    document.createElement("style");


extraStyles.textContent = `

    .enter-section {

        margin-top: 25px;

        padding: 12px 25px;

        border-radius: 30px;

        border:
            1px solid
            rgba(205,190,255,.4);

        background:
            rgba(130,100,220,.18);

        color: white;

        cursor: pointer;

        font-size: 13px;

        transition: .3s ease;

    }


    .enter-section:hover {

        transform:
            scale(1.07);

        background:
            rgba(145,115,240,.32);

        box-shadow:
            0 0 25px
            rgba(150,120,255,.4);

    }


    .enter-section:active {

        transform:
            scale(.95);

    }

`;

document.head.appendChild(
    extraStyles
);
