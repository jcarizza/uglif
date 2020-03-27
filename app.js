/**
* Si tiene más de 38 grados y algún síntoma va a diagnóstico,
* si tiene más de 38 grados sin síntomas va a cuarentena
* y si tiene menos de 38 grados #quedatencasa
*/

if (bodyTemperature >= 38 &&
    (
        (dificultyBreathing ||
            (
                dificultyBreathing && (
                    diabetes ||
                    cancer ||
                    isPregnant ||
                    isOver60YearsOld ||
                    hepatic ||
                    kidneyDisease ||
                    respiratoryDisease
                )
            )
        ) || (
            diabetes ||
            cancer ||
            isPregnant ||
            isOver60YearsOld ||
            hepatic ||
            kidneyDisease ||
            respiratoryDisease
        )
    )) {
    alert('Diagnostico');
} else if (bodyTemperature >= 38) {
    alert('Cuarentena');
} else {
    alert('Buen estado');
}
