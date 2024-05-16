interface ContentProps{
    text: string
}

export default function NavbarIconText({text}: ContentProps){
    return(
        <div>
          <h3 className="text-white font-bold">{text}</h3>
        </div>
    )
}