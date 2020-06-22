"use strict";
/**
 * Para criar: nome, email, senha
 * esse '|' no TechObject significa "ou". Então pode ser uma string ou um objeto do tipo TechObject
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, techs = _a.techs;
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs
    };
    return user;
}
exports.default = createUser;
