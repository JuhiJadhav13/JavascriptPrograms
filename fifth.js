const Employees = {
    employees: [
        {
            id: 1,
            name: 'Juhi Jadhav',
            position: 'Software Engineer',
            department: 'Engineering',
            contact: {
                email: 'abcd@gmail.com',
                phone: '123-456-7890',
                address: {
                    city: 'Pune',
                    
                }
            }
        },
        {
            id: 2,
            name: 'Sandhya Kamthe',
            position: 'Product Manager',
            department: 'Product Management',
            contact: {
                email: 'xyz@gmail.com',
                phone: '987-654-3210',
                address: {   
                    city: 'Mumbai',
                    
                }
            }
        }
    ]
};

console.log(Employees.employees[0].name); 
console.log(Employees.employees[1].contact.email);