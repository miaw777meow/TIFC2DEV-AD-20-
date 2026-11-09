
const UserController = require("./user-controller");
const User = require("./user");

// Prueba 1: agregar un usuario
test('add user to userController', () => {
    const userController = new UserController();
    const user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.getUsers()).toContain(user);
});

// Prueba 2: eliminar un usuario
test('remove user from userController', () => {
    const userController = new UserController();
    const user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);
    userController.remove(user);

    expect(userController.getUsers()).not.toContain(user);
});

// Prueba 3: buscar usuario por email existente
test('find user by existing email', () => {
    const userController = new UserController();
    const user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.findByEmail("santiago@generation.org")).toBe(user);
});

// Prueba 4: buscar usuario por email inexistente
test('find user by non-existing email', () => {
    const userController = new UserController();
    const user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.findByEmail("otro@generation.org")).toBeUndefined();
});

// Prueba 5: buscar usuario por ID existente
test('find user by existing ID', () => {
    const userController = new UserController();
    const user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.findById(1234)).toBe(user);
});

// Prueba 6: buscar usuario por ID inexistente
test('find user by non-existing ID', () => {
    const userController = new UserController();
    const user = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user);

    expect(userController.findById(9999)).toBeUndefined();
});
