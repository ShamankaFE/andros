import { QUESTIONS, ACTIVIST_CHOICES, REFLECTOR_CHOICES, THEORIST_CHOICES, PRAGMATIST_CHOICES } from './test-data.js';

const testForm = document.querySelector('#test');

const renderTest = () => {
  if (!testForm) {
    return;
  }

  const questionsBlock = testForm.querySelector('.question-block');
  const template = questionsBlock.querySelector('#test-question').content;

  const buttonSubmit = testForm.querySelector('.button--submit');
  const buttonReset = testForm.querySelector('.button--reset');

  const table = document.querySelector('#table-scores');

  const renderQuestion = (el) => {
    const itemClone = template.cloneNode(true);

    const input = itemClone.querySelector('.checkbox__input');
    const label = itemClone.querySelector('.checkbox__label');
    input.value = `v${el.id}`;
    input.id = el.id;
    label.htmlFor = `#${el.id}`;
    // label.htmlFor = `#q${el.id}`;
    label.textContent = `${el.id}. ${el.text}`;

    return itemClone;
  };

  const fragment = document.createDocumentFragment();

  const renderQuestions = (array) => {
    for (let i = 0; i < array.length; i++) {
      const newItem = renderQuestion(array[i]);
      fragment.append(newItem);
    }

    questionsBlock.append(fragment);
  };

  renderQuestions(QUESTIONS);

  const countCheckedInputs = (array) => {
    const checkedInputs = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i].checked) {
        checkedInputs.push(inputs[i]);
      }
    }

    return checkedInputs;
  };

  const countScore = (array_inputs, array_choices) => {
    let sum = 0;
    console.log(array_inputs);
    console.log(array_choices);

    for (let i = 0; i < array_inputs.length; i++) {
      const id = parseInt(array_inputs[i].id, 10);
      if (array_choices.includes(id)) {
        sum++;
      }
    }

    console.log(sum);
    return sum;
  };

  const checkDegree = (score, suffix) => {
    let degree = '';

    switch (suffix) {
      case 'act':
        if (score >= 13) {
          degree = 'Very strong';
        } else if (score >= 11) {
          degree = 'Strong';
        } else if (score >= 7) {
          degree = 'Moderate';
        } else if (score >= 4) {
          degree = 'Low';
        } else {
          degree = 'Very low';
        }
        break;

      case 'ref':
        if (score >= 18) {
          degree = 'Very strong';
        } else if (score >= 15) {
          degree = 'Strong';
        } else if (score >= 12) {
          degree = 'Moderate';
        } else if (score >= 9) {
          degree = 'Low';
        } else {
          degree = 'Very low';
        }
        break;

      case 'the':
        if (score >= 16) {
          degree = 'Very strong';
        } else if (score >= 14) {
          degree = 'Strong';
        } else if (score >= 11) {
          degree = 'Moderate';
        } else if (score >= 8) {
          degree = 'Low';
        } else {
          degree = 'Very low';
        }
        break;

      case 'pra':
        if (score >= 17) {
          degree = 'Very strong';
        } else if (score >= 15) {
          degree = 'Strong';
        } else if (score >= 12) {
          degree = 'Moderate';
        } else if (score >= 9) {
          degree = 'Low';
        } else {
          degree = 'Very low';
        }
        break;
    }

    return degree;
  };

  const renderResults = (score, suffix) => {
    const cellScore = table.querySelector(`#score-${suffix}`);
    const cellLevel = table.querySelector(`#level-${suffix}`);
    const degree = checkDegree(score, suffix);

    cellScore.textContent = score;
    cellLevel.className = '';
    cellLevel.textContent = degree;

    switch (degree) {
      case 'Very strong':
        cellLevel.classList.add('very-strong');
        break;

      case 'Strong':
        cellLevel.classList.add('strong');
        break;

      case 'Moderate':
        cellLevel.classList.add('moderate');
        break;

      case 'Low':
        cellLevel.classList.add('low');
        break;

      case 'Very low':
        cellLevel.classList.add('very-low');
        break;
    }

  };

  const inputs = testForm.querySelectorAll('.checkbox__input');

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    const checkedInputs = countCheckedInputs(inputs);

    const scoreAct = renderResults(countScore(checkedInputs, ACTIVIST_CHOICES), 'act');

    const scoreRef = renderResults(countScore(checkedInputs, REFLECTOR_CHOICES), 'ref');

    const scoreThe = renderResults(countScore(checkedInputs, THEORIST_CHOICES), 'the');

    const scorePra = renderResults(countScore(checkedInputs, PRAGMATIST_CHOICES), 'pra');

    console.log(`Act = ${scoreAct}, Ref = ${scoreRef}, The = ${scoreThe}, Pra = ${scorePra}`);
  };

  const onFormReset = (evt) => {
    evt.preventDefault();

    const cellsScore = table.querySelectorAll('.score');
    const cellsLevel = table.querySelectorAll('.level span');

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        inputs[i].checked = false;
      }
    }

    cellsScore.forEach(el => el.textContent = 'To see the result fill in questionnaire');
    cellsLevel.forEach(el => el.textContent = '...');
    cellsLevel.forEach(el => el.className = '');
  };

  buttonSubmit.addEventListener('click', onFormSubmit);
  buttonReset.addEventListener('click', onFormReset);
};

export { renderTest };
