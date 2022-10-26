interface ChildProps {
    color: string;
    children: string
    onClick: () => void;
}

export const Child = ({color , onClick}: ChildProps) =>{
  return <div>
    {color}
    <button onClick={onClick}>Click me!</button>
  </div>
}

export const ChildAsFC: React.FC<ChildProps> = ({
    color,
    onClick,
    children
  }) => {
    return (
      <div>
        {color}
        {children}
        <button onClick={onClick}>Click me</button>
      </div>
    );
  };
// FC => FunctionComponent | you can write as FunctionComponent to FC