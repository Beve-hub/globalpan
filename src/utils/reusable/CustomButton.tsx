import { Button,ButtonProps  } from "@mantine/core";

interface CustomButtonProps extends ButtonProps {
    label: string;
    onClick: () => void;
    variant?: ButtonProps['variant'];
    color?: ButtonProps['color'];
    size?: ButtonProps['size'];
    fullWidth?: boolean;
    radius?: ButtonProps['radius'];

}


const CustomButton= (props: CustomButtonProps) => {
    const { label, onClick, variant, color, size, fullWidth, radius, } = props;
    return (
        <Button
            onClick={onClick}
            variant={variant}
            color={color}
            size={size}
            fullWidth={fullWidth}
            radius={radius}
            style={{ display: 'flex', justifyContent: 'center' }} // Align content
        >           
            <span >{label}</span>

        </Button>
    )
}

export default CustomButton
