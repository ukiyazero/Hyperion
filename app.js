document.querySelector('#tax-calculator').addEventListener('submit', function (e) {
  e.preventDefault();
  compute();
});

const salary = document.getElementById("monthly-income");
salary.addEventListener('keydown', function () {
  clear();
});

function clear() {
  let inputs = Array.from(document.querySelectorAll('input[type=text]'));
  console.log(inputs);
  inputs.forEach(function (input) {
    if (input.id != "monthly-income") {
      input.value = "";
    }
  });
}

function sanitize(value) {
  return Number(value.replace(/[^0-9\.]+/g, ""));
}

function format(value) {
  let splitter = value.toString().split('.');
  splitter[0] = splitter[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `â‚± ${splitter.join('.')}`;
}

function compute() {

  setSSS();
  setPhilHealth();
  setPagIBIG();
  totalContributions();

  const salary = document.getElementById("monthly-income");
  const contributions = document.getElementById("total-contributions");
  const taxableIncome = sanitize(salary.value) - sanitize(contributions.value);
  let incomeTax = document.getElementById("income-tax");
  let salaryAfterTax = document.getElementById("net-pay-after-tax");

  if (taxableIncome <= 20833) {

    incomeTax.value = PHP - ${"Tax Exempted"}`;
    salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

  } else if (taxableIncome >= 20833 && taxableIncome <= 33332) {

    if (taxableIncome > 20833) {

      incomeTax.value = format(((taxableIncome - 20833) * 0.15).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    } else {

      incomeTax.value = format((0).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    }

  } else if (taxableIncome >= 33333 && taxableIncome <= 66666) {

    if (taxableIncome > 33333) {

      incomeTax.value = format((((taxableIncome - 33333) * 0.20) + 1875).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    } else {

      incomeTax.value = format((2500).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    }

  } else if (taxableIncome >= 66667 && taxableIncome <= 166666) {

    if (taxableIncome > 66667) {

      incomeTax.value = format((((taxableIncome - 66667) * 0.25) + 8541.8).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    } else {

      incomeTax.value = format((10833.33).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    }

  } else if (taxableIncome >= 166667 && taxableIncome <= 666666) {

    if (taxableIncome > 166667) {

      incomeTax.value = format((((taxableIncome - 166667) * 0.30) + 33541.8).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    } else {

      incomeTax.value = format((40833.33).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    }

  } else if (taxableIncome >= 666667) {

    if (taxableIncome > 666667) {

      incomeTax.value = format((((taxableIncome - 666667) * 0.35) + 183541.8).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    } else {

      incomeTax.value = format((200833.33).toFixed(2));
      salaryAfterTax.value = format((salary.value - sanitize(incomeTax.value)).toFixed(2));

    }

  }


  totalDeductions();
  totalNetPay();
}

function setSSS() {
  const salary = document.getElementById("monthly-income").value;
  let sss = document.getElementById("sss");

  const table = [
    [4250, 4749.99, 202.5],
    [4750, 5249.99, 225],
    [5250, 5749.99, 247.5],
    [5750, 6249.99, 270],
    [6250, 6749.99, 292.5],
    [6750, 7249.99, 315],
    [7250, 7749.99, 337.5],
    [7750, 8249.99, 360],
    [8250, 8749.99, 382.5],
    [8750, 9249.99, 405],
    [9250, 9749.99, 427.5],
    [9750, 10249.99, 450],
    [10250, 10749.99, 472.5],
    [10750, 11249.99, 495],
    [11250, 11749.99, 517.5],
    [11750, 12249.99, 540],
    [12250, 12749.99, 562.5],
    [12750, 13249.99, 585],
    [13250, 13749.99, 607.5],
    [13750, 14249.99, 630],
    [14250, 14749.99, 652.5],
    [14750, 15249.99, 675],
    [15250, 15749.99, 697.5],
    [15750, 16249.99, 720],
    [16250, 16749.99, 742.5],
    [16750, 17249.99, 765],
    [17250, 17749.99, 787.5],
    [17750, 18249.99, 810],
    [18250, 18749.99, 832.5],
    [18750, 19249.99, 855],
    [19250, 19749.99, 877.5],
    [19750, 20249.99, 900],
    [20250, 20749.99, 922.5],
    [20750, 21249.99, 945],
    [21250, 21749.99, 967.5],
    [21750, 22249.99, 990],
    [22250, 22749.99, 1012.5],
    [22270, 23249.99, 1035],
    [23250, 23749.99, 1057.5],
    [23750, 24249.99, 1080],
    [24250, 24279.99, 1102.5],
    [24750, 25249.99, 1125],
    [25250, 25749.99, 1147.5],
    [25750, 26249.99, 1170],
    [26250, 26749.99, 1192.5],
    [26750, 27249.99, 1215],
    [27250, 27749.99, 1237.5],
    [27750, 28249.99, 1260],
    [28250, 28749.99, 1282.5],
    [28750, 29249.99, 1305],
    [29250, 29749.99, 1327.5],
    [29750, 1350],
  ];

  for (var i = 0; i < table.length; i++) {

    // if (i == 0){
    //   if (salary <= table[i][0]){
    //     sss.value = format((80).toFixed(2));
    //     break;
    //   }
    // }

    // if salary is less than 4,250
    if (salary < 4250) {
      sss.value = format((180).toFixed(2));
      break;
    }

    if (i == table.length - 1) {
      if (salary >= table[i][0]) {
        sss.value = format((1350).toFixed(2));
        break;
      }
    }

    if (salary >= table[i][0] && salary <= table[i][1]) {
      sss.value = format((table[i][2]).toFixed(2));
      break;
    }
  }

}

function getSSS() {
  return document.getElementById("sss").value;
}

function setPhilHealth() {

  const salary = document.getElementById("monthly-income").value;
  let philhealth = document.getElementById("philhealth");

  if(salary <= 10000){
    philhealth.value = format((450  / 2).toFixed(2));
  } else if (salary >= 10000.01 && salary <= 89999.99){
    philhealth.value = format(((salary * 0.045) / 2).toFixed(2));
  } else if (salary >= 90000){
    philhealth.value = format((4050).toFixed(2));
  }

}

function getPhilHealth() {
  return document.getElementById("philhealth").value;
}

function setPagIBIG(value) {

  const salary = document.getElementById("monthly-income").value;
  let pagibig = document.getElementById("pag-ibig");

  if (salary <= 1500) {
    pagibig.value = format((salary * 0.01).toFixed(2));
  } else if (salary > 1500 && salary < 5000) {
    pagibig.value = format((salary * 0.02).toFixed(2));
  } else if (salary >= 5000) {
    pagibig.value = format((100).toFixed(2));
  }

}

function getPagIBIG() {
  return document.getElementById("pag-ibig").value;
}

function totalContributions() {
  document.getElementById("total-contributions").value = format((
    sanitize(getSSS()) +
    sanitize(getPhilHealth()) +
    sanitize(getPagIBIG())
  ).toFixed(2));
}

function totalDeductions() {
  const totalDeductions = document.getElementById("total-deductions");
  const totalContributions = document.getElementById("total-contributions");
  const incomeTax = document.getElementById("income-tax");

  totalDeductions.value = format((sanitize(incomeTax.value) + sanitize(totalContributions.value)).toFixed(2));
}

function totalNetPay() {

  const salary = document.getElementById("monthly-income").value;
  const totalDeductions = document.getElementById("total-deductions").value;
  const netPay = document.getElementById("net-pay");

  netPay.value = format((sanitize(salary) - sanitize(totalDeductions)).toFixed(2));

}
