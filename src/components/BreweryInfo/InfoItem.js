const ICONS = [
    { alt: "🍺", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f37a.png" },
    { alt: "🗺️", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f5fa.png" },
    { alt: "🏠", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f3e0.png" },
    { alt: "📞", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f4de.png" },
    { alt: "🔗", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f517.png" },
]

export default function InfoItem(props) {
    return (props.item !== "" ? 
        <p>
            <span className="mr-2"
            ><img
                    alt={ICONS[props.i].alt}
                    src={ICONS[props.i].src}
                    className="icon" />
            </span>
            {props.item}
        </p> :
        ""
    )
}