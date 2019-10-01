export const getInputValue = (elementID: string): string => {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  return inputElement.value;
};

export const logger = (message: string) : void => console.log(message)
