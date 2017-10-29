export class Credential {
  public email: string;
  public password: string;
  public defaultDID: string;
  public DIDs: string[];

  constructor(email: string, password: string, defaultDID: string, DIDs: string[]) {
    this.email = email;
    this.password = password;
    this.defaultDID = defaultDID;
    this.DIDs = DIDs;
  }
}
