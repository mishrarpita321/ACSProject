import React from "react"
import ContentLoader from "react-content-loader"

const EmojiPlaceholder = (props) => (
    <ContentLoader  style={{marginTop:"30px"}}
    speed={1.3}
    width={props.width}
    height={props.height}
    viewBox="0 0 323 67"
    backgroundColor="#c3c1c1"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="13" ry="13" width={props.width} height={props.height} />
  </ContentLoader>
)

export default EmojiPlaceholder

