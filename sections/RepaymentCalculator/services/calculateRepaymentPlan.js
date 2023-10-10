const calculateRepaymentPlan = (
    loanAmount,
    interestRate,
    repaymentRate,
    durationInYears
) => {
    let remainingDebt = loanAmount;
    const initialInterest = (remainingDebt / 100) * interestRate;
    const initialRepayment = (remainingDebt / 100) * repaymentRate;
    const initalRate = initialInterest + initialRepayment;

    const date = new Date();
    let currentYear = date.getFullYear();

    const monthsRemainingFirstYear = 12 - (date.getMonth() + 1);
    const initialMonthlyRate = initalRate / 12;

    const yearlyRepaymentData = [];

    // Calulate the first year with monthly rate
    const firstYearRepayment = calculateMonthlyDebts(
        currentYear,
        interestRate,
        monthsRemainingFirstYear,
        initialMonthlyRate,
        remainingDebt
    );

    remainingDebt = firstYearRepayment.remainingDebt;
    yearlyRepaymentData.push(firstYearRepayment.data);
    currentYear++;

    // Calculate the middle years with yearly rate
    for (let year = 1; year < durationInYears; year++) {
        const yearInterest = (remainingDebt / 100) * interestRate;
        const yearRepayment = initalRate - yearInterest;

        remainingDebt -= yearRepayment;

        yearlyRepaymentData.push({
            Year: currentYear,
            RateForYear: initalRate,
            Interest: yearInterest,
            Repayment: yearRepayment,
            RemainingDebt: remainingDebt,
        });
        currentYear++;
    }

    // Calculate the last year with monthly rate
    const monthsRemainingLastYear = 12 - monthsRemainingFirstYear;

    if (monthsRemainingLastYear !== 0) {
        const lastYearRepayment = calculateMonthlyDebts(
            currentYear,
            interestRate,
            monthsRemainingLastYear,
            initialMonthlyRate,
            remainingDebt
        );

        yearlyRepaymentData.push(lastYearRepayment.data);
        remainingDebt = lastYearRepayment.remainingDebt;
    }

    return {
        repaymentPlan: yearlyRepaymentData,
        monthlyPayment: initialMonthlyRate,
    };
};

function calculateMonthlyDebts(
    year,
    interestRate,
    durationInMonth,
    monthlyRate,
    remainingDebt
) {
    let repaymentData = {
        Year: year,
        MonthlyRate: 0,
        Interest: 0,
        Repayment: 0,
        RemainingDebt: 0,
    };

    for (let month = 0; month < durationInMonth; month++) {
        const monthlyInterest = (remainingDebt / 100 / 12) * interestRate;
        const monthlyRepayment = monthlyRate - monthlyInterest;

        remainingDebt -= monthlyRepayment;

        repaymentData.MonthlyRate += monthlyRate;
        repaymentData.Interest += monthlyInterest;
        repaymentData.Repayment += monthlyRepayment;
        repaymentData.RemainingDebt = remainingDebt;
    }

    repaymentData = {
        Year: repaymentData.Year,
        RateForYear: repaymentData.MonthlyRate,
        Interest: repaymentData.Interest,
        Repayment: repaymentData.Repayment,
        RemainingDebt: repaymentData.RemainingDebt,
    };

    return { data: repaymentData, remainingDebt };
}

export default calculateRepaymentPlan;
