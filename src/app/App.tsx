import {v4 as uuid} from 'uuid';
import React, { useState, useEffect } from 'react';

type Message = {
  src: string,
  windowWidthOffset: number,
  imageVerticalPosition: number,
  origin: string
}

const App = () => {
  const [scrollPosition, setScrollPosition] = useState({x: 0, y: 0});
  const [image, setImage] = React.useState<string | null>(null);
  const [id, setId] = React.useState<string>();

  const scrollPositionRef = React.useRef(scrollPosition);
  scrollPositionRef.current = scrollPosition

  const imageRef = React.useRef(image);
  imageRef.current = image

  const idRef = React.useRef(id);
  idRef.current = id

  const bc = new BroadcastChannel("test_channel");
  bc.onmessage = (event: any) => {
    const data: Message = event.data
    if(idRef.current === data.origin) {
      console.log("Message self-signed, ignoring")
      return
    }

    console.log("Message received", data)
    window.removeEventListener('scroll', handleScroll);
    setImage(data.src);
    window.scrollTo(data.windowWidthOffset, data.imageVerticalPosition)
  };

  const handleScroll = () => {
    const position = { x: window.scrollX + window.innerWidth, y: window.scrollY};
    setScrollPosition(position);
    if(imageRef.current != null) {
      bc.postMessage({
        src: imageRef.current,
        windowWidthOffset: position.x,
        imageVerticalPosition: window.scrollY,
        origin: idRef.current
      })
    }
  };
  
  useEffect(() => {
    const newUuid = uuid()
    setId(newUuid);
    console.log("UUID", newUuid)
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onChange = (file: any) => {
    setImage(file.target.files[0].name); 
    console.log("Loaded file")
    bc.postMessage({
      src: file.target.files[0].name,
      windowWidthOffset: scrollPosition,
      imageVerticalPosition: window.scrollY,
      origin: idRef.current
    })
  }

  return     (
    <div className="container">
      {image == null && <input type="file" accept="image/png, image/jpeg" onChange={onChange}/>}
      {image != null && <img src={image} />}
    </div>
  )
}

export default App;
