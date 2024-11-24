import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
      {/* <Results
        userAnswers={userAnswers}
        questionsList={QUESTIONS_LIST}
      /> */}
    </>
  );
}

export default App;
