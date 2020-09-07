function Member({ name, thumbnail, images, bio}) {
  return(
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
      <img src={thumbnail} />
    </div>
  )
}

export default Member
