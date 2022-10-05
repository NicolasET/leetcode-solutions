function isValid(s: string): boolean {
  const brackets: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const x: string = s.charAt(i);

    switch (x) {
      case "(":
        brackets.push(")");
        break;
      case "{":
        brackets.push("}");
        break;
      case "[":
        brackets.push("]");
        break;
      default:
        if (x !== brackets.pop()) {
          return false;
        }
        break;
    }
  }
  return brackets.length === 0;
}
