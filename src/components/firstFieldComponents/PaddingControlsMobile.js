import { CheckboxControl, RangeControl } from "@wordpress/components";

const PaddingControlsMobile = ({ adjustAllPaddingMobile, paddingAllMobile, paddingTopMobile, paddingRightMobile, paddingBottomMobile, paddingLeftMobile, setAttributes, isMobile }) => {
    const onToggleAdjustAllPaddingMobile = (value) => {
        setAttributes({ adjustAllPaddingMobile: value });
    };

    const onChangePaddingMobile = (side, value) => {
        setAttributes({ [side]: value });
    };

    const onChangePaddingAllMobile = (value) => {
        setAttributes({
            paddingAllMobile: value,
            paddingTopMobile: value,
            paddingRightMobile: value,
            paddingBottomMobile: value,
            paddingLeftMobile: value,
        });
    };

    return (
        <>
            {isMobile && (
                <CheckboxControl
                    label="Adjust All Side Padding"
                    checked={adjustAllPaddingMobile}
                    onChange={onToggleAdjustAllPaddingMobile}
                />
            )}
            {isMobile && adjustAllPaddingMobile ? (
                <RangeControl
                    label="Padding (All Sides)"
                    value={paddingAllMobile}
                    onChange={onChangePaddingAllMobile}
                    min={0}
                    max={100}
                />
            ) : (
                <>
                    {isMobile && (
                        <RangeControl
                            label="Padding Top"
                            value={paddingTopMobile}
                            onChange={(value) => onChangePaddingMobile('paddingTopMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Right"
                            value={paddingRightMobile}
                            onChange={(value) => onChangePaddingMobile('paddingRightMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Bottom"
                            value={paddingBottomMobile}
                            onChange={(value) => onChangePaddingMobile('paddingBottomMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Left"
                            value={paddingLeftMobile}
                            onChange={(value) => onChangePaddingMobile('paddingLeftMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default PaddingControlsMobile;
