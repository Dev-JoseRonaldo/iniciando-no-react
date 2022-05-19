type Props={
  src: string;
  alt: string;
  description: string;
}

export const Figure = ({src,alt,description}: Props) => {
  return(
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{description}</figcaption>
    </figure>
  )
}