const ICONS = [
    { alt: "πΊ", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f37a.png" },
    { alt: "πΊοΈ", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f5fa.png" },
    { alt: "π ", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f3e0.png" },
    { alt: "π", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f4de.png" },
    { alt: "π", src: "http://cdn.jsdelivr.net/emojione/assets/4.0/png/64/1f517.png" },
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