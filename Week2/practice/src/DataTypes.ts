export interface taskType{
    title:string
  }

export interface detail{
    id?:number,
    name?:string,
    email?:string,
    password?:string,
    tasks?: any| Array<{
      title:string
    }>
}

 export interface ClickableProps {
    children: JSX.Element[] | JSX.Element;
  }