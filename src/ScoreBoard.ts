import { Result } from './types/Result';

export class Scoreboard {
  private results: Result[] = [];

  public addResult(newResult: Result): void {
    this.results.push(newResult);
  }
  public updateScoreboard(): void {
    let output: string = `<h2>Scoreboard</h2>`;

    for (let index = 0; index < this.results.length; index++) {
      const result: Result = this.results[index];
      output += `<h4>${result.playerName} : ${result.score} / ${result.problemCount} for factor ${result.factor}</h4>`;
    }

    const scoresElement: HTMLElement = document.getElementById('scores')!;
    scoresElement.innerHTML = output;
  }
}
