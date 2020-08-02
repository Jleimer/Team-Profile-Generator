const Intern = require("../lib/Intern");


test('if intern input logs', () => {
   const intern = new Intern('Jonathan');
   
   expect(intern.name).toBe('Jonathan');
   
})

test('intern id', () => {
    const intern = new Intern('', "1234");
    expect(intern.id).toBe('1234');
})

test('intern email', () => {
    const intern = new Intern('', "", 'email@email.com');
    expect(intern.email).toBe('email@email.com');
})

test('intern school', () => {
    const intern = new Intern('', '', 'jleimer');
    expect(intern.email).toBe('jleimer');
})
