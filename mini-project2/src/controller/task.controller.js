import { readTasks, writeTasks } from "../utils/file.utils.js";

export const getAllTask = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const tasks = await readTasks();
  res.json(tasks.filter((task) => task.username === req.session.user.username));
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const tasks = await readTasks();

  const newTask = {
    id: Date.now(),
    username: req.session.user.username,
    title,
    description,
    completed: false,
  }

  tasks.push(newTask);
  await writeTasks(tasks);

  res.status(201).json(newTask);
};

export const updateTask = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const { id } = req.params;
  const { title, description, completed } = req.body;

  const tasks = await readTasks();
  const taskIndex = tasks.findIndex(
    (task) =>
      task.id === Number(id) && task.username === req.session.user.username
  );

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found or unauthorized" });
  }

  // Merge changes
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title ?? tasks[taskIndex].title,
    description: description ?? tasks[taskIndex].description,
    completed: completed ?? tasks[taskIndex].completed,
  };

  await writeTasks(tasks);

  res.json(tasks[taskIndex]);
};

export const deleteTask = async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const { id } = req.params;
  const tasks = await readTasks();

  const task = tasks.find(
    (t) => t.id === Number(id) && t.username === req.session.user.username
  );

  if (!task) {
    return res.status(404).json({ message: "Task not found or unauthorized" });
  }

  const updatedTasks = tasks.filter((t) => t.id !== Number(id));

  await writeTasks(updatedTasks);

  res.json({ message: "Task deleted successfully" });
};