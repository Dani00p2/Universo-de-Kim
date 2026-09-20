/* =========================================
   UNIVERSO DE KIM
   SISTEMA PRINCIPAL
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
            "Cada estrella guarda una pequeña parte de nuestra historia.",
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
   ESC PARA CERRAR
========================================= */

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    const modal =
        document.querySelector(".universe-modal");

    if (modal) {
        closeModal(modal);
    }

});


/* =========================================
   CONTENIDO DE LAS SECCIONES
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


    if (section === "musica") {
        showMusic(card, modal);
        return;
    }


    if (section === "constelacion") {
        showConstellation(card, modal);
        return;
    }


    if (section === "yoongi") {
        showYoongiRoom(card, modal);
        return;
    }


    if (section === "secreto") {
        showSecret(card, modal);
        return;
    }

}


/* =========================================
   CARTAS
========================================= */

const letters = {

    1: {

        icon: "💌",

        title:
            "Te amo a través de todo lo que me hace ser yo",

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

            Porque he tenido días difíciles.

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

        icon: "🎀",

        title:
            "Mi lugar favorito eres tú",

        text: `

            Mi niña...

            <br><br>

            No sé en qué momento pasó, pero poco a
            poquito te convertiste en uno de mis
            lugares favoritos.

            <br><br>

            Y no hablo de un lugar al que pueda ir.

            <br><br>

            Hablo de esa sensación de estar contigo
            y sentir que puedo simplemente ser yo.

            <br><br>

            Puedo estar cansada, de malas, hablando
            de cualquier tontería o contando algo que
            probablemente no tiene absolutamente nada
            de sentido...

            <br><br>

            y aun así quiero contártelo a ti.

            <br><br>

            Porque contigo no siento que tenga que
            pensar demasiado las cosas.

            <br><br>

            Me gusta poder ser Dennis contigo.

            <br><br>

            La que se emociona por cualquier cosa.

            <br><br>

            La que se ríe de cosas bien tontas.

            <br><br>

            La que se queda viendo tu cara.

            <br><br>

            La que a veces no sabe qué decir y
            termina diciendo cualquier cosa. JAJAJA.

            <br><br>

            Y me encanta que tú conozcas todas
            esas partes de mí.

            <br><br>

            Porque no solamente amo a la persona
            que eres.

            <br><br>

            También amo la persona que puedo ser
            cuando estoy contigo.

            <br><br>

            Así que si algún día me preguntas cuál
            es mi lugar favorito...

            <br><br>

            probablemente voy a hacerme la interesante
            y decirte que depende.

            <br><br>

            Pero la verdad es mucho más sencilla.

            <br><br>

            Mi lugar favorito es donde estés tú.

            <br><br>

            Te amo, princesa. 💜

        `

    },


    3: {

        icon: "💗",

        title:
            "Me gusta nuestra forma de querernos",

        text: `

            Amor...

            <br><br>

            Hay algo de nosotras que me gusta
            muchísimo.

            <br><br>

            La forma en la que podemos pasar de
            estar hablando de algo súper serio a
            terminar riéndonos por una estupidez.

            <br><br>

            La forma en la que me cuentas tus cosas.

            <br><br>

            La forma en la que yo te cuento las mías.

            <br><br>

            La confianza que hemos ido construyendo.

            <br><br>

            Y esos pequeños momentos en los que
            simplemente sabemos que estamos bien.

            <br><br>

            No necesito que todos nuestros días
            sean perfectos.

            <br><br>

            No necesito que siempre sepamos qué hacer.

            <br><br>

            Me basta con saber que estamos aquí.

            <br><br>

            Que seguimos eligiéndonos.

            <br><br>

            Que podemos hablar.

            <br><br>

            Que podemos reír.

            <br><br>

            Que podemos abrazarnos.

            <br><br>

            Y que, incluso en los días raros,
            seguimos teniendo ese pequeño lugar
            al que podemos volver.

            <br><br>

            Me gusta nuestro amor porque no se siente
            como algo que tengo que demostrarle al
            mundo.

            <br><br>

            Se siente como algo nuestro.

            <br><br>

            Algo que entiendo cuando te miro.

            <br><br>

            Algo que siento cuando escucho tu voz.

            <br><br>

            Algo que aparece hasta en los momentos
            más simples.

            <br><br>

            Y sí...

            <br><br>

            me encanta quererte.

            <br><br>

            Pero todavía más me encanta que seas tú
            la persona a la que puedo llamar:

            <br><br>

            <strong>
            mi niña. 💗
            </strong>

        `

    },


    4: {

        icon: "🪐",

        title:
            "Si algún día dudas de cuánto te amo",

        text: `

            Princesa...

            <br><br>

            Si algún día por cualquier razón dudas
            de cuánto te amo, quiero que recuerdes
            algo.

            <br><br>

            No te amo solamente cuando estamos
            felices.

            <br><br>

            No te amo solamente cuando todo sale
            bien.

            <br><br>

            Te amo en las conversaciones largas.

            <br><br>

            En los silencios.

            <br><br>

            En las risas que no tienen sentido.

            <br><br>

            En los días cansados.

            <br><br>

            En los momentos en los que solamente
            quiero tenerte cerquita.

            <br><br>

            Te amo cuando me cuentas algo que te
            emociona y podría escucharte durante
            horas.

            <br><br>

            Te amo cuando haces alguna de tus
            pequeñas locuras.

            <br><br>

            Te amo cuando te emocionas.

            <br><br>

            Te amo cuando estás siendo tú.

            <br><br>

            Y probablemente eso es lo que más quiero
            que recuerdes.

            <br><br>

            No tienes que convertirte en otra persona
            para que yo te ame.

            <br><br>

            No tienes que ser perfecta.

            <br><br>

            No tienes que tener siempre la respuesta.

            <br><br>

            Solo tienes que ser tú.

            <br><br>

            Porque esa fue la persona de la que me
            enamoré.

            <br><br>

            Y esa es la persona que sigo eligiendo.

            <br><br>

            Te amo muchísimo, mi niña.

            <br><br>

            Más de lo que probablemente sé explicar
            sin ponerme cursi. JAJAJA.

            <br><br>

            Aunque bueno...

            <br><br>

            contigo sí me permito ser cursi. 🎀💜

        `

    },


    5: {

        icon: "🌙",

        title:
            "Quiero seguir haciendo recuerdos contigo",

        text: `

            Mi niña...

            <br><br>

            Hay recuerdos que ya tenemos y que amo
            muchísimo.

            <br><br>

            Pero ¿sabes qué es lo que más me emociona?

            <br><br>

            Todos los que todavía nos faltan.

            <br><br>

            Quiero más días contigo.

            <br><br>

            Más canciones que después podamos decir
            “esta es nuestra”.

            <br><br>

            Más fotografías feas que aun así nos
            parezcan preciosas.

            <br><br>

            Más salidas.

            <br><br>

            Más abrazos.

            <br><br>

            Más besos.

            <br><br>

            Más momentos de quedarnos mirando sin
            saber qué decir.

            <br><br>

            Más conversaciones que empiezan hablando
            de cualquier tontería y terminan siendo
            importantes.

            <br><br>

            Quiero conocer todavía más versiones
            de ti.

            <br><br>

            Ver cómo cambias.

            <br><br>

            Ver cómo creces.

            <br><br>

            Estar ahí cuando cumplas cosas que hoy
            todavía parecen lejanas.

            <br><br>

            Y también quiero que tú estés cuando yo
            consiga las mías.

            <br><br>

            Quiero que algún día podamos mirar atrás
            y decir:

            <br><br>

            <strong>
            “Mira todo lo que vivimos juntas.”
            </strong>

            <br><br>

            Porque este universo está bonito...

            <br><br>

            pero todavía le faltan muchísimas historias.

            <br><br>

            Y quiero escribirlas contigo.

            <br><br>

            Te amo, princesa. 🪐💜

        `

    },


    6: {

        icon: "🫶🏻",

        title:
            "Para mi niña, siempre",

        text: `

            Si algún día vuelves a abrir esta carta,
            quiero que por un momento dejes todo lo
            demás a un lado.

            <br><br>

            Solo tú.

            <br><br>

            Y quiero que recuerdes que hay una persona
            que te mira y piensa:

            <br><br>

            <strong>
            “Qué suerte tengo de que seas tú.”
            </strong>

            <br><br>

            Porque entre tantas personas, tantas
            historias y tantos caminos diferentes...

            <br><br>

            coincidimos.

            <br><br>

            Y yo no pienso tomar eso como algo
            pequeño.

            <br><br>

            Gracias por estar.

            <br><br>

            Gracias por dejarme conocerte.

            <br><br>

            Gracias por contarme tus cosas.

            <br><br>

            Gracias por escuchar las mías.

            <br><br>

            Gracias por cada abrazo.

            <br><br>

            Por cada beso.

            <br><br>

            Por cada risa.

            <br><br>

            Por cada momento en el que simplemente
            estuvimos juntas.

            <br><br>

            Tal vez no siempre sepa decir todo lo que
            siento de la manera más bonita.

            <br><br>

            A veces hasta me hago la fría. JAJAJA.

            <br><br>

            Pero quiero que sepas algo:

            <br><br>

            <strong>
            te amo.
            </strong>

            <br><br>

            Te amo, mi niña.

            <br><br>

            Te amo, princesa.

            <br><br>

            Y entre todos los universos que podrían
            existir...

            <br><br>

            me sigue gustando muchísimo el nuestro.

            <br><br>

            Porque estás tú.

            <br><br>

            Y mientras estés tú...

            <br><br>

            yo quiero seguir aquí.

            <br><br>

            ♡

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
                        onclick="openLetter(${id})">

                        <span>
                            ${letter.icon}
                        </span>

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

    const letter =
        letters[number];

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

    const memory =
        memories[number];

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
   MÚSICA
========================================= */

const songs = {

    1: {

        icon: "🐝",

        title: "Honeybee",

        artist: "Olivia Rodrigo",

        text:
            "Hay canciones que parecen pequeñas cartas de amor. Esta es una de esas canciones que, cuando escucho, pienso en ti. En lo bonita que es la sensación de querer a alguien y encontrar ternura en cada pequeño detalle suyo."

    },


    2: {

        icon: "⭐",

        title: "Star a War",

        artist: "JENNIE",

        text:
            "Hay canciones que tienen una forma de hacer que el amor se sienta enorme. Como si esa persona fuera una estrella en medio de todo. Y amor... entre todas las cosas que existen en mi universo, tú siempre has sido una de mis favoritas."

    },


    3: {

        icon: "💗",

        title: "Tattooed Heart",

        artist: "Ariana Grande",

        text:
            "Hay amores que uno no solamente siente. Hay amores que se quedan. Que se vuelven parte de ti. Como algo escrito en el corazón. Y yo siento que tú eres así para mí."

    },


    4: {

        icon: "🖤",

        title: "Don't Know What To Do",

        artist: "BLACKPINK",

        text:
            "Esta canción me hace pensar en esa sensación de no imaginar mi vida sin alguien. Porque no sé cómo sería mi vida sin tus mensajes, sin tu forma de quererme, sin tus palabras y sin todos esos pequeños momentos que hemos compartido."

    }

};


/* =========================================
   MOSTRAR MÚSICA
========================================= */

function showMusic(card, modal) {

    card.classList.add("music-card");

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            🎵
        </span>

        <h2 class="modal-title">
            Nuestra banda sonora
        </h2>

        <p class="modal-text">

            Hay canciones que simplemente
            escuchamos.

            <br><br>

            Y hay otras que terminan teniendo
            nombre y apellido.

            <br><br>

            Estas son algunas de las canciones
            que inevitablemente terminan
            llevándome hasta ti. 💜

        </p>


        <div class="song-list">

            ${Object.entries(songs).map(
                ([id, song]) => `

                    <button
                        class="song-item"
                        onclick="openSong(${id})">

                        <span class="song-icon">
                            ${song.icon}
                        </span>

                        <span class="song-info">

                            <strong>
                                ${song.title}
                            </strong>

                            <small>
                                ${song.artist}
                            </small>

                        </span>

                        <span class="song-arrow">
                            ›
                        </span>

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
   ABRIR CANCIÓN
========================================= */

function openSong(number) {

    const song =
        songs[number];

    if (!song) return;


    const card =
        document.querySelector(".music-card");

    if (!card) return;


    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <div class="song-big-icon">
            ${song.icon}
        </div>

        <h2 class="modal-title">
            ${song.title}
        </h2>

        <div class="song-artist">
            ${song.artist}
        </div>

        <div class="song-note">

            <span>
                ✦
            </span>

            <p>
                ${song.text}
            </p>

            <span>
                ✦
            </span>

        </div>


        <div class="music-equalizer">

            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>

        </div>


        <button
            class="enter-section"
            onclick="backToMusic(this)">

            Volver a nuestra música 🎵

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
   VOLVER A MÚSICA
========================================= */

function backToMusic(button) {

    const card =
        button.closest(".modal-card");

    const modal =
        card.closest(".universe-modal");

    showMusic(card, modal);

}


/* =========================================
   CONSTELACIÓN
========================================= */

const constellation = {

    1: {

        icon: "💜",

        title: "Siempre tú",

        text: `

            Entre todos los universos posibles,
            me gusta pensar que terminé encontrándote.

            <br><br>

            No sé qué tan improbable haya sido
            nuestra coincidencia.

            <br><br>

            Pero me alegra muchísimo que haya pasado.

            <br><br>

            Porque de todos los lugares,
            personas y momentos posibles...

            <br><br>

            terminé aquí.

            <br><br>

            Contigo. ♡

        `

    },


    2: {

        icon: "🎹",

        title: "Una nota por ti",

        text: `

            Hay algo muy bonito en descubrir que
            una persona puede convertirse en inspiración.

            <br><br>

            Tú terminaste apareciendo incluso
            entre mis notas.

            <br><br>

            Mi piano ya te conoce.

            <br><br>

            Y cada melodía bonita tiene un poquito
            de esa parte de mí que piensa en ti.

            <br><br>

            🎹💗

        `

    },


    3: {

        icon: "👀",

        title: "¿Qué? Nada.",

        text: `

            Una mirada.

            <br><br>

            Un:

            <br><br>

            <strong>“¿Qué?”</strong>

            <br><br>

            Un:

            <br><br>

            <strong>“Nada.”</strong>

            <br><br>

            Y dos personas riéndose por absolutamente
            nada.

            <br><br>

            Quizá no parece un momento importante.

            <br><br>

            Pero es de esos pequeños momentos que
            terminan significando muchísimo.

            <br><br>

            Porque es muy nuestro. 💗

        `

    },


    4: {

        icon: "🥋",

        title: "El gimnasio",

        text: `

            Ese lugar siempre había sido mi espacio
            para entrenar y desahogarme.

            <br><br>

            Pero ese día estabas tú.

            <br><br>

            Y por alguna razón dejé de pensar
            en el costal.

            <br><br>

            En las patadas.

            <br><br>

            En entrenar.

            <br><br>

            Solo quería verte.

            <br><br>

            Y por primera vez sentí que podía estar
            ahí sin presión.

            <br><br>

            Solo contigo.

            <br><br>

            Y eso hizo que un lugar que ya significaba
            mucho para mí se sintiera todavía más bonito.

            <br><br>

            💗

        `

    },


    5: {

        icon: "🎬",

        title: "Mi fan número uno",

        text: `

            Tu cosplay.

            <br><br>

            Tu emoción.

            <br><br>

            Esa parte de ti que disfrutas tanto.

            <br><br>

            Y yo ahí, siendo oficialmente tu fan
            número uno.

            <br><br>

            Ese puesto ya es mío.

            <br><br>

            No acepto competencia. 🎀

        `

    },


    6: {

        icon: "🪐",

        title: "En cualquier universo",

        text: `

            Si existieran otros universos...

            <br><br>

            otras vidas...

            <br><br>

            otras líneas del tiempo...

            <br><br>

            me gusta imaginar que también encontraría
            una forma de llegar hasta ti.

            <br><br>

            Porque si pudiera elegir otra vez...

            <br><br>

            volvería a elegirte.

            <br><br>

            Siempre tú. 💜

        `

    }

};


/* =========================================
   MOSTRAR CONSTELACIÓN
========================================= */

function showConstellation(card, modal) {

    card.classList.add("constellation-card");

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            ✦
        </span>

        <h2 class="modal-title">
            Nuestra constelación
        </h2>

        <p class="modal-text">

            Algunas estrellas nacen,
            otras desaparecen...

            <br><br>

            pero estas pequeñas luces
            guardan cosas que quiero recordar
            contigo. 💜

        </p>


        <div class="constellation-map">

            <div class="constellation-lines"></div>

            ${Object.keys(constellation).map(
                (id, index) => `

                    <button
                        class="constellation-star constellation-${index + 1}"
                        onclick="openConstellation(${id})">

                        ✦

                        <span>
                            ${index + 1}
                        </span>

                    </button>

                `
            ).join("")}

            <div class="constellation-center">
                ♡
            </div>

        </div>


        <p class="constellation-hint">
            Toca una estrella para descubrirla ✨
        </p>

    `;


    card.querySelector(".modal-close")
        .addEventListener("click", () => {

            closeModal(modal);

        });

}


/* =========================================
   ABRIR ESTRELLA
========================================= */

function openConstellation(number) {

    const item =
        constellation[number];

    if (!item) return;


    const card =
        document.querySelector(".constellation-card");

    if (!card) return;


    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            ${item.icon}
        </span>

        <h2 class="modal-title">
            ${item.title}
        </h2>

        <div class="letter-content">
            ${item.text}
        </div>

        <button
            class="enter-section"
            onclick="backToConstellation(this)">

            Volver a la constelación ✦

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
   VOLVER A CONSTELACIÓN
========================================= */

function backToConstellation(button) {

    const card =
        button.closest(".modal-card");

    const modal =
        card.closest(".universe-modal");

    showConstellation(card, modal);

}


/* =========================================
   YOONGI'S ROOM
========================================= */

function showYoongiRoom(card, modal) {

    card.classList.add("yoongi-card");

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            🐈‍⬛
        </span>

        <h2 class="modal-title">
            Yoongi's Room
        </h2>

        <div class="yoongi-disclaimer">

            Este es un espacio ficticio inspirado
            únicamente en rasgos de la personalidad
            pública de Yoongi.

            <br><br>

            No representa al artista real,
            no pretende hablar en su nombre
            y no es una conversación real con él.

        </div>


        <div class="yoongi-room">

            <div class="room-light"></div>

            <div class="room-cat">
                🐈‍⬛
            </div>

            <div class="room-title">
                Un pequeño lugar
                para cuando necesites compañía.
            </div>

            <button
                class="room-button"
                onclick="openYoongiChat()">

                Entrar al cuarto 🖤

            </button>

        </div>

    `;


    card.querySelector(".modal-close")
        .addEventListener("click", () => {

            closeModal(modal);

        });

}


/* =========================================
   CHAT FICTICIO
========================================= */

function openYoongiChat() {

    const card =
        document.querySelector(".yoongi-card");

    if (!card) return;


    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            🐈‍⬛
        </span>

        <h2 class="modal-title">
            Una pequeña conversación
        </h2>

        <div class="fiction-note">

            Personaje ficticio inspirado en rasgos
            públicos. No es Yoongi real.

        </div>


        <div class="chat-box">

            <div class="chat-message bot">

                ¿Tuviste un día pesado?

            </div>

            <div class="chat-message user">

                Un poquito.

            </div>

            <div class="chat-message bot">

                Entonces no intentes resolver
                todo esta noche.

                <br><br>

                Descansa primero.
                Mañana puedes preocuparte otra vez.

            </div>

            <div class="chat-message bot">

                Y si necesitas música...

                <br><br>

                ya sabes dónde encontrarla.

                🎧

            </div>

        </div>


        <button
            class="enter-section"
            onclick="backToYoongi(this)">

            Volver al cuarto 🐈‍⬛

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
   VOLVER A YOONGI'S ROOM
========================================= */

function backToYoongi(button) {

    const card =
        button.closest(".modal-card");

    const modal =
        card.closest(".universe-modal");

    showYoongiRoom(card, modal);

}


/* =========================================
   ZONA SECRETA
========================================= */

function showSecret(card, modal) {

    card.classList.add("secret-card");

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            🔐
        </span>

        <h2 class="modal-title">
            Zona secreta
        </h2>

        <p class="modal-text">

            Llegaste hasta aquí.

            <br><br>

            Eso significa que probablemente
            eres demasiado curiosa.

            <br><br>

            Aunque...

            <br><br>

            quizá eso me gusta de ti. 👀

        </p>


        <div class="secret-lock">

            <div class="lock-glow">
                ♡
            </div>

        </div>


        <button
            class="enter-section secret-button"
            onclick="unlockSecret(this)">

            Intentar abrir 🔑

        </button>

    `;


    card.querySelector(".modal-close")
        .addEventListener("click", () => {

            closeModal(modal);

        });

}


/* =========================================
   DESBLOQUEAR SECRETO
========================================= */

function unlockSecret(button) {

    const card =
        button.closest(".modal-card");

    card.innerHTML = `

        <button class="modal-close"
                aria-label="Cerrar">
            ×
        </button>

        <span class="modal-icon">
            💜
        </span>

        <h2 class="modal-title">
            Encontraste el secreto
        </h2>

        <div class="secret-message">

            <p>

                Entre todas las estrellas,
                planetas y galaxias...

                <br><br>

                hay una cosa que sigue siendo
                mi favorita.

                <br><br>

                <strong>
                Tú.
                </strong>

                <br><br>

                Y aunque hice todo este universo
                para ti...

                <br><br>

                la verdad es que nunca necesité
                un universo entero para saber
                dónde quería estar.

                <br><br>

                Contigo. ♡

            </p>

        </div>

        <button
            class="enter-section"
            onclick="closeModal(this.closest('.universe-modal'))">

            Cerrar secreto 💜

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
   CERRAR MODAL
========================================= */

function closeModal(modal) {

    if (!modal) return;

    modal.classList.remove("active");

    setTimeout(() => {

        modal.remove();

    }, 500);

}


/* =========================================
   ESTILOS EXTRA
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


.universe-modal.active
.modal-card {

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

    font-size:
        clamp(24px, 6vw, 34px);

    line-height: 1.1;

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
   CARTAS
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
   MÚSICA
========================================= */

.music-card {

    max-height: 88vh;

}


.song-list {

    display: flex;

    flex-direction: column;

    gap: 10px;

    margin-top: 20px;

}


.song-item {

    width: 100%;

    display: flex;

    align-items: center;

    gap: 14px;

    padding: 13px 15px;

    border:
        1px solid
        rgba(190,170,255,.18);

    border-radius: 18px;

    background:
        rgba(100,80,180,.10);

    color: white;

    cursor: pointer;

    text-align: left;

    transition:
        .35s ease;

}


.song-item:hover {

    transform:
        translateX(5px);

    border-color:
        rgba(205,190,255,.45);

    background:
        rgba(130,105,220,.20);

    box-shadow:
        0 0 25px
        rgba(130,100,230,.18);

}


.song-icon {

    width: 42px;
    height: 42px;

    display: flex;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 50%;

    background:

        radial-gradient(
            circle,
            rgba(170,145,255,.35),
            rgba(50,40,100,.35)
        );

    font-size: 21px;

    box-shadow:
        0 0 15px
        rgba(150,125,255,.25);

}


.song-info {

    display: flex;

    flex-direction: column;

    gap: 3px;

    flex: 1;

}


.song-info strong {

    font-size: 13px;

    font-weight: 600;

}


.song-info small {

    color: #9691aa;

    font-size: 10px;

}


.song-arrow {

    font-size: 25px;

    color: #9d8be5;

}


.song-big-icon {

    font-size: 60px;

    margin:
        10px 0 5px;

    animation:
        songFloat 3s ease-in-out infinite;

    filter:
        drop-shadow(
            0 0 20px
            rgba(170,145,255,.55)
        );

}


.song-artist {

    color: #a9a0c5;

    font-size: 12px;

    letter-spacing: 2px;

    text-transform: uppercase;

}


.song-note {

    margin-top: 25px;

    padding: 20px;

    border-radius: 20px;

    background:
        rgba(120,95,200,.08);

    border:
        1px solid
        rgba(190,170,255,.12);

    display: flex;

    gap: 12px;

    align-items: flex-start;

}


.song-note span {

    color: #a995ff;

    font-size: 18px;

}


.song-note p {

    margin: 0;

    color: #c9c5d8;

    font-size: 13px;

    line-height: 1.7;

    text-align: left;

}


.music-equalizer {

    height: 35px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 5px;

    margin-top: 22px;

}


.music-equalizer i {

    display: block;

    width: 4px;

    height: 15px;

    border-radius: 5px;

    background:
        rgba(180,160,255,.8);

    animation:
        equalizer 1s ease-in-out infinite alternate;

}


.music-equalizer i:nth-child(1) {
    animation-delay: .1s;
}


.music-equalizer i:nth-child(2) {
    animation-delay: .3s;
}


.music-equalizer i:nth-child(3) {
    animation-delay: .5s;
}


.music-equalizer i:nth-child(4) {
    animation-delay: .2s;
}


.music-equalizer i:nth-child(5) {
    animation-delay: .4s;
}


@keyframes equalizer {

    from {
        height: 8px;
    }

    to {
        height: 30px;
    }

}


@keyframes songFloat {

    0%, 100% {

        transform:
            translateY(0);

    }

    50% {

        transform:
            translateY(-8px);

    }

}


/* =========================================
   CONSTELACIÓN
========================================= */

.constellation-card {

    max-height: 88vh;

}


.constellation-map {

    position: relative;

    width: 330px;
    height: 270px;

    max-width: 100%;

    margin:
        25px auto 10px;

    border-radius: 50%;

    background:

        radial-gradient(
            circle at center,
            rgba(150,125,255,.18),
            transparent 55%
        ),

        radial-gradient(
            circle at 30% 30%,
            rgba(90,120,255,.12),
            transparent 40%
        );

    box-shadow:
        inset 0 0 50px
        rgba(130,100,255,.08);

}


.constellation-lines {

    position: absolute;

    inset: 35px;

    border:
        1px solid
        rgba(180,160,255,.10);

    border-radius: 50%;

    transform:
        rotate(-15deg);

}


.constellation-center {

    position: absolute;

    left: 50%;
    top: 50%;

    width: 65px;
    height: 65px;

    display: flex;

    align-items: center;
    justify-content: center;

    transform:
        translate(-50%, -50%);

    border-radius: 50%;

    background:

        radial-gradient(
            circle,
            #a995ff,
            #43327e 55%,
            #100d25
        );

    color: white;

    font-size: 27px;

    box-shadow:

        0 0 25px
        rgba(170,145,255,.6),

        0 0 70px
        rgba(120,90,230,.3);

    animation:
        constellationPulse 3s ease-in-out infinite;

}


.constellation-star {

    position: absolute;

    width: 45px;
    height: 45px;

    border: none;

    border-radius: 50%;

    background:
        rgba(110,90,190,.08);

    color: #eeeaff;

    font-size: 27px;

    cursor: pointer;

    text-shadow:
        0 0 10px #a895ff;

    transition:
        .35s ease;

    z-index: 3;

}


.constellation-star:hover {

    transform:
        scale(1.4);

    color: white;

    text-shadow:
        0 0 15px white,
        0 0 35px #a995ff;

}


.constellation-star span {

    position: absolute;

    bottom: -13px;

    left: 50%;

    transform:
        translateX(-50%);

    font-size: 8px;

    color: #918aa9;

}


.constellation-1 {

    left: 25px;
    top: 30px;

}


.constellation-2 {

    left: 50%;
    top: 12px;

    transform:
        translateX(-50%);

}


.constellation-2:hover {

    transform:
        translateX(-50%)
        scale(1.4);

}


.constellation-3 {

    right: 25px;
    top: 55px;

}


.constellation-4 {

    right: 35px;
    bottom: 25px;

}


.constellation-5 {

    left: 45px;
    bottom: 28px;

}


.constellation-6 {

    left: 50%;
    bottom: 2px;

    transform:
        translateX(-50%);

}


.constellation-6:hover {

    transform:
        translateX(-50%)
        scale(1.4);

}


.constellation-hint {

    color: #858096;

    font-size: 10px;

    letter-spacing: 1px;

}


@keyframes constellationPulse {

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
   YOONGI'S ROOM
========================================= */

.yoongi-card {

    max-height: 88vh;

}


.yoongi-disclaimer {

    position: relative;

    margin-bottom: 18px;

    padding: 12px 15px;

    border-radius: 15px;

    background:
        rgba(100,90,170,.08);

    border:
        1px solid
        rgba(180,160,255,.12);

    color: #8e89a4;

    font-size: 9px;

    line-height: 1.6;

}


.yoongi-room {

    position: relative;

    min-height: 270px;

    padding: 35px 20px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    overflow: hidden;

    border-radius: 25px;

    background:

        radial-gradient(
            circle at 50% 30%,
            rgba(100,110,180,.18),
            transparent 40%
        ),

        linear-gradient(
            145deg,
            #080912,
            #111326,
            #080912
        );

    border:
        1px solid
        rgba(180,170,220,.16);

    box-shadow:
        inset 0 0 50px
        rgba(0,0,0,.5);

}


.room-light {

    position: absolute;

    width: 180px;
    height: 180px;

    top: -80px;

    border-radius: 50%;

    background:
        rgba(130,120,210,.16);

    filter: blur(35px);

    animation:
        roomBreath 5s ease-in-out infinite alternate;

}


.room-cat {

    position: relative;

    font-size: 65px;

    filter:
        drop-shadow(
            0 0 18px
            rgba(170,160,255,.3)
        );

    animation:
        roomFloat 4s ease-in-out infinite;

}


.room-title {

    position: relative;

    max-width: 280px;

    margin-top: 18px;

    color: #d3d0df;

    font-size: 13px;

    line-height: 1.6;

}


.room-button {

    position: relative;

    margin-top: 22px;

    padding: 12px 24px;

    border:
        1px solid
        rgba(190,180,230,.25);

    border-radius: 25px;

    background:
        rgba(110,100,170,.15);

    color: white;

    cursor: pointer;

    transition: .3s ease;

}


.room-button:hover {

    transform:
        scale(1.06);

    background:
        rgba(130,120,200,.25);

}


@keyframes roomBreath {

    from {
        transform: scale(.9);
        opacity: .5;
    }

    to {
        transform: scale(1.2);
        opacity: .9;
    }

}


@keyframes roomFloat {

    0%, 100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-8px);
    }

}


/* =========================================
   CHAT
========================================= */

.fiction-note {

    margin-bottom: 15px;

    color: #77738a;

    font-size: 9px;

}


.chat-box {

    display: flex;

    flex-direction: column;

    gap: 10px;

    padding: 15px;

    border-radius: 22px;

    background:
        rgba(5,6,15,.55);

    border:
        1px solid
        rgba(180,170,220,.12);

    text-align: left;

}


.chat-message {

    max-width: 85%;

    padding: 11px 14px;

    border-radius: 16px;

    font-size: 12px;

    line-height: 1.6;

}


.chat-message.bot {

    align-self: flex-start;

    background:
        rgba(110,100,170,.16);

    color: #cbc6da;

    border-bottom-left-radius: 4px;

}


.chat-message.user {

    align-self: flex-end;

    background:
        rgba(145,125,220,.18);

    color: #e1dcf0;

    border-bottom-right-radius: 4px;

}


/* =========================================
   SECRETO
========================================= */

.secret-card {

    max-height: 88vh;

}


.secret-lock {

    width: 110px;
    height: 110px;

    margin: 25px auto;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:

        radial-gradient(
            circle,
            rgba(160,140,255,.28),
            rgba(50,40,100,.12) 55%,
            transparent 70%
        );

    box-shadow:
        0 0 35px
        rgba(150,125,255,.2);

    animation:
        secretPulse 3s ease-in-out infinite;

}


.lock-glow {

    font-size: 38px;

    color: #d7ceff;

    text-shadow:
        0 0 15px #a995ff,
        0 0 35px #7055d0;

}


.secret-message {

    padding: 20px;

    border-radius: 20px;

    background:
        rgba(110,90,190,.08);

    border:
        1px solid
        rgba(190,170,255,.12);

    color: #c9c5d8;

    font-size: 13px;

    line-height: 1.8;

}


.secret-message strong {

    color: #eeeaff;

    font-size: 22px;

    text-shadow:
        0 0 15px
        rgba(170,145,255,.7);

}


@keyframes secretPulse {

    0%, 100% {

        transform:
            scale(.95);

        box-shadow:
            0 0 25px
            rgba(150,125,255,.15);

    }

    50% {

        transform:
            scale(1.08);

        box-shadow:
            0 0 55px
            rgba(150,125,255,.4);

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


    .song-item {

        padding:
            11px 12px;

    }


    .song-info strong {

        font-size: 12px;

    }


    .song-note p {

        font-size: 12px;

    }


    .constellation-map {

        width: 290px;
        height: 235px;

    }


    .constellation-star {

        width: 40px;
        height: 40px;

        font-size: 23px;

    }


    .yoongi-room {

        min-height: 240px;

    }


    .chat-message {

        font-size: 11px;

    }

}

`;


document.head.appendChild(extraStyles);

console.log("UNIVERSO DE KIM: JavaScript cargado correctamente 💜");
