export class ChatItem{
  public title: string;
  public message: string;
  public date: string;

  constructor(title: string, message: string, date: string){
    this.title = title;
    this.message = message;
    this.date = date;
  }
}
