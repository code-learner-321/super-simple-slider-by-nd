import { CheckboxControl, RangeControl } from "@wordpress/components";

const SecondFieldPaddingControlsMobile = ({
    secondFieldPaddingAllMobile,
    secondFieldPaddingTopMobile,
    secondFieldPaddingRightMobile,
    secondFieldPaddingBottomMobile,
    secondFieldPaddingLeftMobile,
    secondFieldAdjustAllPaddingMobile,
    isMobile,
    setAttributes }) => {
    const secondFieldPaddingHandle = (value) => {
        setAttributes({ secondFieldAdjustAllPaddingMobile: value });
    };

    const onChangePaddingHandle = (side, value) => {
        setAttributes({ [side]: value });
    };

    const onChangePaddingAll = (value) => {
        setAttributes({
            secondFieldPaddingAllMobile: value,
            secondFieldPaddingTopMobile: value,
            secondFieldPaddingRightMobile: value,
            secondFieldPaddingBottomMobile: value,
            secondFieldPaddingLeftMobile: value,
        });
    };

    return (
        <>
            {isMobile && (
                <CheckboxControl
                    label="Adjust All Side Padding"
                    checked={secondFieldAdjustAllPaddingMobile}
                    onChange={secondFieldPaddingHandle}
                />
            )}
            {isMobile && secondFieldAdjustAllPaddingMobile ? (
                <RangeControl
                    label="Padding (All Sides)"
                    value={secondFieldPaddingAllMobile}
                    onChange={onChangePaddingAll}
                    min={0}
                    max={100}
                />
            ) : (
                <>
                    {isMobile && (
                        <RangeControl
                            label="Padding Top"
                            value={secondFieldPaddingTopMobile}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingTopMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Right"
                            value={secondFieldPaddingRightMobile}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingRightMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Bottom"
                            value={secondFieldPaddingBottomMobile}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingBottomMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isMobile && (
                        <RangeControl
                            label="Padding Left"
                            value={secondFieldPaddingLeftMobile}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingLeftMobile', value)}
                            min={0}
                            max={100}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default SecondFieldPaddingControlsMobile;
