import QuizDirectQuestion from "./components/blocks/QuizDirectQuestion";
import QuizMultipleQuestion from "./components/blocks/QuizMultipleQuestion";
import QuizSingleAnswer from "./components/blocks/QuizSingleAnswer";
import TodoList from "./components/TodoList";
import UseEffectTester from "./components/UseEffectTester";

export default function App() {

  return (

    <div>
      {/* <TodoLisst /> */}
      {/* <UseEffectTester /> */}
      <QuizDirectQuestion question="Столица России" correntAnswer="Ростов-на-Дону" />
      <QuizDirectQuestion question="Кто пойдет в армию следующим в группе 34" correntAnswer="Зражевский" />
      <QuizSingleAnswer question="Лучший строитель в IThub" correctAnswer="Бобылев" variants={['Зражевский', "Ионов", "Феталиев", "Бобылев"]} />

      <QuizMultipleQuestion />
    </div>

  )

}