export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random()*100000);

export const findById = (id, list) => list.find(item => item.id === id);

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export const updateTodo = (list, todo) => {
  const index = list.findIndex(item => item.id === todo.id);
  return [
    ...list.slice(0, index),
    todo,
    ...list.slice(index + 1)
  ]
};

export const removeTodo = (list, id) => {
  const index = list.findIndex(item => item.id === id);
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
}

export const filterTodos = (list, route) => {
  switch(route) {
    case '/complete':
      return list.filter(item => item.isComplete)
    case '/active':
      return list.filter(item => !item.isComplete)
    default:
      return list;
  }
}

// export const pipe = (...fns) => {

//     // return fns.reduce((acc, fn) => fn(...acc), args);
//     return fns.reduce((acc, fn) => {
//       return (...args) => {
//         return fn(acc(...args))
//       }
//     });

// }
