import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    
    <div className="wrapper"><h1></h1>
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.qustion}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
              <div className={
                selected == i ? "content show" : "content"
               }
              >
               {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    qustion: "How will my doubts get cleared during the training?",
    answer:
      "For doubt clearing, you can post your queries on the forum and get answers within 24 hours.",
  },
  {
    qustion: "How will the training be delivered?",
    answer:
      "You will be taught using pre-recorded videos and text tutorials. The training has quizzes, assignments, and tests to help you learn better. At the end of the training, you will attempt a project to get hands-on practice of what you learn during your training. ",
  },
  {
    qustion: " How much time should I spend every day?",
    answer:
      "As this is a purely online training program, students can choose to learn at any time of the day. The students can decide the timing according to their convenience.",
  },
  {
    qustion: " My payment got deducted twice. What should I do now?",
    answer:
      " Just let us know your registered email id along with the screenshot of the payment receipt or transaction history. You can submit",
  },
    
];

export default App;
