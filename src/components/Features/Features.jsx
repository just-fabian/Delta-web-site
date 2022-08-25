import React from 'react';
import { Container, Section } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles';
import { featuresData } from '../../data/FeaturesData';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { GrHostMaintenance } from 'react-icons/gr';
import { BiDollar, BiSupport } from 'react-icons/bi';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	const icons = [
		<BsFillShieldLockFill size="3rem" color="#0f0f0f" />,
		<IoIosOptions size="3rem" color="#0f0f0f" />,
		<GrHostMaintenance size="3rem" color="#0f0f0f" />,
		<BiSupport size="3rem" color="#0f0f0f" />,
		<BiDollar size="3rem" color="#0f0f0f" />,
		<AiOutlineCloudUpload size="3rem" color="#0f0f0f" />,
	]

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What We Offer</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<FeatureImageWrapper className={el.imgClass}>
								{icons[index]}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Features;