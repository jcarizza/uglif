var symptom = [diabetes, cancer, isPregnant, isOver60YearOld, hepatic, kidneyDisease, respiratoryDisease].filter(symt => symt);

var anySymptom = symptom.length > 0;

if (bodyTemperature >= 38)
{
    if(difficultyBreathing && anySymptom || difficultyBreathing || anySymptom)
    {
        console.log('Diagnostico');
    }else
    {
        console.log('Cuarentena');
    }
    
}else
{
    console.log('Buen estado');
}
    
 
