function calculateSGPA() {
  const javaMarks = parseFloat(document.getElementById('java').value);
  const macmMarks = parseFloat(document.getElementById('macm').value);
  const dmsMarks = parseFloat(document.getElementById('dms').value);
  const lsMarks = parseFloat(document.getElementById('ls').value);
  const dlMarks = parseFloat(document.getElementById('dl').value);
  const memMarks = parseFloat(document.getElementById('mem').value);

  const javaGrade = calculateGrade(javaMarks);
  const macmGrade = calculateGrade(macmMarks);
  const dmsGrade = calculateGrade(dmsMarks);
  const lsGrade = calculateGrade(lsMarks);
  const dlGrade = calculateGrade(dlMarks);
  const memGrade = calculateGrade(memMarks);

  const javaCredit = 6;
  const macmCredit = 4;
  const dmsCredit = 4;
  const lsCredit = 1;
  const dlCredit = 4;
  const memCredit = 5;

  const subjects = ['Java', 'MACM', 'DMS', 'LS', 'DL', 'MEM'];
  const marks = [javaMarks, macmMarks, dmsMarks, lsMarks, dlMarks, memMarks];
  const grades = [javaGrade, macmGrade, dmsGrade, lsGrade, dlGrade, memGrade];
  const credits = [javaCredit, macmCredit, dmsCredit, lsCredit, dlCredit, memCredit];

  let totalCredits = 0;
  let totalSGPA = 0;

  let report = "<h2>Semester Grade Report</h2><table><thead><tr><th>Subject</th><th>Marks</th><th>Grade</th><th>Credits</th></tr></thead><tbody>";

  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i];
    const mark = marks[i];
    const grade = grades[i];
    const credit = credits[i];

    totalCredits += credit;
    totalSGPA += grade * credit;

    report += `<tr><td>${subject}</td><td>${mark}</td><td>${grade}</td><td>${credit}</td></tr>`;
  }

  report += "</tbody></table>";

  const sgpa = totalSGPA / totalCredits;
  report += `<p style="margin-top: 20px;">SGPA: ${sgpa.toFixed(2)}</p>`;

  document.getElementById('result').innerHTML = report;
}

function calculateGrade(marks) {
  if (marks >= 80) {
    return 10;
  } else if (marks >= 70) {
    return 8;
  } else if (marks >= 60) {
    return 7;
  } else if (marks >= 50) {
    return 5;
  } else {
    return 0; // Fail grade
  }
}
