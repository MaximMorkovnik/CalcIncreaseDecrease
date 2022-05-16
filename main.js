function main() {
    function createCalc(container) {
        if (!container) {
            return;
        }

        let enabled = true;

        function detectEnabled() {
            if (enabled) {
                container.classList.remove('disabled');
            } else {
                container.classList.add('disabled');
            }
        }

        const value = container.querySelector('.value');
        const inc = container.querySelector('.increase');
        const dec = container.querySelector('.decrease');

        if (inc) {
            inc.addEventListener('click', (event) => {
                event.stopPropagation();

                if (enabled) {
                    value.innerText = parseInt(value.innerText) + 1;
                }

            });
        }

        if (dec) {
            dec.addEventListener('click', (event) => {
                event.stopPropagation();

                if (enabled) {
                    value.innerText = parseInt(value.innerText) - 1;
                }

            });
        }

        container.addEventListener('click', () => {
            if (enabled === true) {
                enabled = false;
            } else {
                enabled = true;
            };
            // enabled = !enabled; //тоже самое, только сокращенно

            detectEnabled();
        });

        detectEnabled();
    }

    const calcs = document.querySelectorAll('.calc');

    console.log(calcs);

    for (let i = 0; i < calcs.length; i++) {
        createCalc(calcs[i]);
    }
}

main();
