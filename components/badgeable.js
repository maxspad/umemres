import Badge from 'react-bootstrap/Badge'

export default function Badgeable(props) {
    const in_badge = props.text
    if (in_badge) {
        return (<Badge bg="secondary">{in_badge}</Badge>)
    }
    else {
        return null
    }
}