"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useState } from "react";

const Page = () => {
  const [answers, setAnswers] =useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const title = 'The Eras Tour Quiz';

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([ ...answers, answer ]);
    loadNextQuestion();
   }

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-400">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold rounded text-2xl border-b border-gray-300 bg-blue-300">{title}</div>
        <div className="p-5">
          {!showResult &&
          <QuestionItem
            question={questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
          }
          {showResult &&
            <Results questions={questions} answers={answers} />
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
          `${currentQuestion + 1} of ${questions.length} question${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartButton} className="px-3 py-3 rounded-md bg-blue-300">Try Again</button>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;



/* import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Rhaenyra Targaryen</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg.grid-cols-3 gap-8">
        {photoList.map(item => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </section>

      {showModal &&
        <Modal image={imageOfModal} closeModal={closeModal} />
      }
    </div>
  );
} */








/*
import { useState } from "react";
import { TodoItem } from "@/types/TodoItem";

const Page = () => {
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<TodoItem[]>([
    { label: 'Teste', checked: false },
    { label: 'Teste 2', checked: false }
  ]);
  
  const handleAddButton = () => {
    if(itemInput.trim() === '') return;
    setList([ ...list, { label: itemInput, checked: false }]);
    setItemInput('');
  }

  const deleteItem = (index: number) => {
    setList(
      list.filter((item, key) => key !== index)
    );
  }

  const toggleItem = (index: number) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;

    /* for(let i in newList) {
      if(index === parseInt(i)) {
        newList[i].checked = !newList[i].checked;
      }
    }*/

  /*  setList(newList);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">To do list</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-600">
        <input 
          type="text"
          placeholder="What do you want?"
          className="flex-l border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Add</button>
      </div>

      <p className="my-4">{list.length} Items</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={index}>
            <input onClick={() => toggleItem(index)} type="checkbox" checked={item.checked} className="w-4 h-4 mr-3"/>
            {item.label} - <button onClick={() => deleteItem(index)}  className="hover:underline">[ deletar ]</button></li>
        ))}
      </ul>

    </div>
  );
} */






/* const Page = () => {
  const [nameInput, setNameInput] = useState('');

  const handleBtnClick = () => {
    alert(nameInput);

  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input 
        type="text" 
        className="border border-black p-3 text-xl text-black rounded" placeholder="Digite seu nome" 
        value={nameInput} 
        onChange={e => setNameInput(e.target.value)}
      />
      <button onClick={handleBtnClick}>Mostrar valor do campo</button>
    </div>
  );
} */


/*import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickButton = () => {
    setCount(count + 1);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-gray-700 p-3">+1</button>
    </div>
  );
} */


/* import { FormEvent } from "react";

const Page = () => {

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Sending");
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-3">Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
} */

/* import { CustomButton } from "@/components/CustomButton";

const Page = () => {

  const handleButton1 = () => alert('Youre');
  const handleButton2 = () => alert('the love');
  const handleButton3 = () => alert('of my life');

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <CustomButton label="Click Here" onCLick={handleButton1} />
      <CustomButton label="Click Here" onCLick={handleButton2}/>
      <CustomButton label="Click Here" onCLick={handleButton3}/>
    </div>
  );
} */

/* "use client"

const Page = () => {
  const handleButtonClick = () => {
    alert("eu te amo, gus liana");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button 
        onClick={handleButtonClick} 
        className="p-3 bg-gray-700 text-white rounded-md">Click Here</button>
    </div>
  );
} */