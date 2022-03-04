const app = new Vue({
    el: "#app",

    data: {
        arrayEmail: [],
    },

    created() {

        // Ciclo for per fare 10 richieste al server
        for (let i = 0; i < 10; i++) {

            // Richiesta al server
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {

                // Variabile singola email
                const email = response.data.response;
                console.log(email);

                // Pusho l'email nell'array arrayEmail
                this.arrayEmail.push(email);
            });
        }
        console.log(this.arrayEmail);

    },
});




// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// chiedere 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Successivamente assicuratevi di far comparire gli indirizzi email solamente quando sono stati tutti recuperati dal server.
// buon lavoro e buon weekend