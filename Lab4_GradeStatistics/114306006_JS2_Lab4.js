const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("gradeTable").getElementsByTagName("tbody")[0];

let count = 0;

submitBtn.addEventListener("click", function () {
    if (mathInput.value === "" || englishInput.value === "") {
        alert("Please enter both grades.");
        return;
    }

    const math = Number(mathInput.value);
    const english = Number(englishInput.value);
    const avg = ((math + english) / 2).toFixed(2);

    count++;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${count}</td>
        <td>${math}</td>
        <td>${english}</td>
        <td>${avg}</td>
    `;

    tableBody.appendChild(row);

    updateColumnAverages();

    mathInput.value = "";
    englishInput.value = "";
});

function updateColumnAverages() {
    const rows = tableBody.getElementsByTagName("tr");
    let mathSum = 0;
    let englishSum = 0;

    for (let i = 0; i < rows.length; i++) {
        mathSum += Number(rows[i].cells[1].innerText);
        englishSum += Number(rows[i].cells[2].innerText);
    }

    const n = rows.length;

    const mathAvg = (mathSum / n).toFixed(2);
    const englishAvg = (englishSum / n).toFixed(2);
    const overallAvg = ((mathSum + englishSum) / (n * 2)).toFixed(2);

    document.getElementById("mathAvg").innerText = mathAvg;
    document.getElementById("englishAvg").innerText = englishAvg;
    document.getElementById("overallAvg").innerText = overallAvg;
}