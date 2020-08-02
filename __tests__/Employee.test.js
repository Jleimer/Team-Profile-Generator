const Employee = require("../lib/Employee");


test('if employee input logs', () => {
   const employee = new Employee('Jonathan');
   
   expect(employee.name).toBe('Jonathan');
   
})

test('employee id', () => {
    const employee = new Employee('', "1234");
    expect(employee.id).toBe('1234');
})

test('employe email', () => {
    const employee = new Employee('', '', 'email@email.com');
    expect(employee.email).toBe('email@email.com');
})
