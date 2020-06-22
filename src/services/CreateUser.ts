/**
 * Para criar: nome, email, senha
 * esse '|' no TechObject significa "ou". Então pode ser uma string ou um objeto do tipo TechObject
 */

 interface TechObject {
     title: string;
     experience: number;
 }

 interface CreateUserData {
     name ?: string;
     email : string;
     password : string;
     techs: Array<string | TechObject>;
 }

export default function createUser({ name, email, password, techs }: CreateUserData) {
    const user = {
        name,
        email,
        password,
        techs
    }

    return user;
}