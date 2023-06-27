const cards = [
    {
      Name: "The Fool",
      value: "fool",
      img: "./card_images/sm_RWSa-T-00.png",
    },
    {
      Name: "The Magician I",
      value: "magician",
      img: "./card_images/sm_RWSa-T-01.png",
    },
    {
      Name: "The High Priestess II",
      value: "priestess",
      img: "./card_images/sm_RWSa-T-02.png",
    },
    {
      Name: "The Empress III",
      value: "empress",
      img: "./card_images/sm_RWSa-T-03.png",
    },
    {
      Name: "The Emperor IV",
      value: "emperor",
      img: "./card_images/sm_RWSa-T-04.png",
    },
    {
      Name: "The Heirophant V",
      value: "heirophant",
      img: "./card_images/sm_RWSa-T-05.png",
    },
    {
      Name: "The Lovers VI",
      value: "lovers",
      img: "./card_images/sm_RWSa-T-06.png",
    },
    {
      Name: "The Chariot VII",
      value: "chariot",
      img: "./card_images/sm_RWSa-T-07.png",
    },
    {
      Name: "Strength VIII",
      value: "strength",
      img: "./card_images/sm_RWSa-T-08.png",
    },
    {
      Name: "The Hermit IX",
      value: "hermit",
      img: "./card_images/sm_RWSa-T-09.png",
    },
    {
      Name: "The Wheel of Fortune X",
      value: "wheel",
      img: "./card_images/sm_RWSa-T-10.png",
    },
    {
      Name: "Justice XI",
      value: "justice",
      img: "./card_images/sm_RWSa-T-11.png",
    },
    {
      Name: "The Hanged Man XII",
      value: "hanged",
      img: "./card_images/sm_RWSa-T-12.png",
    },
    {
      Name: "Death XIII",
      value: "death",
      img: "./card_images/sm_RWSa-T-13.png",
    },
    {
      Name: "Temprence XIV",
      value: "temperance",
      img: "./card_images/sm_RWSa-T-14.png",
    },
    {
      Name: "The Devil XV",
      value: "devil",
      img: "./card_images/sm_RWSa-T-15.png",
    },
    {
      Name: "The Tower XVI",
      value: "tower",
      img: "./card_images/sm_RWSa-T-16.png",
    },
    {
      Name: "The Star XVII",
      value: "star",
      img: "./card_images/sm_RWSa-T-17.png",
    },
    {
      Name: "The Moon XVIII",
      value: "moon",
      img: "./card_images/sm_RWSa-T-18.png",
    },
    {
      Name: "The Sun XIX",
      value: "sun",
      img: "./card_images/sm_RWSa-T-19.png",
    },
    {
      Name: "Judgement XX",
      value: "judgement",
      img: "./card_images/sm_RWSa-T-20.png",
    },
    {
      Name: "The World XXI",
      value: "world",
      img: "./card_images/sm_RWSa-T-21.png",
    },
    {
      Name: "Ace of Swords",
      value: "as",
      img: "./card_images/sm_RWSa-S-0A.png",
    },
    {
      Name: "Two of Swords",
      value: "2s",
      img: "./card_images/sm_RWSa-S-02.png",
    },
    {
      Name: "Three of Swords",
      value: "3s",
      img: "./card_images/sm_RWSa-S-03.png",
    },
    {
      Name: "Four of Swords",
      value: "4s",
      img: "./card_images/sm_RWSa-S-04.png",
    },
    {
      Name: "Five of Swords",
      value: "5s",
      img: "./card_images/sm_RWSa-S-05.png",
    },
    {
      Name: "Six of Swords",
      value: "6s",
      img: "./card_images/sm_RWSa-S-06.png",
    },
    {
      Name: "Seven of Swords",
      value: "7s",
      img: "./card_images/sm_RWSa-S-07.png",
    },
    {
      Name: "Eight of Swords",
      value: "8s",
      img: "./card_images/sm_RWSa-S-08.png",
    },
    {
      Name: "Nine of Swords",
      value: "9s",
      img: "./card_images/sm_RWSa-S-09.png",
    },
    {
      Name: "Ten of Swords",
      value: "10s",
      img: "./card_images/sm_RWSa-S-10.png",
    },
    {
      Name: "Page of Swords",
      value: "ps",
      img: "./card_images/sm_RWSa-S-J1.png",
    },
    {
      Name: "Knight of Swords",
      value: "kns",
      img: "./card_images/sm_RWSa-S-J2.png",
    },
    {
      Name: "Queen of Swords",
      value: "qs",
      img: "./card_images/sm_RWSa-S-QU.png",
    },
    {
      Name: "King of Swords",
      value: "ks",
      img: "./card_images/sm_RWSa-S-KI.png",
    },
    {
      Name: "Ace of Wands",
      value: "aw",
      img: "./card_images/sm_RWSa-W-0A.png",
    },
    {
      Name: "Two of Wands",
      value: "2w",
      img: "./card_images/sm_RWSa-W-02.png",
    },
    {
      Name: "Three of Wands",
      value: "3w",
      img: "./card_images/sm_RWSa-W-03.png",
    },
    {
      Name: "Four of Wands",
      value: "4w",
      img: "./card_images/sm_RWSa-W-04.png",
    },
    {
      Name: "Five of Wands",
      value: "5w",
      img: "./card_images/sm_RWSa-W-05.png",
    },
    {
      Name: "Six of Wands",
      value: "6w",
      img: "./card_images/sm_RWSa-W-06.png",
    },
    {
      Name: "Seven of Wands",
      value: "7w",
      img: "./card_images/sm_RWSa-W-07.png",
    },
    {
      Name: "Eight of Wands",
      value: "8w",
      img: "./card_images/sm_RWSa-W-08.png",
    },
    {
      Name: "Nine of Wands",
      value: "9w",
      img: "./card_images/sm_RWSa-W-09.png",
    },
    {
      Name: "Ten of Wands",
      value: "10w",
      img: "./card_images/sm_RWSa-W-10.png",
    },
    {
      Name: "Page of Wands",
      value: "pw",
      img: "./card_images/sm_RWSa-W-J1.png",
    },
    {
      Name: "Knight of Wands",
      value: "knw",
      img: "./card_images/sm_RWSa-W-J2.png",
    },
    {
      Name: "Queen of Wands",
      value: "qw",
      img: "./card_images/sm_RWSa-W-QU.png",
    },
    {
      Name: "King of Wands",
      value: "kw",
      img: "./card_images/sm_RWSa-W-KI.png",
    },
    {
      Name: "Ace of Pentacles",
      value: "ap",
      img: "./card_images/sm_RWSa-P-0A.png",
    },
    {
      Name: "Two of Pentacles",
      value: "2p",
      img: "./card_images/sm_RWSa-P-02.png",
    },
    {
      Name: "Three of Pentacles",
      value: "3p",
      img: "./card_images/sm_RWSa-P-03.png",
    },
    {
      Name: "Four of Pentacles",
      value: "4p",
      img: "./card_images/sm_RWSa-P-04.png",
    },
    {
      Name: "Five of Pentacles",
      value: "5p",
      img: "./card_images/sm_RWSa-P-05.png",
    },
    {
      Name: "Six of Pentacles",
      value: "6p",
      img: "./card_images/sm_RWSa-P-06.png",
    },
    {
      Name: "Seven of Pentacles",
      value: "7p",
      img: "./card_images/sm_RWSa-P-07.png",
    },
    {
      Name: "Eight of Pentacles",
      value: "8p",
      img: "./card_images/sm_RWSa-P-08.png",
    },
    {
      Name: "Nine of Pentacles",
      value: "9p",
      img: "./card_images/sm_RWSa-P-09.png",
    },
    {
      Name: "Ten of Pentacles",
      value: "10p",
      img: "./card_images/sm_RWSa-P-10.png",
    },
    {
      Name: "Page of Pentacles",
      value: "pp",
      img: "./card_images/sm_RWSa-P-J1.png",
    },
    {
      Name: "Knight of Pentacles",
      value: "knp",
      img: "./card_images/sm_RWSa-P-J2.png",
    },
    {
      Name: "Queen of Pentacles",
      value: "qp",
      img: "./card_images/sm_RWSa-P-QU.png",
    },
    {
      Name: "King of Pentacles",
      value: "kp",
      img: "./card_images/sm_RWSa-P-KI.png",
    },
    {
      Name: "Ace of Cups",
      value: "ac",
      img: "./card_images/sm_RWSa-C-0A.png",
    },
    {
      Name: "Two of Cups",
      value: "2c",
      img: "./card_images/sm_RWSa-C-02.png",
    },
    {
      Name: "Three of Cups",
      value: "3c",
      img: "./card_images/sm_RWSa-C-03.png",
    },
    {
      Name: "Four of Cups",
      value: "4c",
      img: "./card_images/sm_RWSa-C-04.png",
    },
    {
      Name: "Five of Cups",
      value: "5c",
      img: "./card_images/sm_RWSa-C-05.png",
    },
    {
      Name: "Six of Cups",
      value: "6c",
      img: "./card_images/sm_RWSa-C-06.png",
    },
    {
      Name: "Seven of Cups",
      value: "7c",
      img: "./card_images/sm_RWSa-C-07.png",
    },
    {
      Name: "Eight of Cups",
      value: "8c",
      img: "./card_images/sm_RWSa-C-08.png",
    },
    {
      Name: "Nine of Cups",
      value: "9c",
      img: "./card_images/sm_RWSa-C-09.png",
    },
    {
      Name: "Ten of Cups",
      value: "10c",
      img: "./card_images/sm_RWSa-C-10.png",
    },
    {
      Name: "Page of Cups",
      value: "pc",
      img: "./card_images/sm_RWSa-C-J1.png",
    },
    {
      Name: "Knight of Cups",
      value: "knc",
      img: "./card_images/sm_RWSa-C-J2.png",
    },
    {
      Name: "Queen of Cups",
      value: "qc",
      img: "./card_images/sm_RWSa-C-QU.png",
    },
    {
      Name: "King of Cups",
      value: "kc",
      img: './card_images/sm_RWSa-C-KI.png',
    },
  ];

  export { cards };