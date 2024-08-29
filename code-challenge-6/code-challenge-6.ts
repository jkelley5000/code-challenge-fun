
export interface Employee {
    id: number;
    name: string;
    salary: number;
}

const employees = [
    { "id": 1, "name": "Randal Blazey", "salary": 221570 },
    { "id": 2, "name": "Ag Timewell", "salary": 185373 },
    { "id": 3, "name": "Kaye Alcido", "salary": 105158 },
    { "id": 4, "name": "Adelheid Dubarry", "salary": 286637 },
    { "id": 5, "name": "Ainslee Frarey", "salary": 297466 },
    { "id": 6, "name": "Chevalier Klawi", "salary": 233911 },
    { "id": 7, "name": "Darsey Saffen", "salary": 157253 },
    { "id": 8, "name": "Creighton Dog", "salary": 102456 },
    { "id": 9, "name": "Malvin Kinnett", "salary": 174786 },
    { "id": 10, "name": "Lynnell Behling", "salary": 112480 },
    { "id": 11, "name": "Crissie Crips", "salary": 129683 },
    { "id": 12, "name": "Naoma Maiklem", "salary": 121199 }
];

function filterHighEarningEmployees(employees: Employee[], threshold: number): Employee[] {
    // Your implementation here
}