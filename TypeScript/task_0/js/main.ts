interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mohammed",
  lastName: "Al-Dosari",
  age: 24,
  location: "Riyadh"
};

const student2: Student = {
  firstName: "Sara",
  lastName: "Ahmed",
  age: 23,
  location: "Jeddah"
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
