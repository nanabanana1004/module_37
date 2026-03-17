for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
        row += (i + j) % 2 === 0 ? "x " : "o ";
    }
    console.log(row.trim());
}
