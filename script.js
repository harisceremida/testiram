document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const answers = {};
    for (const [name, value] of formData.entries()) {
        answers[name] = value;
    }
    console.log('Odgovori:', answers);
    alert('Hvala na popunjavanju ankete!');
});
