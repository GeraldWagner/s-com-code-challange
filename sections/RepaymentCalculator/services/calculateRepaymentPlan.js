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

    const firstYearRepayment = calculateMonthlyDebts(
        currentYear,
        interestRate,
        monthsRemainingFirstYear,
        initialMonthlyRate,
        remainingDebt
    );

    remainingDebt = firstYearRepayment.remainingDebt;
    yearlyRepaymentData.push(firstYearRepayment.data);

    if (remainingDebt <= 0) {
        return {
            repaymentPlan: yearlyRepaymentData.slice(0, -1),
            monthlyPayment: initialMonthlyRate,
            remainingDebt: 0,
            remainingLoanDuration: 0,
        };
    }
    currentYear++;

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

        if (remainingDebt <= 0) {
            return {
                repaymentPlan: yearlyRepaymentData.slice(0, -1),
                monthlyPayment: initialMonthlyRate,
                remainingDebt: 0,
                remainingLoanDuration: year,
            };
        }

        currentYear++;
    }

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

        if (remainingDebt <= 0) {
            return {
                repaymentPlan: yearlyRepaymentData.slice(0, -1),
                monthlyPayment: initialMonthlyRate,
                remainingDebt: 0,
                remainingLoanDuration: 12,
            };
        }
    }

    return {
        repaymentPlan: yearlyRepaymentData,
        monthlyPayment: initialMonthlyRate,
        remainingDebt: remainingDebt,
        remainingLoanDuration: durationInYears,
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
