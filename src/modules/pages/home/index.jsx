import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useState } from "react";

const Home = (props) => {
  const [textBoxes, setTextBoxes] = useState([
    { id: 1, value: "", error: false },
  ]);

  const addTextBox = () => {
    const newTextBoxes = [
      ...textBoxes,
      { id: textBoxes.length + 1, value: "", error: false },
    ];
    setTextBoxes(newTextBoxes);
  };

  const deleteTextBox = (id) => {
    const updatedTextBoxes = textBoxes.filter((textBox) => textBox.id !== id);
    setTextBoxes(updatedTextBoxes);
  };

  const handleChange = (id, value) => {
    const updatedTextBoxes = textBoxes.map((textBox) =>
      textBox.id === id
        ? { ...textBox, value: value, error: !isValid(value) }
        : textBox
    );
    setTextBoxes(updatedTextBoxes);
  };

  const isValid = (value) => {
    return !isNaN(value) || value === "";
  };

  const total = textBoxes.reduce(
    (acc, textBox) => acc + parseFloat(textBox.value || 0),
    0
  );

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <button
          onClick={addTextBox}
          type="submit"
          className={
            "bg-brand text-white flex mb-[20px] px-6 py-2 rounded-md mt-5"
          }
        >
          Add
        </button>
        {textBoxes.map((textBox) => (
          <div
            key={textBox.id}
            className="mb-[20px] flex items-center justify-between gap-[20px]"
          >
            <input
              type="text"
              value={textBox.value}
              className={`w-[100%] border-[1px] py-2 px-4 ${textBox.error ? "border-red-500" : "border-gray-5"}`}
              onChange={(e) => handleChange(textBox.id, e.target.value)}
            />
            {textBox.error && (
              <div className="text-red-500">Please enter a valid number.</div>
            )}
            <button
              onClick={() => deleteTextBox(textBox.id)}
              type="submit"
              className={"bg-red text-white flex px-6 py-2 rounded-md"}
            >
              Delete
            </button>
          </div>
        ))}
        <div>Total: {total}</div>
      </div>
    </MainLayout>
  );
};

const styles = {
  wrapper: "mx-auto py-[100px] px-[100px]  my-[100px] ",
};

export default Home;
