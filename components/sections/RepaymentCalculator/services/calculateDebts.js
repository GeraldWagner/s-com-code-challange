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
    const tilgungsplanFirstYear = calculateTilgungsplanByMonth(
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
        const yearTilgungssatzneu = (yearTilgungsanteil / restschuld) * 100;

        restschuld = restschuld - yearTilgungsanteil;

        tilgungsplanYear.push({
            Jahr: year,
            Zinssatz: zinssatz + " %",
            Tilgungssatz: yearTilgungssatzneu.toFixed(2) + " %",
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
        const tilgungsplanLastYear = calculateTilgungsplanByMonth(
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

function calculateTilgungsplanByMonth(
    jahr,
    zinssatz,
    monthLaufzeit,
    monthRate,
    restschuld
) {
    let tilgungsplan = {
        Jahr: jahr,
        Zinssatz: zinssatz + " %",
        Tilgungssatz: 0,
        Rate: 0,
        Zinsanteil: 0,
        Tilgungsanteil: 0,
        Restschuld: 0,
    };

    for (let month = 0; month <= monthLaufzeit; month++) {
        const monthZinsanteil = (restschuld / 100 / 12) * zinssatz;
        const monthTilgungsanteil = monthRate - monthZinsanteil;
        const monthTilgungssatz = (monthTilgungsanteil / restschuld / 12) * 100;

        restschuld = restschuld - monthTilgungsanteil;

        tilgungsplan.Tilgungssatz += monthTilgungssatz;
        tilgungsplan.Rate += monthRate;
        tilgungsplan.Zinsanteil += monthZinsanteil;
        tilgungsplan.Tilgungsanteil += monthTilgungsanteil;
        tilgungsplan.Restschuld = restschuld;
    }

    tilgungsplan = {
        Jahr: tilgungsplan.Jahr,
        Zinssatz: tilgungsplan.Zinssatz,
        Tilgungssatz: tilgungsplan.Tilgungssatz.toFixed(2) + " %",
        Rate: tilgungsplan.Rate.toFixed(2) + " €",
        Zinsanteil: tilgungsplan.Zinsanteil.toFixed(2) + " €",
        Tilgungsanteil: tilgungsplan.Tilgungsanteil.toFixed(2) + " €",
        Restschuld: tilgungsplan.Restschuld.toFixed(2) + " €",
    };

    return { tp: tilgungsplan, rs: restschuld };
}

export default calculateDebts;
