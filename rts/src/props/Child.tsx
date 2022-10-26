interface ChildProps {
    color: string;
}

export const Child = ({color}: ChildProps) =>{
  return <div>{color}</div>
}

export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
    return <div>{color}</div>
}
// FC => FunctionComponent | you can write as FunctionComponent to FC