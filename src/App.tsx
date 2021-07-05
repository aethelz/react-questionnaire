import "./App.css";
import Question from "./Question";
import typedData from './shared/data';
import QuestionWrapper from "../QuestionWrapper";


function App() {
  const data = typedData.questionnaire.questions;
  return (
    <div className="App">
      {data.map((q) => (
        <QuestionWrapper data={q}>
          <Question data={q} />
        </QuestionWrapper >
      ))}
      ;
    </div>
  );
}

export default App;
