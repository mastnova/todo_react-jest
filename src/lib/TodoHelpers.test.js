import {addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './TodoHelpers';

test('Should add the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true}
  ];
  const newTodo = {id: 3, name: 'three', isComplete: false};
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ]
  const result = addTodo(startTodos, newTodo);

  expect(result).toEqual(expected);
});

test('Should return todo by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true}
  ];
  const expected = {id: 2, name: 'two', isComplete: true};
  const result = findById(2, startTodos);

  expect(result).toEqual(expected);
});

test('Should toggle isComplete prop of todo', () => {
  const todo = {id: 2, name: 'two', isComplete: false};
  const expected = {id: 2, name: 'two', isComplete: true};
  const result = toggleTodo(todo);

  expect(result).toEqual(expected);
});

test('Should update todo', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];
  const updatedTodo = {id: 2, name: 'two', isComplete: false};
  const result = updateTodo(startTodos, updatedTodo);
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  expect(result).toEqual(expected);
});

test('Should remove an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];
  const targetId = 2;
  const result = removeTodo(startTodos, targetId);
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  expect(result).toEqual(expected);
})

test('filterTodos should return all items for root route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];
  const result = filterTodos(startTodos, '/');

  expect(result).toEqual(startTodos);
})

test('filterTodos should return complete items for /complete route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];
  const result = filterTodos(startTodos, '/complete');
  const expected = [{id: 2, name: 'two', isComplete: true}];

  expect(result).toEqual(expected);
})

test('filterTodos should return active items for /active route', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: true},
    {id: 3, name: 'three', isComplete: false}
  ];
  const result = filterTodos(startTodos, '/active');
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ];

  expect(result).toEqual(expected);
})
