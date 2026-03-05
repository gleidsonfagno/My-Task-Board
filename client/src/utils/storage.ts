import type { Board } from "../types/data";

const STORAGE_KEY = "my-task-board";

export function getBoard() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

export function saveBoard(board: Board) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
}