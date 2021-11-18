import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import "./App.css";
import App from "./App";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter } from "react-router-dom";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

// function Button(props) {
//   const [text, setText] = useState("");
//   function handleClick() {
//     setText("PROCEED TO CHECKOUT");
//   }
//   return <button onClick={handleClick}>{text || props.text}</button>;
// }

describe("App basic tests", () => {
  it("renders without crashing", () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        container
      );
    });
  });

  it("renders and finds cirtain li text 'Маяковский'", () => {
    let component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <DialogsContainer />
        </Provider>
      </BrowserRouter>
    );
    let tree = component.root;
    let find = tree.findAllByType("li");
    console.log(find[0].children[1]);
    expect(find[0].children[1]).toBe("Маяковский");
  });
});
