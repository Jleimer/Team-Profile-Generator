const Manager = require("../lib/Manager");


test('if manager input logs', () => {
   const manager = new Manager('Jonathan');
   
   expect(manager.name).toBe('Jonathan');
   
})

test('manager id', () => {
    const manager = new Manager('', "1234");
    expect(manager.id).toBe('1234');
})

test('manager email', () => {
    const manager = new Manager('', '', 'email@email.com');
    expect(manager.email).toBe('email@email.com');
})

test('office number', () => {
    const manager = new Manager('', '', '', "123456");
    expect(manager.office).toBe('123456');
})
