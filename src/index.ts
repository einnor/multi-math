const startGame = (): void => {
  // starting a new game
  const playerName: string | undefined = getInputValue('playername');;
  logPlayer(playerName);

  postScore(80, playerName);
  postScore(-5, playerName);

  const messagesElement: HTMLElement | null = document.getElementById('messages');
  if (messagesElement) {
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
  }
};

const logPlayer = (name: string = 'MultiMath Player'): void => {
  console.log(`New game starting for player: ${name}`);
};

const getInputValue = (elementID: string): string | undefined => {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined;
  }
  return inputElement.value;
}

const postScore = (score: number, playerName: string = 'MultiMath Player'): void => {
  let logger: (value: string) => void;
  logger = score < 0 ? logError : logMessage;

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`);
}

const logMessage = (message: string) => console.log(message);

const logError = (err: string): void => console.error(err);

document.getElementById('startGame')!.addEventListener('click', startGame);
