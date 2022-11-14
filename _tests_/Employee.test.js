const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Zachary', 99, 'Zachary.Donovan88@outlook');

    expect(employee.name).toBe("Zachary Donovan");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('Zachary', 99, 'Zachary.Donovan88@outlook');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})