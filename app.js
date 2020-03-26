if (
    (bodyTemperature >= && dificultyBreathing) ||
    (bodyTemperature >= && dificultyBreathing && diabetes) ||
    (bodyTemperature >= && dificultyBreathing && cancer) ||
    (bodyTemperature >= && dificultyBreathing && isPregnant) ||
    (bodyTemperature >= && dificultyBreathing && isOver60YearsOld) ||
    (bodyTemperature >= && dificultyBreathing && hepatic) ||
    (bodyTemperature >= && dificultyBreathing && kidneyDisease) ||
    (bodyTemperature >= && dificultyBreathing && respiratoryDisease) ||
    (bodyTemperature >= && diabetes) ||
    (bodyTemperature >= && cancer) ||
    (bodyTemperature >= && isPregnant) ||
    (bodyTemperature >= && isOver60YearsOld) ||
    (bodyTemperature >= && hepatic) ||
    (bodyTemperature >= && kidneyDisease) ||
    (bodyTemperature >= && respiratoryDisease) ||
) {
    console.log('foo')
} else if (bodyTemperature => 38) {
    console.log('faa')
} else if (bodyTemperature < 38) {
    console.log('bar')
} else {
    console.log('lalala')
}
