type Props = {
    label: string;
    onCLick: () => void;
}

export const CustomButton = ({ label, onCLick }: Props) => {
    return (
        <button onClick={onCLick} className="p-3 rounded-md text-white bg-gray-700">{label}</button>
    );
}