let shift = 0;

function gotoLinkGroup(selectorIndex) {
    let newSelector = document.getElementById('link-group-selector-' + selectorIndex);
    let currentSelector = [...document.getElementsByClassName('link-group-selector')]
        .filter(s => s.classList.contains('bg-moon-gray'))[0];
    let currentSelectorIndex = currentSelector.id.split('-')[3];

    switchSelectorColors(currentSelector, newSelector);
    shift += selectorIndex - currentSelectorIndex;
    let scaledShift = -33.33 * shift;

    let newTranslation = 'translateX(' + scaledShift + '%)';
    document.getElementById('link-group').style.transform=newTranslation;
}

function switchSelectorColors(currentSelector, newSelector) {
    currentSelector.classList.remove('bg-moon-gray');
    currentSelector.classList.remove('light-gray');
    currentSelector.classList.add('bg-light-gray');
    currentSelector.classList.add('light-silver');

    newSelector.classList.remove('bg-light-gray');
    newSelector.classList.remove('light-silver');
    newSelector.classList.add('bg-moon-gray');
    newSelector.classList.add('light-gray');
}