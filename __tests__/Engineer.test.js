const Engineer = require("../lib/Engineer");


test('if engineer input logs', () => {
   const engineer = new Engineer('Jonathan');
   
   expect(engineer.name).toBe('Jonathan');
   
})

test('engineer id', () => {
    const engineer = new Engineer('', "1234");
    expect(engineer.id).toBe('1234');
})

test('engineer email', () => {
    const engineer = new Engineer('', "", 'email@email.com');
    expect(engineer.id).toBe('email@email.com');
})


test('engineer github', () => {
    const engineer = new Engineer('', '', 'jleimer');
    expect(engineer.email).toBe('jleimer');
})
