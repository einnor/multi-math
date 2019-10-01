const startGame = (): void => {
  // starting a new game
  const playerName: string = 'Audrey';
  logPlayer(playerName);
  const messagesElement: HTMLElement | null = document.getElementById('messages');
  if (messagesElement) {
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
  }
};

const logPlayer = (name: string): void => {
  console.log(`New game starting for player: ${name}`);
};

document.getElementById('startGame')!.addEventListener('click', startGame);
