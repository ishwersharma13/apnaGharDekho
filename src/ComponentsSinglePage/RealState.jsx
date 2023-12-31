import './ImageData.css';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
	Box,
	Text,
	Heading,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Table,
	Tr,
	Tbody,
	Td,
	TableContainer,
} from '@chakra-ui/react';
import React from 'react';

const RealStateSingleData = ({ item }) => {

	return (
		<Box padding="10px" textAlign="left">
			<Heading fontSize="18px" fontWeight="500" color="#8f8a8f">
				{item.location}
			</Heading>
			<Text
				fontSize="16px"
				fontWeight="500"
				color="#303030"
				mt="8px"
				lineHeight="23px"
			>
				{item.type}
			</Text>

			<Text fontSize="15px" color="#6653e8" fontWeight="500" mt="12px">
				Property Price
			</Text>

			<Box mt="6px" style={{ display: 'flex', alignItems: 'center' }}>
				<Heading
					fontSize="28px"
					fontWeight="600"
					color="#303030"
					mt={1.5}
					textAlign="left"
				>
					₹{item.price}
				</Heading>
			</Box>

		


			<Accordion allowToggle mt="36px">
				<AccordionItem className="changeColor">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<Text
									fontWeight="500"
									fontSize="20px"
									pt="12px"
									pb="12px"
									pr="24px"
								>
									{' '}
									Description
								</Text>
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>The property description is a concise summary providing an overview of the property's key features, location, and amenities. It aims to capture the attention of potential buyers or renters by highlighting the property's appeal. It includes essential information such as property type, size, layout, and notable features. The description serves as a snapshot of the property, enticing individuals to further explore its details and consider it as a potential choice for their needs.</AccordionPanel>
				</AccordionItem>

				<AccordionItem className="changeColor">
					{({ isExpanded }) => (
						<>
							<h2>
								<AccordionButton>
									<Box as="span" flex="1" textAlign="left">
										<Text
											fontWeight="500"
											fontSize="20px"
											pt="12px"
											pb="12px"
											pr="24px"
										>
											Property Details
										</Text>
									</Box>
									{isExpanded ? (
										<MinusIcon fontSize="12px" />
									) : (
										<AddIcon fontSize="12px" />
									)}
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<TableContainer>
									<Table variant="simple" border="none">
										<Tbody>
											<Tr>
												<Td>Type</Td>
												<Td>{item.type}</Td>
											</Tr>
											<Tr>
												<Td>Adress</Td>
												<Td>{item.adress}</Td>
											</Tr>
											<Tr>
												<Td>Location</Td>
												<Td>{item.location}</Td>
											</Tr>
											<Tr>
												<Td>Price</Td>
												<Td>₹{item.price}</Td>
											</Tr>
										</Tbody>
									</Table>
								</TableContainer>
							</AccordionPanel>
						</>
					)}
				</AccordionItem>
			</Accordion>
		</Box>
	);
};

export { RealStateSingleData };
