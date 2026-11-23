// 문제: [질문, 보기 4개, 정답의 위치(0부터), 쉬운 힌트, 읽을 글(선택)]
const questions = {
  math: {
    name: '기초 수학',
    test: [
      ['3 + 4는 얼마일까요?', ['5', '6', '7', '8'], 2],
      ['사탕 12개를 3명이 똑같이 나누면 한 명은 몇 개를 받나요?', ['3개', '4개', '5개', '6개'], 1]
    ],
    basic: [
      ['사과 3개에 2개를 더 받았어요. 모두 몇 개일까요?', ['4개', '5개', '6개', '7개'], 1, '처음 가진 3개에서 손가락을 하나씩 펴며 2개를 더 세어 봐요.'],
      ['연필 8자루 중 3자루를 주었어요. 몇 자루가 남았나요?', ['3자루', '4자루', '5자루', '6자루'], 2, '8개를 그린 뒤, 3개에 줄을 긋고 남은 것을 세어 봐요.'],
      ['2개씩 담긴 상자가 3개 있어요. 모두 몇 개일까요?', ['5개', '6개', '7개', '8개'], 1, '상자마다 2개예요. 2를 세 번 더해 봐요.'],
      ['쿠키 10개를 2명이 똑같이 나눠요. 한 명은 몇 개를 받나요?', ['2개', '3개', '4개', '5개'], 3, '두 사람에게 한 개씩 번갈아 나누어 줘 보세요.'],
      ['어떤 수에 4를 더했더니 10이 되었어요. 어떤 수일까요?', ['4', '5', '6', '7'], 2, '10개에서 나중에 더한 4개를 빼면 처음 수를 알 수 있어요.']
    ],
    normal: [
      ['한 봉지에 귤이 6개 있어요. 4봉지에는 몇 개가 있나요?', ['10개', '18개', '24개', '30개'], 2, '6개씩 네 묶음이에요. 6을 네 번 더해 봐요.'],
      ['색종이 35장을 5명이 똑같이 나누면 한 명은 몇 장을 받나요?', ['5장', '6장', '7장', '8장'], 2, '5명에게 한 장씩 나누면 5장이 필요해요. 몇 번 나눌 수 있을까요?'],
      ['빵 3개의 값이 1,500원이에요. 빵 1개는 얼마인가요?', ['300원', '500원', '600원', '750원'], 1, '1,500원을 똑같은 세 묶음으로 나누어 봐요.'],
      ['피자를 똑같이 4조각으로 나누고 1조각을 먹었어요. 남은 양은?', ['4분의 1', '4분의 2', '4분의 3', '전부'], 2, '전체는 4조각이에요. 그중 남은 조각이 몇 개인지 세어 봐요.'],
      ['버스에 18명이 있었어요. 7명이 내리고 5명이 탔어요. 지금은 몇 명인가요?', ['14명', '15명', '16명', '17명'], 2, '먼저 18명에서 내린 사람을 빼고, 새로 탄 사람을 더해 봐요.']
    ]
  },
  korean: {
    name: '국어 문해력',
    test: [
      ['민수가 가지고 간 것은 무엇인가요?', ['우산', '모자', '책', '공'], 0, '', '비가 와서 민수는 우산을 가지고 나갔어요.'],
      ['지수가 도서관에 간 까닭은 무엇인가요?', ['운동하려고', '밥을 먹으려고', '책을 빌리려고', '옷을 사려고'], 2, '', '지수는 읽고 싶은 책이 있어 도서관에 갔어요.']
    ],
    basic: [
      ['수아가 먹은 것은 무엇인가요?', ['빵', '사과', '밥', '과자'], 1, '문장에서 “먹었어요” 바로 앞에 있는 말을 찾아봐요.', '수아는 아침에 사과를 먹었어요.'],
      ['강아지는 어디에 있나요?', ['학교', '공원', '집', '가게'], 1, '“어디에서” 뛰어노는지 찾아봐요.', '강아지가 공원에서 뛰어놀아요.'],
      ['준호는 언제 이를 닦았나요?', ['밥 먹기 전', '잠자는 동안', '밥 먹은 뒤', '학교 가는 길'], 2, '“뒤에”는 어떤 일을 하고 나서라는 뜻이에요.', '준호는 밥을 먹은 뒤에 이를 닦았어요.'],
      ['유나는 왜 물을 마셨나요?', ['배가 불러서', '목이 말라서', '추워서', '졸려서'], 1, '물을 마시기 전에 몸이 어땠는지 읽어 봐요.', '유나는 운동을 해서 목이 말랐어요. 그래서 물을 마셨어요.'],
      ['“함께”와 뜻이 비슷한 말은 무엇인가요?', ['혼자', '빨리', '같이', '조용히'], 2, '혼자 하는 것이 아니라 친구와 하는 모습을 떠올려 봐요.', '나는 친구와 함께 숙제를 했어요.']
    ],
    normal: [
      ['소풍이 미뤄진 까닭은 무엇인가요?', ['날씨가 맑아서', '비가 많이 와서', '도시락이 없어서', '버스가 빨라서'], 1, '“그래서” 앞 문장이 그 까닭을 알려줘요.', '아침부터 비가 많이 내렸어요. 그래서 소풍을 다음 주로 미뤘어요.'],
      ['이 글에서 전하려는 말은 무엇인가요?', ['물을 아껴 쓰자', '꽃을 사자', '운동을 하자', '일찍 자자'], 0, '두 문장에서 모두 물을 어떻게 쓰라고 하는지 생각해 봐요.', '양치할 때는 컵을 쓰세요. 사용하지 않는 수도꼭지는 꼭 잠가 주세요.'],
      ['“뿌듯했어요”는 어떤 기분인가요?', ['무섭고 떨리는 기분', '슬프고 외로운 기분', '보람 있고 기쁜 기분', '화나고 답답한 기분'], 2, '도움을 주고 고맙다는 말을 들으면 어떤 기분일까요?', '민지는 친구의 무거운 짐을 들어 주었어요. 친구가 고맙다고 하자 뿌듯했어요.'],
      ['가장 먼저 한 일은 무엇인가요?', ['씨앗 심기', '물 주기', '화분에 흙 담기', '햇빛에 두기'], 2, '“먼저” 다음에 나오는 행동을 찾아봐요.', '먼저 화분에 흙을 담았어요. 그다음 씨앗을 심고 물을 주었어요. 마지막으로 햇빛이 드는 곳에 두었어요.'],
      ['안내문에 맞게 행동한 사람은 누구인가요?', ['큰 소리로 통화한 민수', '휴대폰을 무음으로 바꾼 수아', '뛰어다닌 지수', '음악을 크게 튼 준호'], 1, '다른 사람의 책 읽기를 방해하지 않는 행동을 골라 봐요.', '도서관에서는 조용히 해 주세요. 휴대폰은 소리가 나지 않도록 해 주세요.']
    ]
  }
};

const screen = document.querySelector('#screen');
const modal = document.querySelector('#complete');
const storageKey = 'study-ajas-attendance';
let record = { date: '', streak: 0 };
let storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved && /^\d{4}-\d{2}-\d{2}$/.test(saved.date) && Number.isInteger(saved.streak) && saved.streak > 0) record = saved;
} catch { storageAvailable = false; }

let subject, phase, level, index, score, list, answered, mission;
// 로컬 날짜를 사용하므로 자정에도 한국 시간의 날짜로 기록됩니다.
function dateKey(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function expired() { return Boolean(record.date && record.date !== dateKey() && record.date !== dateKey(-1)); }
function updateStreak() {
  document.querySelector('#streak').textContent = `🔥 ${expired() ? 0 : record.streak}일째`;
}
function teacher(message) {
  return `<div class="teacher"><span class="face" aria-hidden="true">🤖</span><div class="bubble"><small>아자스 선생님</small><p>${message}</p></div></div>`;
}
function home() {
  updateStreak();
  screen.innerHTML = `<span class="eyebrow">하루 5분, 나만의 작은 성장</span>
    <h1>오늘은 무엇을<br>배워 볼까요?</h1><p class="muted">틀려도 괜찮아요. 함께 다시 풀어 봐요.</p>
    <div class="subjects">
      <button class="subject" data-subject="math"><span class="icon" aria-hidden="true">🔢</span><span><strong>기초 수학</strong><small>숫자와 조금 더 친해져요</small></span></button>
      <button class="subject" data-subject="korean"><span class="icon" aria-hidden="true">📖</span><span><strong>국어 문해력</strong><small>짧은 글을 읽고 이해해요</small></span></button>
    </div>
    ${teacher(expired() ? '괜찮아, 쉬운 문제 하나로 다시 시작하자!' : record.date === dateKey() ? '오늘 공부를 마쳤어요! 더 연습하고 싶다면 과목을 골라요.' : '안녕! 오늘도 딱 5분만 아자스!')}
    ${expired() ? '<button class="primary" id="restart">쉬운 수학 1문제로 다시 시작</button>' : ''}
    ${!storageAvailable ? '<p id="storage-notice" role="status">이 브라우저에서는 기록을 저장할 수 없어요. 현재 화면에서는 계속 공부할 수 있어요.</p>' : ''}`;
  screen.querySelectorAll('[data-subject]').forEach(button => button.onclick = () => start(button.dataset.subject));
  const restart = document.querySelector('#restart');
  if (restart) restart.onclick = () => start('math', true);
}
function start(selected, easyMission = false) {
  subject = selected;
  mission = easyMission;
  phase = mission ? 'quiz' : 'test';
  level = 'basic';
  index = 0;
  score = 0;
  list = mission ? questions.math.basic.slice(0, 1) : questions[subject].test;
  renderQuestion();
}
function renderQuestion(intro = '') {
  answered = false;
  const question = list[index];
  const label = phase === 'test' ? '레벨 체크' : mission ? '다시 시작 미션' : level === 'basic' ? '기초 탄탄' : '실력 쑥쑥';
  screen.innerHTML = `<div class="topline"><button class="text-button" id="home">홈으로</button><span class="eyebrow">${questions[subject].name}</span></div>
    <div class="topline"><strong>${label}</strong><span>${index + 1} / ${list.length}</span></div>
    <progress value="${index}" max="${list.length}" aria-label="완료한 문제 수"></progress>
    <section class="question" aria-labelledby="question-title">${question[4] ? `<p class="passage">${question[4]}</p>` : ''}<h2 id="question-title" tabindex="-1">${question[0]}</h2>
      <div class="choices">${question[1].map((choice, i) => `<button class="choice" data-choice="${i}"><span aria-hidden="true">${i + 1}</span>${choice}</button>`).join('')}</div>
    </section><div id="feedback" role="status" aria-live="polite">${teacher(intro || (phase === 'test' ? '지금 실력을 알아보는 시간이에요. 편하게 골라 봐요!' : '천천히 읽고 골라 봐요. 틀리면 힌트를 줄게요!'))}</div>
    <button id="next" class="primary" hidden>${index === list.length - 1 ? phase === 'test' ? '학습 시작' : '학습 마치기' : '다음 문제'}</button>`;
  document.querySelector('#home').onclick = home;
  screen.querySelectorAll('[data-choice]').forEach(button => button.onclick = () => choose(Number(button.dataset.choice), button));
  document.querySelector('#next').onclick = next;
  document.querySelector('#question-title').focus();
}
function choose(choice, button) {
  if (answered || button.disabled) return;
  const correct = choice === list[index][2];
  if (phase === 'test') {
    if (correct) score++;
    // 레벨 테스트는 첫 답으로 수준을 판단하고 다음 문제로 이동합니다.
    next();
    return;
  }
  if (!correct) {
    button.classList.add('wrong');
    button.disabled = true;
    document.querySelector('#feedback').innerHTML = teacher(`다시 생각해 볼까요? ${list[index][3]}`);
    return;
  }
  answered = true;
  button.classList.add('correct');
  screen.querySelectorAll('[data-choice]').forEach(item => item.disabled = true);
  document.querySelector('progress').value = index + 1;
  document.querySelector('#feedback').innerHTML = teacher('맞았어요! 스스로 해냈네요. 아자스!');
  const nextButton = document.querySelector('#next');
  nextButton.hidden = false;
  nextButton.focus();
}
function next() {
  index++;
  if (index < list.length) return renderQuestion();
  if (phase === 'test') {
    level = score === list.length ? 'normal' : 'basic';
    phase = 'quiz';
    list = questions[subject][level];
    index = 0;
    return renderQuestion(`${level === 'basic' ? '기초 탄탄' : '실력 쑥쑥'} 단계부터 시작할게! 아자스!`);
  }
  finish();
}
function finish() {
  const today = dateKey();
  const alreadyDone = record.date === today;
  if (!alreadyDone) {
    record = { date: today, streak: record.date === dateKey(-1) ? record.streak + 1 : 1 };
    try { localStorage.setItem(storageKey, JSON.stringify(record)); } catch { storageAvailable = false; }
  }
  home();
  document.querySelector('#complete-message').textContent = alreadyDone
    ? '오늘은 이미 출석했어요. 추가 연습까지 멋져요! 불꽃은 하루에 한 번 올라가요.'
    : `${mission ? '다시 시작 성공!' : '5문제를 모두 풀었어요!'} 연속 출석 +1일 달성! 지금 ${record.streak}일째예요.${storageAvailable ? '' : ' 기록은 현재 화면에서만 유지돼요.'}`;
  modal.showModal();
}
document.querySelector('#complete-home').onclick = () => modal.close();
home();
