const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <input onChange={onChange}  />
        </div>
    )
}

export default EventComponent;

//React.ChangeEvent<HTMLInputElement> ==> Typescript has Type inference to check it out what type of value it has