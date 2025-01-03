function createTable(data) {
    const table = document.createElement('table');
    table.classList.add('custom-table'); // Add a class for the table styling

    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const headers = ['Route', 'Current', 'Redesign'];
    for (let header of headers) {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    }

    const tbody = table.createTBody();
    for (let rowData of data) {
        const row = tbody.insertRow();
        for (let cellData of rowData) {
            const cell = row.insertCell();
            cell.textContent = cellData;
        }
    }

    return table;
}
// Example usage
const data = [
    ['1', '3 page multi-step process', 'Streamlined to 2 pages'],
    ['1', 'Navigation tabs for each page', 'Added “Save & Continue” button'],
    ['1', '2 types of answers', 'Short answers, paragraph, images, and more'],
    ['1', 'Poll closing date only', 'Added closing time'],
    ['1', 'No integration with ecosystem', 'Allow users to select tags'],
    ['1', 'All questions are required without indication', 'Added optional questions'],
    ['All', 'No confirmation messages', 'Added system feedback'],
    ['2', 'No exit route from voting', '“Save & Finish Later” CTA button'],
    ['3', 'Table view of results only', 'Added “graph view”'],
];

const table = createTable(data);
// document.body.appendChild(table); // Uncomment this line if you want to append to the body
document.getElementById('userflowsTable').appendChild(table);