import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      Hi
      <br />
      <br />
      <button
        onClick={(evt) => {
          console.log("CLICKED!", evt);
        }}
      >
        Click me
      </button>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
