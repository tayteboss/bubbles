import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type StyledProps = {
	$x: number;
	$y: number;
	$index: number;
}

const BubbleWrapper = styled(motion.div)<StyledProps>`
	position: absolute;
	left: ${(props) => props.$x}px;
	top: ${(props) => props.$y}px;
	transform: translate(-50%, -50%);
	background: ${(props) => `var(--colour-${props.$index % 5})`};
	border-radius: 100%;
	mix-blend-mode: difference;
`;

type Props = {
	data: {
		x: number,
		y: number
	};
	index: number
}

const Bubble = (props: Props) => {
	const {
		data,
		index
	} = props;
	const [duration, setDuration] = useState<number>(0);

	const audioRef = useRef(null);

	const handleLoadedMetadata = () => {
		if (!audioRef?.current) return;
		setDuration(Math.ceil(audioRef.current.duration));
	};

	useEffect(() => {
		if (duration <= 0) return;

		const audio: any = audioRef.current;

		audio.play();

		const intervalId = setInterval(() => {
			audio.pause();
			audio.currentTime = 0;
			audio.play();
		}, duration * 1000);

	
		return () => clearInterval(intervalId);
	}, [duration]);

	const wrapperVariants = {
		hidden: {
			height: 0,
			width: 0,
			transition: {
				duration: duration / 2,
				ease: 'easeInOut'
			}
		},
		visible: {
			height: '70vw',
			width: '70vw',
			transition: {
				duration: duration / 2,
				ease: 'easeInOut',
				repeat: Infinity,
				repeatType: "mirror"
			}
		}
	};
	

	return (
		<>
			{duration > 0 && (
				<BubbleWrapper
					$x={data.x}
					$y={data.y}
					$index={index + 1}
					variants={wrapperVariants}
					initial='hidden'
					animate='visible'
				/>
			)}
			<audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata}>
				<source src={`/sounds/${(index % 5) + 1}.mp3`} type="audio/mp3" />
			</audio>
		</>
	);
};

export default Bubble;
