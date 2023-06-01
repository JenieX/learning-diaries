/**
 * A TypeScript partial type is a utility type that allows you to create a new type
 * by taking an existing type and making all of its properties optional.
 */

interface User {
  username: string,
  email: string,
  password: string,
  avatar?: string,
}

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const currentUser: User = {
  username: 'Jack',
  email: 'jack@example.com',
  password: '123456',
  avatar: 'https://example.com/avatar.jpg',
};

const newData = {
  email: 'jack2023@example.com',
  password: 'f$8d4V56-0',
};

const updatedUser = updateUser(currentUser, newData);

console.log(updatedUser);
