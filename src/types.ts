export interface Iroutes{
  name:string;
  link:string;
}
interface Ifeatures{
  name:string;
  status:boolean
}
interface Ipricing{
  name:string;
  price:number;
  time:string;
}
export interface IplansData{
  color:string;
  pricing:Ipricing;
  features:Ifeatures[];
}