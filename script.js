function toggleDescription(element) {
    // element is a particular box in our document,so when user cikcs on that box 
    // we can access the properties of that box/HTML element only, by using (this)
    // as input parameter in toggleDescription() function.

    
    var totalCost = element.querySelector('.cost')
    document.getElementById('total').innerHTML = "Total: " + totalCost.innerHTML

    var radioInput = element.querySelector('#productRadio');

    if (radioInput) {
      radioInput.checked = !radioInput.checked;
    }

    const description = element.querySelector('.description');
    if (description.style.display === 'none') {
      description.style.display = 'block';
    }
 
  }
