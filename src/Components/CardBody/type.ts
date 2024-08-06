export interface ICardProps {
  condition?: ICondition | null;
  localtime?: string;
  is_day?: number;
  name?: string;
  region?: string;
  country?: string;
  temp_f?: number;
}

export interface ICardBodyProps {
  propsData: ICardProps;
  onClick?: () => void;
}

interface ICondition {
  text?: string;
  icon?: string;
  code?: number;
}