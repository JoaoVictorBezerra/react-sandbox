export const loadPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ postId: "1", description: "JS Tricks" }]);
    }, 1000);
  });
};
export const loadUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ userId: "1", description: "JS Tricks" }]);
    }, 1000);
  });
};
export const loadTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ todoId: "1", description: "JS Tricks" }]);
    }, 1000);
  });
};

export const main = async () => {
  console.time("responseTime");
  //   const users = await loadUsers();
  //   const posts = await loadPosts();
  //   const todos = await loadTodos();
  const [users, todos, posts] = await Promise.all([
    loadUsers(),
    loadTodos(),
    loadPosts(),
  ]);
  console.log({ users, posts, todos });
  console.timeEnd("responseTime");
};
