/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Todo } from '../types/Todo';
import cn from 'classnames';

interface Props {
  todo: Todo;
  deleteItemTodo?: number;
  loadedDelete?: boolean;
  deleteTodoItem: (todoId: number) => void;
  hasNewTodo: boolean;
}

export const TodoCard: React.FC<Props> = props => {
  const { todo, deleteItemTodo, loadedDelete, deleteTodoItem, hasNewTodo } =
    props;

  return (
    <>
      <div data-cy="Todo" className={cn('todo', { completed: todo.completed })}>
        <label className="todo__status-label">
          <input
            data-cy="TodoStatus"
            type="checkbox"
            className="todo__status"
            checked={todo.completed}
          />
        </label>

        <span data-cy="TodoTitle" className="todo__title">
          {todo.title}
        </span>

        <button
          type="button"
          className="todo__remove"
          data-cy="TodoDelete"
          onClick={() => deleteTodoItem(todo.id)}
        >
          ×
        </button>

        <div
          data-cy="TodoLoader"
          className={cn('modal', 'overlay', {
            'is-active':
              hasNewTodo ||
              (loadedDelete && todo.completed) ||
              todo.id === deleteItemTodo,
          })}
        >
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div>
    </>
  );
};
