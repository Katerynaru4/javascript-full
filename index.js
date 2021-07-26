const eventsList = document.querySelector('.events-list');

const rectDiv = document.querySelector('.rect_div');
const rectP = document.querySelector('.rect_p');
const rectSpan = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;" >${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

rectDiv.addEventListener('click', logGreenDiv);
rectP.addEventListener('click', logGreenP);
rectSpan.addEventListener('click', logGreenSpan);

rectDiv.addEventListener('click', logGreyDiv, { capture: true });
rectP.addEventListener('click', logGreyP, { capture: true });
rectSpan.addEventListener('click', logGreySpan, { capture: true });

const clearBtn = document.querySelector('.clear-btn');
const attachHandlersbtn = document.querySelector('.attach-handlers-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');

clearBtn.addEventListener('click', () => {
  eventsList.innerHTML = '';
});
attachHandlersbtn.addEventListener('click', () => {
  rectDiv.addEventListener('click', logGreenDiv);
  rectP.addEventListener('click', logGreenP);
  rectSpan.addEventListener('click', logGreenSpan);

  rectDiv.addEventListener('click', logGreyDiv, { capture: true });
  rectP.addEventListener('click', logGreyP, { capture: true });
  rectSpan.addEventListener('click', logGreySpan, { capture: true });
});
removeHandlersBtn.addEventListener('click', () => {
  rectDiv.removeEventListener('click', logGreenDiv);
  rectP.removeEventListener('click', logGreenP);
  rectSpan.removeEventListener('click', logGreenSpan);

  rectDiv.removeEventListener('click', logGreyDiv, { capture: true });
  rectP.removeEventListener('click', logGreyP, { capture: true });
  rectSpan.removeEventListener('click', logGreySpan, { capture: true });
});
