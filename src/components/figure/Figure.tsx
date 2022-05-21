import './style.css'

type Props={
  src: string;
  alt: string;
  description: string;
}

export const Figure = ({src,alt,description}: Props) => {
  return(
    <figure className='figure-full'>
      <img className='contato-img' src={src} alt={alt} />
      <figcaption className='description-img'>{description}</figcaption>
    </figure>
  )
}