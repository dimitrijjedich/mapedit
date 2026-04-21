export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm text-silver ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
