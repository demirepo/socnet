export const state = {
  profilePage: {
    posts: [
      { id: 1, text: "какой-то текст поста №1", likes: 10 },
      { id: 2, text: "какой-то текст поста №2", likes: 44 },
      { id: 3, text: "какой-то текст поста №3", likes: 5 },
    ],
  },
  messagesPage: {
    dialogs: [
      { id: 1, name: "Sergei", avatarPath: "/img/1.jpg" },
      { id: 2, name: "Anton", avatarPath: "/img/2.jpg" },
      { id: 3, name: "Evgen", avatarPath: "/img/3.jpg" },
    ],
    messages: [
      { id: 2, text: "Каг дела?" },
      {
        id: 1,
        text: "Дым табачный воздух выел, комната - глава в крученыховском аде. Вспомни - за этим окном впервые руки твои, исступленный, гладил",
      },
      { id: 3, text: "Ой все!" },
    ],
    dialogHistory: {
      userId1: [
        {
          id: 1,
          author: "me",
          time: 1000,
          text: "Выбегу, в улицу тело брошу я",
        },
        {
          id: 2,
          author: "opponent",
          time: 1001,
          text: "Дикий, обезумлюсь, отчаянием иссечась",
        },
      ],
    },
  },
};
