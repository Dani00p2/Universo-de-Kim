/* =========================================
   UNIVERSO DE KIM
   Sistema principal
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
   SECCIONES
========================================= */

const sections = {

    recuerdos: {
        icon: "⭐",
        title: "Nuestros recuerdos",
        text:
            "Pequeños momentos que quizá para el mundo no significan demasiado, pero que para mí se quedaron guardados.",
        color: "#b9a7ff"
    },

    cartas: {
        icon: "💌",
        title: "Cartitas para mi niña",
        text:
            "Porque decirte solamente que te amo se me hizo demasiado poco. Así que hice un universo entero para ti. 🎀💜",
        color: "#d6bfff"
    },

    musica: {
        icon: "🎵",
        title: "Nuestra música",
        text:
            "Canciones que tienen una forma muy extraña de terminar llevándome hasta ti.",
        color: "#91b5ff"
    },

    constelacion: {
        icon: "✦",
        title: "Nuestra constelación",
        text:
            "Cada estrella puede guardar una fecha, una frase, una memoria o una pequeña parte de nuestra historia.",
        color: "#c4b5ff"
    },

    yoongi: {
        icon: "🐈‍⬛",
        title: "Yoongi's Room",
        text:
            "Un pequeño espacio ficticio inspirado en la personalidad pública de Yoongi. No representa al artista real ni habla en su nombre.",
        color: "#9faeff"
    },

    secreto: {
        icon: "🔐",
        title: "Zona secreta",
        text:
            "Hay cosas que no deberían encontrarse tan fácilmente. Algunas partes de este universo están hechas para descubrirse.",
        color: "#a98cff"
    }

};


/* =========================================
   ABRIR SECCIÓN
========================================= */

function openSection(section) {

    const data = sections[section];

    if (!data) return;

    const modal = document.createElement("div");

    modal.className = "universe-modal";

    modal.innerHTML = `

        <div class="modal-card"
             style="--modal-color:${data.color}">

            <div class="modal-orbit"></div>

            <button class="modal-close"
                    aria-label="Cerrar">
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

            <button class="enter-section"
                    data-section="${section}">
                Entrar ✨
            </button>

        </div>

    `;

    document.body.appendChild(modal);

    requestAnimationFrame(() => {
        modal.classList.add("active");
    });

    const closeButton =
        modal.querySelector(".modal-close");

    closeButton.addEventListener("click", () => {
        closeModal(modal);
    });

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal(modal);
        }

    });

    const enterButton =
        modal.querySelector(".enter-section");

    enterButton.addEventListener("click", () => {

        showSectionMessage(
            section,
            modal
        );

    });

}


/* =========================================
   CONTENIDO
========================================= */

function showSectionMessage(section, modal) {

    const card =
        modal.querySelector(".modal-card");

    if (section === "recuerdos") {
        showMemories(card, modal);
        return;
    }

    if (section === "cartas") {
        showLettersMenu(card, modal);
        return;
    }

    const data = sections[section];

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            ${data.icon}
        </span>

        <h2 class="modal-title">
            ${data.title}
        </h2>

        <p class="modal-text">

            Esta parte de mi universo todavía
            está tomando forma.

            <br><br>

            Pero no te preocupes, princesa.

            <br><br>

            La estoy construyendo poquito a
            poquito para que cuando esté lista
            sea todavía más bonita para ti. ✨💜

        </p>

    `;

    card.querySelector(".modal-close")
        .addEventListener("click", () => {
            closeModal(modal);
        });

}


/* =========================================
   CARTAS
========================================= */

const letters = {

    1: {
        icon: "💌",
        title: "Te amo a través de todo lo que me hace ser yo",

        text: `
            Deberían normalizar dedicar sentimientos.

            <br><br>

            Dedicar películas, canciones, escenas,
            personajes, deportes, recuerdos,
            lugares, sueños y todas esas pequeñas
            cosas que quizá para los demás no
            significan demasiado, pero que para
            nosotros pueden significar el mundo entero.

            <br><br>

            Porque yo podría simplemente decirte:

            <br><br>

            <strong>“Te amo.”</strong>

            <br><br>

            Pero siento que esas dos palabras no
            alcanzan para explicarte todo lo que
            siento por ti.

            <br><br>

            Así que hoy quiero dedicarte un pedacito
            de todas las cosas que amo.

            <br><br>

            Amor, te dedico esa escena de
            <em>LEGO Batman: La película</em> en la que
            Batman mira a Batgirl y, por un momento,
            todo parece cambiar.

            <br><br>

            Como si el mundo se detuviera.

            <br><br>

            Como si todo lo demás dejara de importar
            y solo existiera esa persona frente a él.

            <br><br>

            Te dedico esa mirada.

            <br><br>

            Porque creo que así te miro yo a ti.

            <br><br>

            Como si, entre todas las personas del
            mundo, mis ojos siempre terminaran
            encontrándote.

            <br><br>

            Te dedico las Artes Marciales Mixtas
            que practico.

            <br><br>

            Porque he estado lesionada.

            He tenido días en los que no he podido más
            y momentos en los que seguir luchando ha
            sido difícil.

            <br><br>

            Pero aun así, nunca he dejado de hacerlo.

            <br><br>

            Y quizá por eso te dedico este deporte.

            <br><br>

            Porque incluso cuando las cosas se ponen
            difíciles, incluso cuando duele, incluso
            cuando parece más fácil rendirse...

            <br><br>

            yo no podría soltarte tan fácilmente.

            <br><br>

            No podría dejar de luchar por ti.

            <br><br>

            Te amo tanto como amo el Box.

            Como amo el Taekwondo.

            Como amo las Artes Marciales Mixtas.

            <br><br>

            Como amo esa sensación de estar frente a
            algo que parece difícil y aun así pensar:

            <br><br>

            <strong>“Voy a intentarlo una vez más.”</strong>

            <br><br>

            Y si alguna vez la vida se siente como una
            pelea demasiado difícil, quiero que sepas
            que no tienes que pelear sola.

            <br><br>

            Yo voy a estar contigo.

            <br><br>

            Te dedico <em>Tu tiempo llama</em>.

            <br><br>

            Porque hay historias que hacen que uno
            piense en el tiempo, en las coincidencias
            y en todas las personas que llegan a
            nuestra vida de formas que jamás
            imaginamos.

            <br><br>

            Y hay una escena que siempre me hace
            pensar en ti.

            <br><br>

            Cuando hablan sobre viajar en el tiempo
            y aparece esa idea de volver a un momento
            antes de conocer a la persona que vas a amar.

            <br><br>

            Y amor...

            <br><br>

            si yo pudiera viajar en el tiempo,
            creo que haría exactamente lo mismo.

            <br><br>

            Iría a un momento antes de conocerte.

            <br><br>

            Buscaría a la Dennis de ese momento.

            <br><br>

            Y le diría:

            <br><br>

            <strong>
            “Vas a conocer a una mujer que vas a amar
            muchísimo.
            <br><br>
            No la sueltes.
            <br><br>
            Tómala de la mano.
            <br><br>
            Y no la sueltes nunca.”
            </strong>

            <br><br>

            También te dedico ese momento en el que,
            a través del tiempo, dos personas terminan
            encontrándose.

            <br><br>

            Cuando simplemente están acostados en
            el pasto y se quedan mirándose.

            <br><br>

            Sin necesidad de decir nada.

            <br><br>

            Solo mirándose.

            <br><br>

            Y creo que hay algo muy bonito en eso.

            <br><br>

            En encontrar a alguien y sentir que,
            aunque el mundo cambie, aunque el tiempo
            pase, aunque todo sea diferente...

            <br><br>

            hay algo en esa persona que todavía se
            siente familiar.

            <br><br>

            Como si una parte de ti supiera:

            <br><br>

            <strong>“Eres tú.”</strong>

            <br><br>

            ♡
        `
    },


    2: {
        icon: "🌙",
        title: "Si pudiera volver atrás",

        text: `
            Amor...

            <br><br>

            A veces pienso en lo extraño que es el
            tiempo.

            <br><br>

            En todas las decisiones, lugares,
            coincidencias y momentos que tuvieron
            que existir para que tú y yo termináramos
            encontrándonos.

            <br><br>

            Y si pudiera volver atrás...

            <br><br>

            no cambiaría nada.

            <br><br>

            Bueno...

            quizá solamente iría a buscar a la Dennis
            de antes de conocerte.

            <br><br>

            La encontraría y le diría:

            <br><br>

            <strong>
            “Vas a conocer a una mujer que vas a amar
            muchísimo.
            <br><br>
            No la sueltes.
            <br><br>
            Tómala de la mano.
            <br><br>
            Y no la sueltes nunca.”
            </strong>

            <br><br>

            Porque todavía me parece increíble pensar
            que alguna vez tú fuiste alguien que yo
            todavía no conocía.

            <br><br>

            Y ahora eres una de esas personas que
            aparecen en prácticamente todas las partes
            de mi vida.

            <br><br>

            En mis canciones.

            <br><br>

            En mi piano.

            <br><br>

            En las cosas que veo.

            <br><br>

            En los recuerdos.

            <br><br>

            En mis pensamientos más random.

            <br><br>

            Y sí...

            <br><br>

            hasta en cosas que probablemente ni
            siquiera deberían hacerme pensar en ti.
            JAJAJA.

            <br><br>

            Supongo que así es cuando alguien termina
            convirtiéndose en parte de tu historia.

            <br><br>

            Y si pudiera vivir todos esos momentos
            otra vez...

            <br><br>

            te volvería a encontrar.

            <br><br>

            Una y otra vez.

            <br><br>

            En cualquier época.

            <br><br>

            En cualquier universo.

            <br><br>

            En cualquier línea del tiempo.

            <br><br>

            Siempre tú. ♡
        `
    },


    3: {
        icon: "🎀",
        title: "Lo que más me gusta de ti",

        text: `
            Según yo...

            <br><br>

            lo que más me gusta de ti es una sola cosa.

            <br><br>

            Pero no.

            <br><br>

            Lo que más me gusta de ti es que llegaste
            a mi vida de una forma tan random que
            todavía me da risa acordarme.

            <br><br>

            Llegaste a la casa de Gael y, aunque parezca
            una tontería, una de las primeras cosas que
            noté fueron tus calcetas con la bandera gay.

            <br><br>

            JAJAJAJAJAJA.

            <br><br>

            Pero mientras más te fui conociendo,
            más me di cuenta de que no era una sola
            cosa la que me gustaba de ti.

            <br><br>

            Me gusta cómo me haces sentir.

            <br><br>

            Porque contigo me siento cómoda,
            tranquila y en paz.

            <br><br>

            Eres de esas personas con las que puedo
            estar haciendo absolutamente nada y aun
            así sentir que estoy en el mejor lugar
            del mundo.

            <br><br>

            Me gusta cuando me cuentas de One Piece,
            de BTS, de Yoongi o de cualquier cosa que
            te emocione.

            <br><br>

            Muchas veces ni siquiera entiendo todo,
            pero me encanta escucharte porque se nota
            lo feliz que te hace hablar de eso.

            <br><br>

            Y verte feliz se ha vuelto en una de mis
            cosas favoritas.

            <br><br>

            Me gusta tu risa.

            <br><br>

            Me gusta tu sonrisa.

            <br><br>

            Me gustan tus ojos.

            <br><br>

            Me gusta tu voz.

            <br><br>

            De hecho, esto va a sonar medio loco,
            y más viniendo de mí...

            <br><br>

            pero prefiero escuchar tu voz que mi
            canción favorita. 💗

            <br><br>

            Me gustan esos momentos en los que nos
            quedamos mirando y yo te digo:

            <br><br>

            <strong>“¿Qué?”</strong>

            <br><br>

            Y tú respondes:

            <br><br>

            <strong>“Nada.”</strong>

            <br><br>

            Y luego las dos nos reímos.

            <br><br>

            JAJAJAJAJAJA.

            <br><br>

            Me encantan tus abrazos y tus besos.

            <br><br>

            Me encanta cuando me agarras de la cintura
            y haces que se me olvide cómo funciona
            mi cerebro. 💭🧃

            <br><br>

            También me encanta verte haciendo cosplay.

            <br><br>

            Y nunca es suficiente, pero de verdad soy
            tu fan número uno.

            <br><br>

            Y si soy completamente sincera...

            <br><br>

            creo que lo que más me gusta de ti es que
            ahora estás en todas las partes del libro
            de mi vida.

            <br><br>

            Cada canción romántica me recuerda a ti.

            <br><br>

            Cada vez que escucho algo de BTS pienso
            en ti.

            <br><br>

            Cada vez que veo algo de One Piece pienso
            en ti.

            <br><br>

            Cada vez que me siento frente al piano
            pienso en ti.

            <br><br>

            Y por eso...

            <br><br>

            quizá sí.

            <br><br>

            Lo que más me gusta de ti...

            <br><br>

            es todo todito. 💗

            <br><br>

            Porque incluso después de todo este tiempo,
            todavía te veo y pienso:

            <br><br>

            <strong>
            “Wow... sí que me gusta mucho esta niña.”
            </strong>

            <br><br>

            ♡
        `
    },


    4: {
        icon: "🎹",
        title: "Mi piano ya te conoce",

        text: `
            Amor...

            <br><br>

            Te dedico mi piano.

            <br><br>

            Te dedico esa sensación de paz,
            tranquilidad y felicidad que siento
            cada vez que lo toco.

            <br><br>

            Ese momento en el que todo parece
            desaparecer y solo quedamos yo,
            las teclas y la música.

            <br><br>

            También te dedico ese sentimiento raro
            que sentí la primera vez que conocí un piano.

            <br><br>

            Me daba hasta pena acercarme.

            <br><br>

            Qué raro, ¿no?

            <br><br>

            Pero míranos ahora.

            <br><br>

            Ahora no existe Dennis sin piano.

            <br><br>

            Y creo que, de alguna forma, tampoco
            quiero que exista un futuro en el que
            tú no estés.

            <br><br>

            Porque hay cosas que llegan a nuestra
            vida y terminan convirtiéndose en una
            parte de nosotros.

            <br><br>

            El piano fue una de ellas.

            <br><br>

            Y tú también.

            <br><br>

            Mi piano ya te conoce, ¿sabes por qué?

            <br><br>

            Porque cada nota bonita que toco lleva
            un poquito de mi inspiración.

            <br><br>

            Y mi inspiración eres tú. 💗

            <br><br>

            Así que cada vez que escuches una melodía
            que salga de esas teclas...

            <br><br>

            quizá haya un pedacito de ti escondido
            entre las notas.
        `
    },


    5: {
        icon: "🪐",
        title: "En cualquier universo",

        text: `
            De todas las canciones que puedo dedicarte,

            <br><br>

            de todas las películas que puedo compartir
            contigo,

            <br><br>

            de todos los lugares a los que podría viajar,

            <br><br>

            de todos los años a los que podría volver,

            <br><br>

            de todas las cosas que amo...

            <br><br>

            tú eres la única que no quiero solamente
            dedicar.

            <br><br>

            Tú eres la que quiero vivir.

            <br><br>

            Y si pudiera viajar en el tiempo,
            te buscaría en todos ellos.

            <br><br>

            Si pudiera elegir una canción,
            elegiría todas las que me recuerdan a ti.

            <br><br>

            Si pudiera elegir una pelea,
            elegiría todas las que tuviera que luchar
            para no perderte.

            <br><br>

            Y si pudiera elegir una vida...

            <br><br>

            te elegiría a ti.

            <br><br>

            Una y otra vez.

            <br><br>

            En cualquier época.

            <br><br>

            En cualquier universo.

            <br><br>

            En cualquier línea del tiempo.

            <br><br>

            Siempre tú.

            <br><br>

            <strong>
            Te amo a través de todas las cosas
            que me hacen ser yo.
            </strong>

            <br><br>

            ♡
        `
    },


    6: {
        icon: "💗",
        title: "Para cuando tengas un día feo",

        text: `
            Mi niña,

            <br><br>

            si estás leyendo esto porque hoy no fue
            un buen día, ven tantito.

            <br><br>

            No tienes que arreglar todo ahora.

            <br><br>

            No tienes que estar bien todo el tiempo.

            <br><br>

            Y tampoco tienes que explicarme
            perfectamente qué sientes.

            <br><br>

            Solo quiero recordarte que estás
            acompañada.

            <br><br>

            Que hay alguien aquí que te ama.

            <br><br>

            Alguien que disfruta escucharte hablar
            de las cosas que te emocionan.

            <br><br>

            Alguien que ama tu risa.

            <br><br>

            Tu voz.

            <br><br>

            Tus abrazos.

            <br><br>

            Tus tonterías.

            <br><br>

            Y hasta esas pequeñas cosas que quizá
            tú ni siquiera notas.

            <br><br>

            Así que respira.

            <br><br>

            Descansa un poquito.

            <br><br>

            Y recuerda:

            <br><br>

            no tienes que poder con todo tú sola.

            <br><br>

            Te amo, mi niña.

            <br><br>

            Y aquí estoy. 💜
        `
    }

};


/* =========================================
   MENÚ DE CARTAS
========================================= */

function showLettersMenu(card, modal) {

    card.classList.add("letters-card");

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            💌
        </span>

        <h2 class="modal-title">
            Cartitas para mi niña
        </h2>

        <p class="modal-text">
            Cada una guarda una parte diferente
            de todo lo que quiero decirte. 💜
        </p>

        <div class="letters-list">

            ${Object.entries(letters).map(
                ([id, letter]) => `
                    <button
                        class="letter-choice"
                        onclick="openLetter(${id})"
                    >
                        <span>${letter.icon}</span>
                        ${letter.title}
                    </button>
                `
            ).join("")}

        </div>

    `;

    card.querySelector(".modal-close")
        .addEventListener("click", () => {
            closeModal(modal);
        });

}


/* =========================================
   ABRIR CARTA
========================================= */

function openLetter(number) {

    const letter = letters[number];

    if (!letter) return;

    const card =
        document.querySelector(".letters-card");

    if (!card) return;

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            ${letter.icon}
        </span>

        <h2 class="modal-title">
            ${letter.title}
        </h2>

        <div class="letter-content">
            ${letter.text}
        </div>

        <button class="enter-section"
                onclick="backToLetters(this)">
            Volver a las cartas 💌
        </button>

    `;

    card.querySelector(".modal-close")
        .addEventListener("click", () => {

            const modal =
                card.closest(".universe-modal");

            closeModal(modal);

        });

}


/* =========================================
   VOLVER A CARTAS
========================================= */

function backToLetters(button) {

    const card =
        button.closest(".modal-card");

    const modal =
        card.closest(".universe-modal");

    showLettersMenu(card, modal);

}


/* =========================================
   RECUERDOS
========================================= */

const memories = {

    1: {
        icon: "🧦",
        title: "Las calcetas",
        text: `
            Todavía me da risa pensar en cómo llegaste
            a mi vida.

            <br><br>

            Llegaste a la casa de Gael y una de las
            primeras cosas que noté fueron tus calcetas
            con la bandera gay.

            <br><br>

            JAJAJAJAJAJA.

            <br><br>

            Y quién iba a decir que esa niña que llegó
            de una forma tan random iba a terminar
            convirtiéndose en alguien tan importante
            para mí.

            <br><br>

            Definitivamente no era la primera cosa que
            esperaba recordar de alguien que terminaría
            estando en tantas partes de mi vida. 💗
        `
    },


    2: {
        icon: "🎀",
        title: "Cuando me cuentas tus cosas",
        text: `
            Me gusta cuando me cuentas de One Piece,
            de BTS, de Yoongi o de cualquier cosa que
            te emocione.

            <br><br>

            Muchas veces ni siquiera entiendo todo.

            <br><br>

            Pero me encanta escucharte.

            <br><br>

            Porque se nota lo feliz que te hace hablar
            de las cosas que amas.

            <br><br>

            Y verte feliz se ha convertido en una de
            mis cosas favoritas.

            <br><br>

            Creo que eso es de las cosas que más me
            gustan de quererte:
            aprender poquito a poquito todas esas
            partes de ti. 💜
        `
    },


    3: {
        icon: "👀",
        title: "¿Qué? ... Nada",
        text: `
            Hay momentos que duran literalmente unos
            segundos y aun así se quedan guardados.

            <br><br>

            Como cuando nos quedamos mirándonos.

            <br><br>

            Yo te digo:

            <br><br>

            <strong>“¿Qué?”</strong>

            <br><br>

            Y tú:

            <br><br>

            <strong>“Nada.”</strong>

            <br><br>

            Y luego las dos terminamos riéndonos.

            <br><br>

            JAJAJAJAJAJA.

            <br><br>

            No sé por qué me encanta tanto.

            <br><br>

            Supongo que porque es muy nuestro.

            <br><br>

            No necesitamos estar haciendo algo
            increíble para que yo sea feliz contigo.
        `
    },


    4: {
        icon: "🎹",
        title: "Mi piano ya te conoce",
        text: `
            Cada vez que me siento frente al piano
            pienso en ti.

            <br><br>

            Mi piano ya te conoce, ¿sabes por qué?

            <br><br>

            Porque cada nota bonita que toco lleva
            un poquito de mi inspiración.

            <br><br>

            Y mi inspiración eres tú.

            <br><br>

            Así que, aunque tú no estés ahí conmigo
            cuando toco, de alguna forma terminas
            estando.

            <br><br>

            Porque ahora también formas parte de
            esa música. 💗
        `
    },


    5: {
        icon: "💋",
        title: "Ese día en el gimnasio",
        text: `
            Este es probablemente uno de mis recuerdos
            favoritos.

            <br><br>

            Porque ese gimnasio siempre ha sido una
            parte importante de mí.

            <br><br>

            Ahí me la pasaba casi todos los días
            entrenando.

            <br><br>

            Pegándole al costal.

            <br><br>

            Dando patadas.

            <br><br>

            Desahogándome.

            <br><br>

            Sacando todo lo que traía encima.

            <br><br>

            Pero ese día fue diferente.

            <br><br>

            Porque estabas tú.

            <br><br>

            Y aunque había una cámara...

            <br><br>

            nosotras estábamos en nuestro mundo.

            <br><br>

            No nos importó demasiado que estuviera ahí.

            <br><br>

            Solo pasó.

            <br><br>

            JAJAJAJAJAJA.

            <br><br>

            Y recuerdo que me gustó muchísimo poder
            enseñarte una parte de mi hogar.

            <br><br>

            Ese lugar donde tantas veces había ido
            a entrenar, a pegarle al costal, a cansarme
            y a desahogarme.

            <br><br>

            Pero ese día...

            <br><br>

            no podía dejar de verte.

            <br><br>

            Mi objetivo claro no fue el costal.

            <br><br>

            Ni las patadas.

            <br><br>

            Ni siquiera entrenar.

            <br><br>

            Ese día mi objetivo era simplemente
            verte.

            <br><br>

            Y creo que lo que más recuerdo es cómo
            me sentía.

            <br><br>

            Por primera vez, me sentía bien.

            <br><br>

            Sin presiones.

            <br><br>

            Sin tener que demostrar nada.

            <br><br>

            Sin necesidad de estar peleando contra
            algo.

            <br><br>

            Solo estaba ahí contigo.

            <br><br>

            Y qué bonito se sintió.

            <br><br>

            Porque ese lugar que tantas veces había
            sido donde me desahogaba, ese día se
            convirtió simplemente en el lugar donde
            quería seguir viéndote.

            <br><br>

            💗
        `
    },


    6: {
        icon: "🎬",
        title: "Mi fan número uno",
        text: `
            Me encanta verte haciendo cosplay.

            <br><br>

            Y probablemente nunca es suficiente
            cuando te digo que me encanta.

            <br><br>

            Porque de verdad soy tu fan número uno.

            <br><br>

            Me gusta verte emocionarte con lo que
            haces y ver cómo te conviertes en cada
            personaje.

            <br><br>

            Y quizá lo más bonito es que puedo estar
            ahí viendo una parte de ti que disfrutas
            muchísimo.

            <br><br>

            Así que sí.

            <br><br>

            Oficialmente tienes una fan.

            <br><br>

            Y no pienso renunciar a mi puesto. 🎀💜
        `
    }

};


/* =========================================
   MOSTRAR RECUERDOS
========================================= */

function showMemories(card, modal) {

    card.classList.add("memory-card");

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            ⭐
        </span>

        <h2 class="modal-title">
            Nuestra pequeña galaxia
        </h2>

        <p class="modal-text">
            Toca una estrella, mi niña.
            Cada una guarda un pedacito
            de nuestra historia. 💜
        </p>

        <div class="memory-galaxy">

            ${Object.keys(memories).map(
                (id, index) => `
                    <button
                        class="memory-star star-${index + 1}"
                        onclick="openMemory(${id})">
                        ✦
                    </button>
                `
            ).join("")}

            <div class="memory-core">
                💜
            </div>

        </div>

    `;

    card.querySelector(".modal-close")
        .addEventListener("click", () => {
            closeModal(modal);
        });

}


/* =========================================
   ABRIR RECUERDO
========================================= */

function openMemory(number) {

    const memory = memories[number];

    if (!memory) return;

    const card =
        document.querySelector(".memory-card");

    if (!card) return;

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            ${memory.icon}
        </span>

        <h2 class="modal-title">
            ${memory.title}
        </h2>

        <div class="letter-content">
            ${memory.text}
        </div>

        <button class="enter-section"
                onclick="backToMemories(this)">
            Volver a las estrellas ✦
        </button>

    `;

    card.querySelector(".modal-close")
        .addEventListener("click", () => {

            const modal =
                card.closest(".universe-modal");

            closeModal(modal);

        });

}


/* =========================================
   VOLVER A RECUERDOS
========================================= */

function backToMemories(button) {

    const card =
        button.closest(".modal-card");

    const modal =
        card.closest(".universe-modal");

    showMemories(card, modal);

}


/* =========================================
   CERRAR MODAL
========================================= */

function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("active");

    setTimeout(() => {

        if (modal) {
            modal.remove();
        }

    }, 500);

}


/* =========================================
   ESTILOS DE MODALES
========================================= */

const extraStyles =
    document.createElement("style");

extraStyles.textContent = `

/* =========================================
   MODAL
========================================= */

.universe-modal {

    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background:
        rgba(0, 0, 8, .72);

    backdrop-filter: blur(14px);

    z-index: 100;

    opacity: 0;

    transition:
        opacity .5s ease;

}


.universe-modal.active {
    opacity: 1;
}


/* =========================================
   TARJETA
========================================= */

.modal-card {

    position: relative;

    width: min(620px, 94vw);
    max-height: 88vh;

    overflow-y: auto;

    padding: 42px 30px 30px;

    border:
        1px solid
        rgba(210,195,255,.28);

    border-radius: 30px;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(120,90,220,.2),
            transparent 48%
        ),
        rgba(9, 8, 27, .94);

    box-shadow:
        0 0 35px
        rgba(130,100,255,.22),

        0 25px 100px
        rgba(0,0,0,.65);

    text-align: center;

    transform:
        scale(.88)
        translateY(20px);

    transition:
        transform .55s cubic-bezier(.2,.8,.2,1);

}


.universe-modal.active .modal-card {

    transform:
        scale(1)
        translateY(0);

}


.modal-card::before {

    content: "";

    position: absolute;

    inset: 1px;

    border-radius: 29px;

    pointer-events: none;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.08),
            transparent 30%,
            transparent 70%,
            rgba(160,130,255,.06)
        );

}


/* =========================================
   ORBITA
========================================= */

.modal-orbit {

    position: absolute;

    width: 250px;
    height: 70px;

    left: 50%;
    top: 15px;

    transform:
        translateX(-50%)
        rotate(-12deg);

    border:
        1px solid
        rgba(175,150,255,.12);

    border-radius: 50%;

    pointer-events: none;

}


/* =========================================
   ICONO
========================================= */

.modal-icon {

    position: relative;

    display: block;

    font-size: 42px;

    margin-bottom: 12px;

    filter:
        drop-shadow(
            0 0 12px
            rgba(170,145,255,.6)
        );

}


/* =========================================
   TITULO
========================================= */

.modal-title {

    position: relative;

    font-size: clamp(24px, 6vw, 34px);

    line-height: 1.1;

    color: white;

    margin-bottom: 18px;

    background:
        linear-gradient(
            90deg,
            #ffffff,
            var(--modal-color, #cbbdff),
            #ffffff
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;

}


/* =========================================
   TEXTO
========================================= */

.modal-text,
.letter-content {

    position: relative;

    color: #c9c5d8;

    font-size: 14px;

    line-height: 1.75;

}


.letter-content {

    text-align: left;

    max-height: 58vh;

    overflow-y: auto;

    padding-right: 8px;

}


.letter-content strong {

    color: #eeeaff;

}


.letter-content em {

    color: #d0c3ff;

}


/* =========================================
   CERRAR
========================================= */

.modal-close {

    position: absolute;

    top: 14px;
    right: 16px;

    width: 35px;
    height: 35px;

    border: none;

    border-radius: 50%;

    background:
        rgba(255,255,255,.06);

    color: #cfc8e9;

    font-size: 25px;

    line-height: 1;

    cursor: pointer;

    transition: .3s ease;

}


.modal-close:hover {

    transform:
        rotate(90deg)
        scale(1.1);

    background:
        rgba(180,150,255,.18);

    color: white;

}


/* =========================================
   BOTÓN
========================================= */

.enter-section {

    position: relative;

    margin-top: 25px;

    padding: 12px 25px;

    border:
        1px solid
        rgba(205,190,255,.4);

    border-radius: 30px;

    background:
        rgba(130,100,220,.18);

    color: white;

    cursor: pointer;

    font-size: 13px;

    transition: .3s ease;

}


.enter-section:hover {

    transform:
        scale(1.06);

    background:
        rgba(145,115,240,.32);

    box-shadow:
        0 0 25px
        rgba(150,120,255,.4);

}


/* =========================================
   LISTA DE CARTAS
========================================= */

.letters-list {

    display: flex;

    flex-direction: column;

    gap: 10px;

    margin-top: 20px;

}


.letter-choice {

    width: 100%;

    padding: 14px 16px;

    display: flex;

    align-items: center;

    gap: 12px;

    border:
        1px solid
        rgba(190,170,255,.18);

    border-radius: 18px;

    background:
        rgba(100,80,180,.10);

    color: #ddd8ee;

    text-align: left;

    cursor: pointer;

    transition: .3s ease;

}


.letter-choice span {

    font-size: 20px;

}


.letter-choice:hover {

    transform:
        translateX(5px);

    background:
        rgba(130,105,220,.22);

    border-color:
        rgba(205,190,255,.4);

    color: white;

    box-shadow:
        0 0 20px
        rgba(130,100,230,.18);

}


/* =========================================
   GALAXIA DE RECUERDOS
========================================= */

.memory-card {

    max-height: 88vh;

}


.memory-galaxy {

    position: relative;

    width: 320px;
    height: 250px;

    margin: 25px auto 5px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(140,110,255,.13),
            transparent 65%
        );

}


.memory-core {

    position: absolute;

    left: 50%;
    top: 50%;

    transform:
        translate(-50%, -50%);

    width: 58px;
    height: 58px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            #a895ff,
            #40317c 60%,
            #100d25
        );

    box-shadow:
        0 0 25px
        rgba(170,145,255,.65),

        0 0 70px
        rgba(120,90,230,.35);

    animation:
        corePulse 3s ease-in-out infinite;

    font-size: 23px;

}


.memory-star {

    position: absolute;

    width: 48px;
    height: 48px;

    border: none;

    border-radius: 50%;

    background:
        rgba(120,100,210,.10);

    color: #e3dcff;

    font-size: 25px;

    cursor: pointer;

    transition: .35s ease;

    text-shadow:
        0 0 10px #a895ff;

}


.memory-star:hover {

    transform:
        scale(1.35);

    color: white;

    text-shadow:
        0 0 15px white,
        0 0 35px #a895ff;

}


.star-1 {

    left: 25px;
    top: 35px;

}


.star-2 {

    right: 30px;
    top: 22px;

}


.star-3 {

    left: 8px;
    bottom: 25px;

}


.star-4 {

    right: 15px;
    bottom: 22px;

}


.star-5 {

    left: 50%;
    top: 5px;

    transform:
        translateX(-50%);

}


.star-5:hover {

    transform:
        translateX(-50%)
        scale(1.35);

}


.star-6 {

    left: 50%;
    bottom: 2px;

    transform:
        translateX(-50%);

}


.star-6:hover {

    transform:
        translateX(-50%)
        scale(1.35);

}


@keyframes corePulse {

    0%, 100% {

        transform:
            translate(-50%, -50%)
            scale(.95);

    }

    50% {

        transform:
            translate(-50%, -50%)
            scale(1.08);

    }

}


/* =========================================
   SCROLL
========================================= */

.modal-card::-webkit-scrollbar,
.letter-content::-webkit-scrollbar {

    width: 5px;

}


.modal-card::-webkit-scrollbar-thumb,
.letter-content::-webkit-scrollbar-thumb {

    background:
        rgba(180,155,255,.3);

    border-radius: 10px;

}


/* =========================================
   CELULAR
========================================= */

@media (max-width: 600px) {

    .modal-card {

        padding:
            38px
            20px
            25px;

        border-radius: 24px;

    }


    .modal-text,
    .letter-content {

        font-size: 13px;

        line-height: 1.7;

    }


    .memory-galaxy {

        width: 285px;
        height: 225px;

    }


    .letter-choice {

        font-size: 12px;

        padding: 12px;

    }

}

`;

document.head.appendChild(extraStyles);
