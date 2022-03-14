interface Post {
  id: number;
  text: string;
  likes: number;
}

interface Dialog {
  id: number;
  name: string;
  avatarPath: string;
}

interface ProfilePage {
  posts: Post[];
  profileInputText: string;
}

interface MessagesPage {
  dialogs: Dialog[];
}

interface State {
  profilePage: ProfilePage;
  messagesPage: MessagesPage;
}

declare const store: {
  _state: State;
};
