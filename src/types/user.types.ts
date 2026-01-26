interface User {
  firstName: string
  lastName: string
  email: string
  providers: 'firebase' | 'google'
}

export default User
