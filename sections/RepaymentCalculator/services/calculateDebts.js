const calculateDebts = (darlehenshoehe, zinssatz, tilgungssatz, laufzeit) => {
    let restschuld = darlehenshoehe;
    const initZinsanteil = (restschuld / 100) * zinssatz;
    const initTilgungsanteil = (restschuld / 100) * tilgungssatz;
    const initRate = initZinsanteil + initTilgungsanteil;

    const date = new Date();
    let year = date.getFullYear();

    const monthRate = initRate / 12;
    const monthLeftFistYear = 12 - (date.getMonth() + 1);

    const tilgungsplanYear = [];

    /* First Year */
    const tilgungsplanFirstYear = calculateDebtsByMonth(
        year,
        zinssatz,
        monthLeftFistYear,
        monthRate,
        restschuld
    );

    restschuld = tilgungsplanFirstYear.rs;
    tilgungsplanYear.push(tilgungsplanFirstYear.tp);
    year++;

    /* Middle Years */
    for (let jahr = 1; jahr < laufzeit; jahr++) {
        const yearZinsanteil = (restschuld / 100) * zinssatz;
        const yearTilgungsanteil = initRate - yearZinsanteil;

        restschuld = restschuld - yearTilgungsanteil;

        tilgungsplanYear.push({
            Jahr: year,
            Rate: initRate.toFixed(2) + " €",
            Zinsanteil: yearZinsanteil.toFixed(2) + " €",
            Tilgungsanteil: yearTilgungsanteil.toFixed(2) + " €",
            Restschuld: restschuld.toFixed(2) + " €",
        });
        year++;
    }

    /* Last Year */
    const monthLeftLastYear = 12 - monthLeftFistYear;

    if (monthLeftLastYear !== 0) {
        const tilgungsplanLastYear = calculateDebtsByMonth(
            year,
            zinssatz,
            monthLeftLastYear,
            monthRate,
            restschuld
        );

        tilgungsplanYear.push(tilgungsplanLastYear.tp);
        restschuld = tilgungsplanLastYear.rs;
    }

    return { tilgungsplan: tilgungsplanYear, monthlyRate: monthRate };
};

function calculateDebtsByMonth(
    jahr,
    zinssatz,
    monthLaufzeit,
    monthRate,
    restschuld
) {
    let tilgungsplan = {
        Jahr: jahr,
        Rate: 0,
        Zinsanteil: 0,
        Tilgungsanteil: 0,
        Restschuld: 0,
    };

    for (let month = 0; month <= monthLaufzeit; month++) {
        const monthZinsanteil = (restschuld / 100 / 12) * zinssatz;
        const monthTilgungsanteil = monthRate - monthZinsanteil;

        restschuld = restschuld - monthTilgungsanteil;

        tilgungsplan.Rate += monthRate;
        tilgungsplan.Zinsanteil += monthZinsanteil;
        tilgungsplan.Tilgungsanteil += monthTilgungsanteil;
        tilgungsplan.Restschuld = restschuld;
    }

    tilgungsplan = {
        Jahr: tilgungsplan.Jahr,
        Rate: tilgungsplan.Rate.toFixed(2) + " €",
        Zinsanteil: tilgungsplan.Zinsanteil.toFixed(2) + " €",
        Tilgungsanteil: tilgungsplan.Tilgungsanteil.toFixed(2) + " €",
        Restschuld: tilgungsplan.Restschuld.toFixed(2) + " €",
    };

    return { tp: tilgungsplan, rs: restschuld };
}

export default calculateDebts;
