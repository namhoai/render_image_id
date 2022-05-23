import { Stage, Layer, Text, Image } from "react-konva";
import useImage from "use-image";

function Frame(props) {
  const { fistName, lastName, dateOfBirth, imageBase64, stageRef } = props;
  const [image] = useImage("/frame.png");
  const [image2] = useImage(imageBase64);

  return (
    <Stage ref={stageRef} width={447} height={258}>
      <Layer>
        <Image x={17} y={20} image={image2} width={108} height={172} />
        <Image image={image} width={447} height={258} />
        <Text x={150} y={95} text={`${fistName} ${lastName}`} />
        <Text x={300} y={95} text={dateOfBirth} />
      </Layer>
    </Stage>
  );
}

export default Frame;
