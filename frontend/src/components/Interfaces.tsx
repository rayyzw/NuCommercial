export interface JwtPayload {
  id: number,
  email: string
}

export interface UserInterface {
  id?: number,
  name?: string,
  email?: string,
  hashedPassword?: string,
  salt?: string,
  resetToken?: string,
  resetTokenExpiresAt?: Date|string,
  token?: string
}
