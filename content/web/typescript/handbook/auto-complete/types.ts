export type Name = 'Alice' | 'Bob' | 'Charlie' | 'David' | 'Eve';
export type Age = 18 | 25 | 31 | 42 | 50;
export type Gender = 'Female' | 'Male';
export type Phone = '555-1234' | '555-3456' | '555-5678' | '555-7890' | '555-9012';

export type Email =
| 'alice@example.com'
| 'bob@example.com'
| 'charlie@example.com'
| 'david@example.com'
| 'eve@example.com';

export type City = 'Madrid' | 'Paris' | 'Rio' | 'Sydney' | 'Tokyo';

export type Hobby =
| 'coding'
| 'cooking'
| 'gardening'
| 'hiking'
| 'meditation'
| 'painting'
| 'photography'
| 'reading'
| 'running'
| 'swimming'
| 'traveling'
| 'writing'
| 'yoga';

export interface Person {
  name: Name,
  age: Age,
  gender: Gender,
  phone: Phone,
  email: Email,
  city: City,
  hobbies: Hobby[],
}
