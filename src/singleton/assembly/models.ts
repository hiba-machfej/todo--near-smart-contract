@nearBindgen
export class Todo {
  text: string;
  assignor: string;
  assignee: string;

  constructor(text: string, assignor: string, assignee: string) {
    this.text = text;
    this.assignor = assignor;
    this.assignee = assignee;
  }
}