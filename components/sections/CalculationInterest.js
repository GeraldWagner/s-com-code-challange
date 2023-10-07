export function calculateYearlyDepts(
    darlehenshoehe,
    zinssatz,
    tilgungssatz,
    laufzeit
) {
    let restschuld = darlehenshoehe;
    const initZinsanteil = (restschuld / 100) * zinssatz;
    const initTilgungsanteil = (restschuld / 100) * tilgungssatz;
    const initRate = initZinsanteil + initTilgungsanteil;

    const date = new Date();
    const year = date.getFullYear();

    const monthLeft = 12 - (date.getMonth() + 1);
    const monthRate = initRate / 12;

    const tilgungsplanMonth = {
        Jahr: year,
        Zinssatz: zinssatz + " %",
        Tilgungssatz: 0,
        Rate: 0,
        Zinsanteil: 0,
        Tilgungsanteil: 0,
        Restschuld: 0,
    };

    for (let month = 0; month <= monthLeft; month++) {
        const monthZinsanteil = (restschuld / 100 / 12) * zinssatz;
        const monthTilgungsanteil = monthRate - monthZinsanteil;
        const monthTilgungssatz = (monthTilgungsanteil / restschuld / 12) * 100;

        restschuld = restschuld - monthTilgungsanteil;

        tilgungsplanMonth.Tilgungssatz += monthTilgungssatz;
        tilgungsplanMonth.Rate += monthRate;
        tilgungsplanMonth.Zinsanteil += monthZinsanteil;
        tilgungsplanMonth.Tilgungsanteil += monthTilgungsanteil;
        tilgungsplanMonth.Restschuld = restschuld;
    }

    const tilgungsplanYear = [
        {
            Jahr: year,
            Zinssatz: zinssatz + " %",
            Tilgungsanteil: tilgungsplanMonth.Tilgungsanteil.toFixed(2) + " €",
            Rate: tilgungsplanMonth.Rate.toFixed(2) + " €",
            Zinsanteil: tilgungsplanMonth.Zinsanteil.toFixed(2) + " €",
            Tilgungssatz: tilgungsplanMonth.Tilgungssatz.toFixed(2) + " %",
            Restschuld: tilgungsplanMonth.Restschuld.toFixed(2) + " €",
        },
    ];

    for (let jahr = 1; jahr <= laufzeit; jahr++) {
        const yearZinsanteil = (restschuld / 100) * zinssatz;
        const yearTilgungsanteil = initRate - yearZinsanteil;
        const yearTilgungssatzneu = (yearTilgungsanteil / restschuld) * 100;

        restschuld = restschuld - yearTilgungsanteil;

        tilgungsplanYear.push({
            Jahr: jahr + year,
            Zinssatz: zinssatz + " %",
            Tilgungssatz: yearTilgungssatzneu.toFixed(2) + " %",
            Rate: initRate.toFixed(2) + " €",
            Zinsanteil: yearZinsanteil.toFixed(2) + " €",
            Tilgungsanteil: yearTilgungsanteil.toFixed(2) + " €",
            Restschuld: restschuld.toFixed(2) + " €",
        });
    }

    return { tilgungsplan: tilgungsplanYear, monthlyRate: monthRate };
}
