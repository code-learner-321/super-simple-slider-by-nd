import { CheckboxControl, RangeControl } from "@wordpress/components";

const ThirdFieldPaddingControlsMobile = ({
    thirdFieldPaddingAllMobile,
    thirdFieldPaddingTopMobile,
    thirdFieldPaddingRightMobile,
    thirdFieldPaddingBottomMobile,
    thirdFieldPaddingLeftMobile,
    thirdFieldAdjustAllPaddingMobile,
    isMobile,
    setAttributes }) => {
    const thirdFieldPaddingHandle = (value) => {
        setAttributes({ thirdFieldAdjustAllPaddingMobile: value });
    };

    const onChangePaddingHandle = (side, value) => {
        setAttributes({ [side]: value });
    };

    const onChangePaddingAll = (value) => {
        setAttributes({
            thirdFieldPaddingAllMobile: value,
            thirdFieldPaddingTopMobile: value,
            thirdFieldPaddingRightMobile: value,
            thirdFieldPaddingBottomMobile: value,
            thirdFieldPaddingLeftMobile: value,
        });
    };

    return (
        <>
            {isMobile && (
                <CheckboxControl
                    label="Adjust All Side Padding"
                    checked={thirdFieldAdjustAllPaddingMobile}
                    onChange={thirdFieldPaddingHandle}
                />
            )}
            {isMobile && thirdFieldAdjustAllPaddingMobile ? (
                <RangeControl
                    label="Padding (All Sides)"
                    value={thirdFieldPaddingAllMobile}
                    onChange={onChangePaddingAll}
                    min={0}
                    max={100}
                />
            ) : (
                <>
                    {isMobile && (
                        <RangeControl
                            label="Padding Top"
                            value={thirdFieldPaddingTopMobile}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingTopMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Right"
                            value={thirdFieldPaddingRightMobile}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingRightMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Bottom"
                            value={thirdFieldPaddingBottomMobile}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingBottomMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Left"
                            value={thirdFieldPaddingLeftMobile}
                            onChange={(value) => onChangePaddingHandle('thirdFieldPaddingLeftMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default ThirdFieldPaddingControlsMobile;
