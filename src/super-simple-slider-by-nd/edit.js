import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { useState, useRef, useEffect } from "react";
import { useSelect } from "@wordpress/data";
import {
	ColorPalette,
	RangeControl,
	ColorPicker,
	Button,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import FetchSliderCategories from "../components/FetchSliderCategories";

// external...
import PaddingControlsDesktop from "../components/firstFieldComponents/PaddingControlsDesktop";
import PaddingControlsTablet from "../components/firstFieldComponents/PaddingControlsTablet";
import PaddingControlsMobile from "../components/firstFieldComponents/PaddingControlsMobile";
import CommonSliderSettings from "../components/CommonSliderSettings";
import TypographySettings from "../components/firstFieldComponents/TypographySettings";
import TypographySecondFieldSettings from "../components/secondFieldComponents/TypographySecondFieldSettings";
import SecondFieldPaddingControlsDesktop from "../components/secondFieldComponents/SecondFieldPaddingControlsDesktop";
import SecondFieldPaddingControlsTablet from "../components/secondFieldComponents/SecondFieldPaddingControlsTablet";
import SecondFieldPaddingControlsMobile from "../components/secondFieldComponents/SecondFieldPaddingControlsMobile";
import TypographyThirdFieldSettings from "../components/thirdFieldComponents/TypographyThirdFieldSettings";
import ThirdFieldPaddingControlsDesktop from "../components/thirdFieldComponents/ThirdFieldPaddingControlsDesktop";
import ThirdFieldPaddingControlsTablet from "../components/thirdFieldComponents/ThirdFieldPaddingControlsTablet";
import ThirdFieldPaddingControlsMobile from "../components/thirdFieldComponents/ThirdFieldPaddingControlsMobile";
// external...

import "./editor.scss";
import { Flex } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const {
		captionTextFirstField,
		captionTextSecondField,
		captionTextThirdField,
		sliderInterval,
		imageUrl,
		imageId,
		sliderHeight,
		sliderHeightTablet,
		sliderHeightMobile,
		textColorFirstField,
		textColorSecondField,
		textColorThirdField,
		fontFamilyFirstField,
		sliderDesktopSize,
		sliderTabletSize,
		sliderMobileSize,
		sliderDesktopSizeSecondField,
		sliderTabletSizeSecondField,
		sliderMobileSizeSecondField,
		sliderDesktopSizeThirdField,
		sliderTabletSizeThirdField,
		sliderMobileSizeThirdField,
		adjustAllPadding,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		paddingAll,
		adjustAllPaddingTablet,
		paddingTopTablet,
		paddingRightTablet,
		paddingBottomTablet,
		paddingLeftTablet,
		paddingAllTablet,
		paddingAllMobile,
		paddingTopMobile,
		paddingRightMobile,
		paddingBottomMobile,
		paddingLeftMobile,
		adjustAllPaddingMobile,
		firstFieldfontWeight,
		secondFieldfontWeight,
		secondFieldPaddingAllDesktop,
		secondFieldPaddingTopDesktop,
		secondFieldPaddingRightDesktop,
		secondFieldPaddingBottomDesktop,
		secondFieldPaddingLeftDesktop,
		secondFieldAdjustAllPaddingDesktop,
		secondFieldPaddingAllTablet,
		secondFieldPaddingTopTablet,
		secondFieldPaddingRightTablet,
		secondFieldPaddingBottomTablet,
		secondFieldPaddingLeftTablet,
		secondFieldAdjustAllPaddingTablet,
		secondFieldPaddingAllMobile,
		secondFieldPaddingTopMobile,
		secondFieldPaddingRightMobile,
		secondFieldPaddingBottomMobile,
		secondFieldPaddingLeftMobile,
		secondFieldAdjustAllPaddingMobile,
		thirdFieldfontWeight,
		thirdFieldPaddingAllDesktop,
		thirdFieldPaddingTopDesktop,
		thirdFieldPaddingRightDesktop,
		thirdFieldPaddingBottomDesktop,
		thirdFieldPaddingLeftDesktop,
		thirdFieldAdjustAllPaddingDesktop,
		thirdFieldPaddingAllTablet,
		thirdFieldPaddingTopTablet,
		thirdFieldPaddingRightTablet,
		thirdFieldPaddingBottomTablet,
		thirdFieldPaddingLeftTablet,
		thirdFieldAdjustAllPaddingTablet,
		thirdFieldPaddingAllMobile,
		thirdFieldPaddingTopMobile,
		thirdFieldPaddingRightMobile,
		thirdFieldPaddingBottomMobile,
		thirdFieldPaddingLeftMobile,
		thirdFieldAdjustAllPaddingMobile,
		alignItems,
		justifyContent,
		backgroundColor,
		opacity,
		selectedSliderCategory,
	} = attributes;

	// const [fontSize, setFontSize] = useState(12);

	// STYLES FOR RESPOSIVE FONT SIZE
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	const getSliderHeight = () => {
		if (isDesktop) {
			return sliderHeight;
		} else if (isTablet) {
			return sliderHeightTablet;
		} else {
			return sliderHeightMobile;
		}
	};

	const { deviceType } = useSelect((select) => {
		const { __experimentalGetPreviewDeviceType } = select("core/edit-post");
		return {
			deviceType: __experimentalGetPreviewDeviceType(),
		};
	}, []);

	useEffect(() => {
		if (deviceType === "Mobile") {
			setIsMobile(true);
			setIsTablet(false);
			setIsDesktop(false);
		} else if (deviceType === "Tablet") {
			setIsMobile(false);
			setIsTablet(true);
			setIsDesktop(false);
		} else if (deviceType === "Desktop") {
			setIsMobile(false);
			setIsTablet(false);
			setIsDesktop(true);
		} else {
			setIsMobile(false);
			setIsTablet(false);
			setIsDesktop(false);
		}
	}, [deviceType]);

	// FIRST TEXT FIELD PADDINGS FOR DESKTOP STARTS.......
	const paddingStyle = adjustAllPadding
		? `${paddingAll}px`
		: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;

	// FIRST TEXT FIELD PADDINGS FOR DESKTOP ENDS HERE.......

	// PADDINGS FOR TABLET STARTS.......
	const paddingStyleTablet = adjustAllPaddingTablet
		? `${paddingAllTablet}px`
		: `${paddingTopTablet}px ${paddingRightTablet}px ${paddingBottomTablet}px ${paddingLeftTablet}px`;

	// FIRST TEXT FIELD PADDINGS FOR TABLET ENDS HERE.......

	// PADDINGS FOR DESKTOP STARTS.......
	const paddingStyleMobile = adjustAllPaddingMobile
		? `${paddingAllMobile}px`
		: `${paddingTopMobile}px ${paddingRightMobile}px ${paddingBottomMobile}px ${paddingLeftMobile}px`;

	// FIRST TEXT FIELD PADDINGS FOR DESTOP ENDS HERE.......

	// SECOND TEXT FIELD PADDINGS FOR DESTOP STARTS.......
	const secondFieldPaddingStyleDesktop = secondFieldAdjustAllPaddingDesktop
		? `${secondFieldPaddingAllDesktop}px`
		: `${secondFieldPaddingTopDesktop}px ${secondFieldPaddingRightDesktop}px ${secondFieldPaddingBottomDesktop}px ${secondFieldPaddingLeftDesktop}px`;

	const secondFieldPaddingStyleTablet = secondFieldAdjustAllPaddingTablet
		? `${secondFieldPaddingAllTablet}px`
		: `${secondFieldPaddingTopTablet}px ${secondFieldPaddingRightTablet}px ${secondFieldPaddingBottomTablet}px ${secondFieldPaddingLeftTablet}px`;

	const secondFieldPaddingStyleMobile = secondFieldAdjustAllPaddingMobile
		? `${secondFieldPaddingAllMobile}px`
		: `${secondFieldPaddingTopMobile}px ${secondFieldPaddingRightMobile}px ${secondFieldPaddingBottomMobile}px ${secondFieldPaddingLeftMobile}px`;

	// SECOND TEXT FIELD PADDINGS FOR DESTOP STARTS.......

	// SECOND TEXT FIELD PADDINGS FOR DESTOP STARTS.......
	const thirdFieldPaddingStyleDesktop = thirdFieldAdjustAllPaddingDesktop
		? `${secondFieldPaddingAllDesktop}px`
		: `${thirdFieldPaddingTopDesktop}px ${thirdFieldPaddingRightDesktop}px ${thirdFieldPaddingBottomDesktop}px ${thirdFieldPaddingLeftDesktop}px`;

	const thirdFieldPaddingStyleTablet = thirdFieldAdjustAllPaddingTablet
		? `${thirdFieldPaddingAllTablet}px`
		: `${thirdFieldPaddingTopTablet}px ${thirdFieldPaddingRightTablet}px ${thirdFieldPaddingBottomTablet}px ${thirdFieldPaddingLeftTablet}px`;

	const thirdFieldPaddingStyleMobile = thirdFieldAdjustAllPaddingMobile
		? `${thirdFieldPaddingAllMobile}px`
		: `${thirdFieldPaddingTopMobile}px ${thirdFieldPaddingRightMobile}px ${thirdFieldPaddingBottomMobile}px ${thirdFieldPaddingLeftMobile}px`;

	// SECOND TEXT FIELD PADDINGS FOR DESTOP STARTS.......

	// MEDIAUPLOAD CONTROLL...

	const onSelectImage = (media) => {
		setAttributes({
			imageUrl: media.url,
			imageId: media.id,
		});
	};

	const onRemoveImage = () => {
		setAttributes({
			imageUrl: "",
			imageId: null,
		});
	};

	if (!selectedSliderCategory) {
		setAttributes({ selectedSliderCategory: "" });
	}
	return (
		<>
			{/* TEST.. */}

			{selectedSliderCategory ? (
				<InspectorControls>
					<PanelBody title={__("Slider Settings")}>
						{/*COMMON SLIDER SETTINGS.... */}

						{imageUrl ? (
							<PanelBody title="Preview Image Settings">
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectImage}
										allowedTypes={["image"]}
										value={imageId}
										render={({ open }) => (
											<Button
												variant="primary"
												onClick={open}
												isDefault
												isLarge
											>
												{imageUrl
													? "Change Preview Image"
													: "Upload Preview Image"}
											</Button>
										)}
									/>
								</MediaUploadCheck>
								{imageUrl && (
									<Button
										variant="primary"
										onClick={onRemoveImage}
										style={{ marginTop: 10 }}
										isDefault
										isLarge
									>
										Remove Preview Image
									</Button>
								)}
							</PanelBody>
						) : (
							<></>
						)}
						{imageUrl ? (
							<CommonSliderSettings
								sliderInterval={sliderInterval}
								sliderHeight={sliderHeight}
								sliderHeightTablet={sliderHeightTablet}
								sliderHeightMobile={sliderHeightMobile}
								fontFamilyFirstField={fontFamilyFirstField}
								isDesktop={isDesktop}
								isTablet={isTablet}
								alignItems={alignItems}
								justifyContent={justifyContent}
								isMobile={isMobile}
								backgroundColor={backgroundColor}
								opacity={opacity}
								setAttributes={setAttributes}
							/>
						) : null}
					</PanelBody>
					{imageUrl ? (
						<>
							<PanelBody initialOpen={false} title="First Text Filed Styles">
								<TypographySettings
									firstFieldfontWeight={firstFieldfontWeight}
									sliderMobileSize={sliderMobileSize}
									sliderTabletSize={sliderTabletSize}
									sliderDesktopSize={sliderDesktopSize}
									textColorFirstField={textColorFirstField}
									isMobile={isMobile}
									isTablet={isTablet}
									isDesktop={isDesktop}
									setAttributes={setAttributes}
								/>

								{/*PADDING PROPS FOR DESKTOP.... */}
								<PaddingControlsDesktop
									adjustAllPadding={adjustAllPadding}
									paddingAll={paddingAll}
									paddingTop={paddingTop}
									paddingRight={paddingRight}
									paddingBottom={paddingBottom}
									paddingLeft={paddingLeft}
									setAttributes={setAttributes}
									isDesktop={isDesktop}
								/>
								{/*PADDING PROPS FOR TABLET.... */}
								<PaddingControlsTablet
									adjustAllPaddingTablet={adjustAllPaddingTablet}
									paddingAllTablet={paddingAllTablet}
									paddingTopTablet={paddingTopTablet}
									paddingRightTablet={paddingRightTablet}
									paddingBottomTablet={paddingBottomTablet}
									paddingLeftTablet={paddingLeftTablet}
									setAttributes={setAttributes}
									isTablet={isTablet}
								/>
								<PaddingControlsMobile
									adjustAllPaddingMobile={adjustAllPaddingMobile}
									paddingAllMobile={paddingAllMobile}
									paddingTopMobile={paddingTopMobile}
									paddingRightMobile={paddingRightMobile}
									paddingBottomMobile={paddingBottomMobile}
									paddingLeftMobile={paddingLeftMobile}
									setAttributes={setAttributes}
									isMobile={isMobile}
								/>
							</PanelBody>
							<PanelBody initialOpen={false} title="Second Text Filed Styles">
								<TypographySecondFieldSettings
									secondFieldfontWeight={secondFieldfontWeight}
									sliderMobileSizeSecondField={sliderMobileSizeSecondField}
									sliderTabletSizeSecondField={sliderTabletSizeSecondField}
									sliderDesktopSizeSecondField={sliderDesktopSizeSecondField}
									textColorSecondField={textColorSecondField}
									isMobile={isMobile}
									isTablet={isTablet}
									isDesktop={isDesktop}
									setAttributes={setAttributes}
								/>

								<SecondFieldPaddingControlsDesktop
									secondFieldPaddingAllDesktop={secondFieldPaddingAllDesktop}
									secondFieldPaddingTopDesktop={secondFieldPaddingTopDesktop}
									secondFieldPaddingRightDesktop={
										secondFieldPaddingRightDesktop
									}
									secondFieldPaddingBottomDesktop={
										secondFieldPaddingBottomDesktop
									}
									secondFieldPaddingLeftDesktop={secondFieldPaddingLeftDesktop}
									secondFieldAdjustAllPaddingDesktop={
										secondFieldAdjustAllPaddingDesktop
									}
									isDesktop={isDesktop}
									setAttributes={setAttributes}
								/>

								<SecondFieldPaddingControlsTablet
									secondFieldPaddingAllTablet={secondFieldPaddingAllTablet}
									secondFieldPaddingTopTablet={secondFieldPaddingTopTablet}
									secondFieldPaddingRightTablet={secondFieldPaddingRightTablet}
									secondFieldPaddingBottomTablet={
										secondFieldPaddingBottomTablet
									}
									secondFieldPaddingLeftTablet={secondFieldPaddingLeftTablet}
									secondFieldAdjustAllPaddingTablet={
										secondFieldAdjustAllPaddingTablet
									}
									isTablet={isTablet}
									setAttributes={setAttributes}
								/>
								<SecondFieldPaddingControlsMobile
									secondFieldPaddingAllMobile={secondFieldPaddingAllMobile}
									secondFieldPaddingTopMobile={secondFieldPaddingTopMobile}
									secondFieldPaddingRightMobile={secondFieldPaddingRightMobile}
									secondFieldPaddingBottomMobile={
										secondFieldPaddingBottomMobile
									}
									secondFieldPaddingLeftMobile={secondFieldPaddingLeftMobile}
									secondFieldAdjustAllPaddingMobile={
										secondFieldAdjustAllPaddingMobile
									}
									isMobile={isMobile}
									setAttributes={setAttributes}
								/>
							</PanelBody>
							<PanelBody initialOpen={false} title="Third Text Filed Styles">
								<TypographyThirdFieldSettings
									thirdFieldfontWeight={thirdFieldfontWeight}
									sliderMobileSizeThirdField={sliderMobileSizeThirdField}
									sliderTabletSizeThirdField={sliderTabletSizeThirdField}
									sliderDesktopSizeThirdField={sliderDesktopSizeThirdField}
									textColorThirdField={textColorThirdField}
									isMobile={isMobile}
									isTablet={isTablet}
									isDesktop={isDesktop}
									setAttributes={setAttributes}
								/>

								<ThirdFieldPaddingControlsDesktop
									thirdFieldPaddingAllDesktop={thirdFieldPaddingAllDesktop}
									thirdFieldPaddingTopDesktop={thirdFieldPaddingTopDesktop}
									thirdFieldPaddingRightDesktop={thirdFieldPaddingRightDesktop}
									thirdFieldPaddingBottomDesktop={
										thirdFieldPaddingBottomDesktop
									}
									thirdFieldPaddingLeftDesktop={thirdFieldPaddingLeftDesktop}
									thirdFieldAdjustAllPaddingDesktop={
										thirdFieldAdjustAllPaddingDesktop
									}
									isDesktop={isDesktop}
									setAttributes={setAttributes}
								/>
								<ThirdFieldPaddingControlsTablet
									thirdFieldPaddingAllTablet={thirdFieldPaddingAllTablet}
									thirdFieldPaddingTopTablet={thirdFieldPaddingTopTablet}
									thirdFieldPaddingRightTablet={thirdFieldPaddingRightTablet}
									thirdFieldPaddingBottomTablet={thirdFieldPaddingBottomTablet}
									thirdFieldPaddingLeftTablet={thirdFieldPaddingLeftTablet}
									thirdFieldAdjustAllPaddingTablet={
										thirdFieldAdjustAllPaddingTablet
									}
									isTablet={isTablet}
									setAttributes={setAttributes}
								/>
								<ThirdFieldPaddingControlsMobile
									thirdFieldPaddingAllMobile={thirdFieldPaddingAllMobile}
									thirdFieldPaddingTopMobile={thirdFieldPaddingTopMobile}
									thirdFieldPaddingRightMobile={thirdFieldPaddingRightMobile}
									thirdFieldPaddingBottomMobile={thirdFieldPaddingBottomMobile}
									thirdFieldPaddingLeftMobile={thirdFieldPaddingLeftMobile}
									thirdFieldAdjustAllPaddingMobile={
										thirdFieldAdjustAllPaddingMobile
									}
									isMobile={isMobile}
									setAttributes={setAttributes}
								/>
							</PanelBody>
						</>
					) : null}
				</InspectorControls>
			) : (
				<div>SOme</div>
			)}
			{/* TEST.. */}

			<div {...useBlockProps()}>
				{/* TEST.. */}
				{selectedSliderCategory ? (
					<>
						{/* FULL SLIDER GOES STARTS HERE.. */}
						{
							// IF PREVIEW IMAGE EXISTS..
							imageUrl ? (
								<>
									<div
										className="slider"
										style={{
											height: `${getSliderHeight()}vh`,
											fontFamily: `${fontFamilyFirstField}`,
										}}
									>
										<div className="slides">
											<div class="slide">
												<img src={imageUrl} alt="Image 1" />
												<div
													class="caption"
													style={{
														backgroundColor,
														alignItems: alignItems,
														justifyContent: justifyContent,
													}}
												>
													{/* FIRST TEXT.. */}
													{isDesktop && (
														<div
															className="firstTextField"
															style={{
																fontSize: `${sliderDesktopSize}px`,
																fontWeight: `${attributes.firstFieldfontWeight}`,
																color: `${textColorFirstField}`,
																fontStyle: `${
																	attributes.firstFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: paddingStyle,
															}}
														>
															{captionTextFirstField}
														</div>
													)}
													{isTablet && (
														<div
															className="firstTextField"
															style={{
																fontSize: `${sliderTabletSize}px`,
																fontWeight: `${attributes.firstFieldfontWeight}`,
																color: `${textColorFirstField}`,
																fontStyle: `${
																	attributes.firstFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: paddingStyleTablet,
															}}
														>
															{captionTextFirstField}
														</div>
													)}
													{isMobile && (
														<div
															className="firstTextField"
															style={{
																fontSize: `${sliderMobileSize}px`,
																fontWeight: `${attributes.firstFieldfontWeight}`,
																color: `${textColorFirstField}`,
																fontStyle: `${
																	attributes.firstFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: paddingStyleMobile,
															}}
														>
															{captionTextFirstField}
														</div>
													)}
													{/* SECOND TEXT.. */}
													{isDesktop && (
														<div
															className="secondTextField"
															style={{
																fontSize: `${sliderDesktopSizeSecondField}px`,
																fontWeight: `${attributes.secondFieldfontWeight}`,
																color: `${textColorSecondField}`,
																fontStyle: `${
																	attributes.secondFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: secondFieldPaddingStyleDesktop,
															}}
														>
															{captionTextSecondField}
														</div>
													)}
													{isTablet && (
														<div
															className="secondTextField"
															style={{
																fontSize: `${sliderTabletSizeSecondField}px`,
																fontWeight: `${attributes.secondFieldfontWeight}`,
																color: `${textColorSecondField}`,
																fontStyle: `${
																	attributes.secondFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: secondFieldPaddingStyleTablet,
															}}
														>
															{captionTextSecondField}
														</div>
													)}
													{isMobile && (
														<div
															className="secondTextField"
															style={{
																fontSize: `${sliderMobileSizeSecondField}px`,
																fontWeight: `${attributes.secondFieldfontWeight}`,
																color: `${textColorSecondField}`,
																fontStyle: `${
																	attributes.secondFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: secondFieldPaddingStyleMobile,
															}}
														>
															{captionTextSecondField}
														</div>
													)}

													{/* THIRD TEXT.. */}
													{isDesktop && (
														<div
															className="secondTextField"
															style={{
																fontSize: `${sliderDesktopSizeThirdField}px`,
																fontWeight: `${attributes.thirdFieldfontWeight}`,
																color: `${textColorThirdField}`,
																fontStyle: `${
																	attributes.thirdFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: thirdFieldPaddingStyleDesktop,
															}}
														>
															{captionTextThirdField}
														</div>
													)}
													{isTablet && (
														<div
															className="secondTextField"
															style={{
																fontSize: `${sliderTabletSizeThirdField}px`,
																fontWeight: `${attributes.thirdFieldfontWeight}`,
																color: `${textColorThirdField}`,
																fontStyle: `${
																	attributes.thirdFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: thirdFieldPaddingStyleTablet,
															}}
														>
															{captionTextThirdField}
														</div>
													)}
													{isMobile && (
														<div
															className="secondTextField"
															style={{
																fontSize: `${sliderMobileSizeThirdField}px`,
																fontWeight: `${attributes.thirdFieldfontWeight}`,
																color: `${textColorThirdField}`,
																fontStyle: `${
																	attributes.thirdFieldfontWeight === "italic"
																		? "italic"
																		: "normal"
																}`,
																padding: thirdFieldPaddingStyleMobile,
															}}
														>
															{captionTextThirdField}
														</div>
													)}
												</div>
											</div>
										</div>
										<div class="navigation">
											<button class="prev">&#10094;</button>
											<button class="next">&#10095;</button>
										</div>
									</div>
								</>
							) : (
								<>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											paddingBottom: "15px",
										}}
									>
										<p>Select Preview Image from the Media Library.</p>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={onSelectImage}
												allowedTypes={["image"]}
												value={imageId}
												render={({ open }) => (
													<Button
														variant="primary"
														onClick={open}
														isDefault
														isLarge
													>
														{imageUrl
															? "Change Preview Image"
															: "Add Preview Image"}
													</Button>
												)}
											/>
										</MediaUploadCheck>
										{imageUrl && (
											<Button
												onClick={onRemoveImage}
												style={{
													marginTop: 10,
													backgroundColor: "lightcoral",
													color: "white",
												}}
												isDefault
												isLarge
											>
												Remove Preview Image
											</Button>
										)}
									</div>
								</>
							)
						}
						{/* IF PREVIEW IMAGE ENDS.. */}

						{/* FULL SLIDER GOES ENDS HERE.. */}
					</>
				) : (
					<FetchSliderCategories
						attributes={attributes}
						setAttributes={setAttributes}
					/>
				)}
				{/* TEST ENDS.. */}

				{/* {imageUrl ? ( */}

				{/* ) : (
					<div className="placeholder">
						Select a Preview Image from the media library.
					</div>
				)} */}
			</div>
		</>
	);
}
