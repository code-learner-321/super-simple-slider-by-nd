import { CheckboxControl, RangeControl } from "@wordpress/components";

const SecondFieldPaddingControlsDesktop = ({
    secondFieldPaddingAllDesktop,
    secondFieldPaddingTopDesktop,
    secondFieldPaddingRightDesktop,
    secondFieldPaddingBottomDesktop,
    secondFieldPaddingLeftDesktop,
    secondFieldAdjustAllPaddingDesktop,
    isDesktop,
    setAttributes }) => {
    const secondFieldPaddingHandle = (value) => {
        setAttributes({ secondFieldAdjustAllPaddingDesktop: value });
    };

    const onChangePaddingHandle = (side, value) => {
        setAttributes({ [side]: value });
    };

    const onChangePaddingAll = (value) => {
        setAttributes({
            secondFieldPaddingAllDesktop: value,
            secondFieldPaddingTopDesktop: value,
            secondFieldPaddingRightDesktop: value,
            secondFieldPaddingBottomDesktop: value,
            secondFieldPaddingLeftDesktop: value,
        });
    };

    return (
        <>
            {isDesktop && (
                <CheckboxControl
                    label="Adjust All Side Padding"
                    checked={secondFieldAdjustAllPaddingDesktop}
                    onChange={secondFieldPaddingHandle}
                />
            )}
            {isDesktop && secondFieldAdjustAllPaddingDesktop ? (
                <RangeControl
                    label="Padding (All Sides)"
                    value={secondFieldPaddingAllDesktop}
                    onChange={onChangePaddingAll}
                    min={0}
                    max={100}
                />
            ) : (
                <>
                    {isDesktop && (
                        <RangeControl
                            label="Padding Top"
                            value={secondFieldPaddingTopDesktop}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingTopDesktop', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isDesktop && (
                        <RangeControl
                            label="Padding Right"
                            value={secondFieldPaddingRightDesktop}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingRightDesktop', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isDesktop && (
                        <RangeControl
                            label="Padding Bottom"
                            value={secondFieldPaddingBottomDesktop}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingBottomDesktop', value)}
                            min={0}
                            max={100}
                        />
                    )}
                    {isDesktop && (
                        <RangeControl
                            label="Padding Left"
                            value={secondFieldPaddingLeftDesktop}
                            onChange={(value) => onChangePaddingHandle('secondFieldPaddingLeftDesktop', value)}
                            min={0}
                            max={100}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default SecondFieldPaddingControlsDesktop;
