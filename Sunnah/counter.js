function incrementCounter(button) {
    const counterElement = button; // The button itself contains the counter value
    const textElement = button.previousElementSibling; // Get the adjacent div for text
    let counterValue = parseInt(counterElement.textContent.split('/')[0]); // Get the current value of the counter
    const maxCounterValue = 10;

    if (counterValue < maxCounterValue) {
        counterValue++;
        counterElement.textContent = `${counterValue}/10`;
    }
}