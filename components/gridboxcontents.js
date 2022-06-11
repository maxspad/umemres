export default function GridboxContents(props) {
    const id = props.id; 
    const data = props.data[id];
    return (
        <>
        <h2>{data.title}</h2>
        <ul>
            {data.links.map((obj, i) => 
                <li>
                    <a href={obj.href} target="_blank">{obj.text}</a>
                </li>
            )}
        </ul>
        </>
    );
}