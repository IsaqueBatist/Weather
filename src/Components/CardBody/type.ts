export interface ICardBodyProps{
  condition: ICondition;
  localtime: string;
  is_day: number;
  name: string;
  region: string;
  country: string;
  temp_f: number;
}

interface ICondition {
  text: string;
  icon: string;
  code: number;
}