const arenaElem = document.querySelector('.arena');

const generateNumbersArray = (from, to) => {
  const arr = [];
  for (let i = from; i <= to; i++) arr.push(i);
  return arr;
};

const getLineSeats = () =>
  generateNumbersArray(1, 10)
    .map(
      (seatNumber) =>
        `<div
       class="sector__seat"
      data-seat-number="${seatNumber}">
      </div>`
    )
    .join('');

const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumbersArray(1, 10)
    .map(
      (lineNumber) =>
        `<div class="sector__line"
      data-line-number="${lineNumber}"
    >${seatsString}
    </div>`
    )
    .join('');
};

const renderArena = () => {
  const linesString = getSectorLines();
  const sectorsString = generateNumbersArray(1, 3)
    .map(
      (sectorNumber) =>
        `<div class="sector"
      data-sector-number="${sectorNumber}"
     >${linesString}</div>`
    )
    .join('');
  arenaElem.innerHTML = sectorsString;
};
renderArena();

const boardSelectedSeat = document.querySelector('.board__selected-seat');

const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) return;

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  boardSelectedSeat.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);
