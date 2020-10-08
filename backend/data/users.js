import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'AdminUser',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'James',
    email: 'James@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Smith',
    email: 'Smith@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
