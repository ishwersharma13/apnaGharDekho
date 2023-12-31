import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ImageData } from '../ComponentsSinglePage/ImageData';
import {  RealStateSingleData } from '../ComponentsSinglePage/RealState';
import './SinglePageProduct.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const SinglePageProduct = () => {
	const { id } = useParams();
	const [num, changeNum] = useState(+id);
	const [singleData, updateSingleData] = useState([]);

	const GetSinglePageData = (num) => {
		axios
			.get(`https://long-pear-giraffe-gown.cyclic.app/api/realState/${num}`)
			.then((res) => updateSingleData(res.data));
	};

	const handleChangeAdd = () => {
		if (num == 20) {
			changeNum(1);
		} else {
			changeNum(num + 1);
		}
	};

	const handleChangeRemove = () => {
		if (num == 1) {
			changeNum(20);
		} else {
			changeNum(num - 1);
		}
	};

	useEffect(() => {
		GetSinglePageData(num);
	}, [num]);

	return (
		<Box
			className="SingleProductMainDiv"
			background="#f1f3f6"
			style={{ border: '1px   green', height: 'auto' }}
		>
			<ChevronLeftIcon
				onClick={handleChangeRemove}
				position="absolute"
				left="-4px"
				cursor="pointer"
				top="250px"
				w={{
					base: '32px',
					sm: '45px',
					md: '50px',
					lg: '50px',
					xl: '66px',
					'2xl': '66px',
				}}
				h={{
					base: '32px',
					sm: '45px',
					md: '50px',
					lg: '50px',
					xl: '66px',
					'2xl': '66px',
				}}
			/>

			<ChevronRightIcon
				onClick={handleChangeAdd}
				position="absolute"
				cursor="pointer"
				right="4px"
				top="250px"
				w={{
					base: '32px',
					sm: '45px',
					md: '50px',
					lg: '50px',
					xl: '66px',
					'2xl': '66px',
				}}
				h={{
					base: '32px',
					sm: '45px',
					md: '50px',
					lg: '50px',
					xl: '66px',
					'2xl': '66px',
				}}
				ml={{ base: '-16px' }}
			/>

			<Box 
				className="SingleProductMain"
				flexDirection={{
					base: 'column',
					sm: 'column',
					md: 'row',
					lg: 'row',
					xl: 'row',
					'2xl': 'row',
				}}
				shadow="md"
			
				pb="20px"
				background="#ffffff"
				style={{
					border: '1px  red',
					height: 'auto',
					width: '90%',
					margin: '20px auto',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Box
					className="SingleProductMainImage"
					mt={5}
					width={{
						base: '96%',
						sm: '62vw',
						md: '50vw',
						lg: '42vw',
						xl: '40vw',
						'2xl': '40vw',
					}}
					style={{ border: '1px   yellow', height: 'auto' }}
				>
					<ImageData url={singleData.image}
					/>
				</Box>

				<Box
					className="SingleProductMainData"
					mt={5}
					width={{
						base: 'none',
						sm: '100%',
						md: '50vw',
						lg: '53vw',
						xl: '55vw',
						'2xl': '55vw',
					}}
					style={{ border: '1px   grey', height: 'auto' }}
				>
					<RealStateSingleData item={singleData} />
				</Box>
			</Box>
		</Box>
	);
};

export { SinglePageProduct };