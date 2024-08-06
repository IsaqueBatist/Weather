export interface IInputPropos{
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isrequired: boolean;
}