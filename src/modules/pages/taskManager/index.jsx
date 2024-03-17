import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import MainLayout from "../../layout/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description 1" },
  ]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = () => {
    if (!newTask.title || !newTask.description) {
      alert("Please enter title and description for the task.");
      return;
    }

    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: "", description: "" });
  };

  const editTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setEditingTaskId(id);
      setNewTask({ title: task.title, description: task.description });
    }
  };

  const updateTask = () => {
    if (!newTask.title || !newTask.description) {
      alert("Please enter title and description for the task.");
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId ? { ...task, ...newTask } : task
      )
    );
    setNewTask({ title: "", description: "" });
    setEditingTaskId(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const styles = {
    taskItem: {
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      borderRadius: "8px",
      margin: "10px 0",
      position: "relative",
    },
    button: {
      margin: "0 5px",
    },
    buttonGroup: {
      position: "absolute",
      right: "20px",
      top: "20px",
    },
    container: {
      marginTop: "20px",
    },
  };

  return (
    <MainLayout>
      <Container className="py-4" style={styles.container}>
        <Form>
          <Form.Group controlId="formTitle" style={formGroupStyle}>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formDescription" style={formDescriptionStyle}>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
          </Form.Group>
          {editingTaskId ? (
            <Button
              variant="outline-primary"
              style={styles.button}
              onClick={updateTask}
            >
              Update Task
            </Button>
          ) : (
            <Button
              variant="outline-success"
              style={styles.button}
              onClick={addTask}
            >
              Add New Task
            </Button>
          )}
          <Button
            variant="outline-secondary"
            style={styles.button}
            onClick={() => {
              setNewTask({ title: "", description: "" });
              setEditingTaskId(null);
            }}
          >
            Clear
          </Button>
        </Form>
        <hr />
        {tasks.map((task) => (
          <div key={task.id} style={styles.taskItem}>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <div style={styles.buttonGroup}>
              <Button
                variant="outline-warning"
                style={styles.button}
                onClick={() => editTask(task.id)}
              >
                Edit
              </Button>
              <Button
                variant="outline-danger"
                style={styles.button}
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </MainLayout>
  );
};

const formGroupStyle = {
  marginBottom: "1rem",
};

const formDescriptionStyle = {
  marginBottom: "1rem",
};
export default TaskManager;
