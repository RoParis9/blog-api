import { IUsersRepository } from "../repositories/interfaces/IUserRepository";
import bcrypt from 'bcrypt'

export class CreateUserService{

  constructor(private userRepository:IUsersRepository){}

  async execute(name:string,email:string,password:string){
    if(!name || !email || !password){
      throw new Error("All fields are required!")
    }

    const existUser = await this.userRepository.findEmail(email)
    
    if(existUser){
      throw new Error("Email already register!")
    }
    
    //encrypt password
    const hashPassword = await bcrypt.hash(password, 10)

    const user = await this.userRepository.create(name,email,hashPassword)

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }

  }
}
