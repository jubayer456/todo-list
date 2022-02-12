let count = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    const inputText = document.getElementById('input-text').value;
    if (inputText == "") {
        alert("please enter a value");
    }
    else {
        count++;
        const mainTableContent = document.getElementById('mainContentiner');
        const tableContent = document.createElement('tr');
        tableContent.innerHTML =
            `<th scope="row">${count}</th>
        <td>${inputText}</td>
        <td><button class="btn btn-danger delete-btn mx-1">Delete</button ><button class="btn btn-success done-btn">Done</button></td>`;
        mainTableContent.appendChild(tableContent);

        const deleteContent = document.getElementsByClassName('delete-btn');
        const doneContent = document.getElementsByClassName('done-btn');
        for (const button of deleteContent) {
            button.addEventListener('click', function (event) {
                event.target.parentNode.parentNode.style.display = "none";
            })
        }
        document.getElementById('input-text').value = '';

    }
});