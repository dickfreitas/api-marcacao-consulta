


export class ConsultModels{
    constructor(
    private name: string,
    private email: string,
    private description: string,
    private cpf: string,
    private date: string,
    private time: string,
    private finished: boolean,
    ){}
         //GETER
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getDescription(): string {
    return this.description;
  }
  public getCpf(): string {
    return this.cpf;
  }
  public getDate(): string {
    return this.date;
  }
  public getTime(): string {
    return this.time;
  }
  public getFinished(): boolean {
    return this.finished;
  }


  // SETTERS

    public setName( name : string) {
     this.name = name
  }
  public setEmail(email : string) {
     this.email = email
  }
  public setDescription(description : string)  {
     this.description = description
  }
  public setCpf(cpf : string) {
     this.cpf = cpf
  }
  public setDate(date : string){
     this.date = date
  }
  public setTime(time : string) {
     this.time = time
  }
  public setFinished(finished : boolean){
     this.finished = finished
  }
    public static toConsult(data? : any) : ConsultModels{
        return(
            data && new ConsultModels(
                data.name,
                data.email,
                data.description,
                data.cpf,
                data.date,
                data.time,
                data.finished
            )
        )
    }
}

export interface ConsultDTO{
     name: string,
     email: string,
     description: string,
     cpf: string,
     date: string,
     time: string,
    
}