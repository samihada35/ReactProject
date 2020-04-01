let state = {
  ProfilePage: {
    postData: [
      { id: 1, message: "hi", likeCount: 26 },
      { id: 2, message: "My name is Alex", likeCount: 16 },
      { id: 3, message: "Glad to see u", likeCount: 21 }
    ]
  },

  MessagesPage: {
    dialogData: [
      { id: 1, messagePreview: "hi", name: "Igor" },
      { id: 2, messagePreview: "hi!", name: "Vlad" },
      { id: 3, messagePreview: "hi, no?", name: "Ilia" },
      { id: 4, messagePreview: "hi, Yury", name: "Jane" }
    ],

    messageData: [
      { id: 1, message: "hi", name: "Igor" },
      { id: 2, message: "hi!", name: "Vlad" },
      { id: 3, message: "hi, no?", name: "Ilia" }
    ]
  }
};

export default state;
