import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExists = this.usersRepository.findById(user_id);
    if (!userAlreadyExists) {
      throw new Error("User not found");
    }
    if (userAlreadyExists.admin === false) {
      throw new Error("User not Admin Fpund");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
