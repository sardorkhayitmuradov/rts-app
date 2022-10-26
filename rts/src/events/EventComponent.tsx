const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('im being dragged !!!')
    }

    return (
        <div>
            <input onChange={onChange}  />
            <div draggable onDragStart={onDragStart}>
                Drag Me !!
            </div>
        </div>
    )
}

export default EventComponent;

//React.ChangeEvent<HTMLInputElement> ==> Typescript has Type inference to check it out what type of value it has