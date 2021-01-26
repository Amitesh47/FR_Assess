import React, { useRef,useEffect,useState } from "react";

const ImageCard = (props) => {
  const [span,setSpan] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height/200);
    setSpan(spans)
  })

  return (
    <div style={{gridRowEnd: `span ${span}`}}>
      <img ref={imageRef} src={props.src} />
    </div>
  );
};

export default ImageCard;
