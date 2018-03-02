function swapBgColor() {
    let body = document.getElementById('body-cover');
    let right = document.getElementById('calendar');
    let left = document.getElementById('blocker');
    let swapper = document.getElementById('swapper');
    if (body.classList.contains('bg-near-white')) {
        body.classList.remove('bg-near-white');
        body.classList.add('bg-dark-gray');

        left.classList.remove('bg-near-white');
        left.classList.add('bg-dark-gray');

        swapper.classList.remove('bg-dark-gray');
        swapper.classList.add('bg-near-white');


        right.classList.remove('b--dark-gray');
        right.classList.remove('dark-gray');
        right.classList.add('b--near-white');
        right.classList.add('near-white');
    } else {
        body.classList.remove('bg-dark-gray');
        body.classList.add('bg-near-white');

        right.classList.remove('b--near-white');
        right.classList.remove('near-white');
        right.classList.add('b--dark-gray');
        right.classList.add('dark-gray');
        
        left.classList.remove('bg-dark-gray');
        left.classList.add('bg-near-white');

        swapper.classList.add('bg-dark-gray');
        swapper.classList.remove('bg-near-white');
    }
}
