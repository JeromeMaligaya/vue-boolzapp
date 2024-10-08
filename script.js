const { createApp } = Vue

  createApp({
    data() {
      return {
        currentIndex: 0,
        userNewMessage: '',
        contactNewMessage: 'Ok',
        contactToSearch: '',
        contactsFinded: [],
        contacts: [
          {
              name: 'Michele',
              avatar: './img/avatar_1.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Hai portato a spasso il cane?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di stendere i panni',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: './img/avatar_2.png',
              visible: true,
              messages: [
                  {
                      date: '20/03/2020 16:30:00',
                      message: 'Ciao come stai?',
                      status: 'sent'
                  },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: './img/avatar_3.png',
              visible: true,
              messages: [
                  {
                      date: '28/03/2020 10:10:40',
                      message: 'La Marianna va in campagna',
                      status: 'received'
                  },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro B.',
              avatar: './img/avatar_4.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Lo sai che ha aperto una nuova pizzeria?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Alessandro L.',
              avatar: './img/avatar_5.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ricordati di chiamare la nonna',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Va bene, stasera la sento',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Claudia',
              avatar: './img/avatar_6.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao Claudia, hai novità?',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Non ancora',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'Nessuna nuova, buona nuova',
                      status: 'sent'
                  }
              ],
          },
          {
              name: 'Federico',
              avatar: './img/avatar_7.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Fai gli auguri a Martina che è il suo compleanno!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Grazie per avermelo ricordato, le scrivo subito!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Davide',
              avatar: './img/avatar_8.png',
              visible: true,
              messages: [
                  {
                      date: '10/01/2020 15:30:55',
                      message: 'Ciao, andiamo a mangiare la pizza stasera?',
                      status: 'received'
                  },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 15:51:00',
                      message: 'OK!!',
                      status: 'received'
                  }
              ],
          }
      ]      
      }
    },
    methods:{
      selectChat(index){
        this.currentIndex = index;
        console.log('chat-contact-selected', this.currentIndex);
      },
      sendNewMessage(){
        this.contactsFinded[this.currentIndex].messages.push({date: '', message: this.userNewMessage, status: 'sent'});
        console.log('userNewMessage',this.userNewMessage)
        console.log('contactsFinded.messages', this.contactsFinded[this.currentIndex].messages)
        this.userNewMessage = '';
        // risposta dell'interlocutore
        this.answerContact();
      },
      answerContact(){
        setTimeout( () => {
            this.contactsFinded[this.currentIndex].messages.push({date: '', message: this.contactNewMessage, status: 'received'});
            console.log('contactNewMessage', this.contactNewMessage);
        }, 1000);
      },
      
      searchContact() {
        // filtro la lista dei contatti in base a contactToSearch
        const filteredContacts = this.contactsFinded.filter(contact => 
            contact.name.toLowerCase().includes(this.contactToSearch.toLowerCase())
        );
        console.log(filteredContacts);

        if(this.contactToSearch.length === 0) this.contactsFinded = this.contacts;
        else if(this.contactToSearch.length > 0) this.contactsFinded = filteredContacts;
        console.log(filteredContacts)
        console.log(this.contactToSearch)
      },

      setTime() {
        this.contacts.forEach(contact => {
          contact.messages.forEach(message => {
            // formatto dates con il formattato ore e minuti
            message.date = luxon.DateTime.fromFormat(message.date, "dd/MM/yyyy HH:mm:ss").toFormat("HH:mm");
            console.log(message.date);
          });
        });
      }
    },
    created(){
        // creo un array uguale a contacts su cui lavorarci sopra
        this.contactsFinded = this.contacts;
    },
    // invoco la funzione qui in modo tale da avere i dates con il formattato desiderato
    mounted(){
        this.setTime()
    }

}).mount('#app')

// esercizio finito 

