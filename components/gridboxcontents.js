export default function GridboxContents(props) {
    const id = props.id; 
    const data = props.data[id];
    return (
        <>
        <h2>{data.title}</h2>
        {data.links.map((obj, i) => 
            <li>
                <a href={obj.href} key={obj.text}>{obj.text}</a>
            </li>
        )}
        </>
    );
}