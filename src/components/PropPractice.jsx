import { getImageUrl } from "./utils";

function Landscape({image, size}) {
  return (
		<img
			className="landscape"
			src={getImageUrl(image)}
			alt={image.name}
			width={size}
			height={size}
		/>
	);
  }

export default function Photo(){

	const imageIds = ['edUW7cJ', 'jRetXxS', 'KvSDVHD', 'zs7lXPL', 'rfig4mQ', 'GdLn4KT']

	const randomValue = imageIds[Math.floor(Math.random() * 6)];

  return (
		<div>
			<Landscape
				size={"100%"}
				image={{ name: 'aPhoto', imageId: randomValue }}
			/>  
		</div>                  
	)
}