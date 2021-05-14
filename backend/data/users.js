import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'AdminUser',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Aman Sahatna',
    email: 'aman@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Anjali',
    email: 'anjali@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
export default users;
