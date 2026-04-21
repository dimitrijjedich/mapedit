import { useState } from 'react';
import PropTypes from 'prop-types';
import { ColorShape } from '@/types';

export default function TileEditor({ size, pixels: initialPixels, colors, onChange }) {
    const total = size * size;
    const cellSize = size === 8 ? 48 : 32;

    const [pixels, setPixels] = useState(initialPixels ?? new Array(total).fill(null));
    const [selectedColor, setSelectedColor] = useState(null);
    const [isPainting, setIsPainting] = useState(false);

    function paint(index) {
        const updated = [...pixels];
        updated[index] = selectedColor;
        setPixels(updated);
        onChange(updated);
    }

    function handleMouseDown(index) {
        setIsPainting(true);
        paint(index);
    }

    function handleMouseEnter(index) {
        if (isPainting) paint(index);
    }

    function handleMouseUp() {
        setIsPainting(false);
    }

    function getColor(colorId) {
        if (colorId === null) return '#000000';
        return colors.find(c => c.id === colorId)?.hex ?? '#000000';
    }

    const selectedHex = selectedColor === null ? '#000000' : (colors.find(c => c.id === selectedColor)?.hex ?? '#000000');
    const selectedName = selectedColor === null ? 'Erase' : (colors.find(c => c.id === selectedColor)?.name ?? '');

    return (
        <div className="flex gap-8 items-start" onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
            <div
                className="border-2 border-gray select-none w-fit"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
                }}
            >
                {pixels.map((colorId, i) => (
                    <div
                        key={i}
                        style={{
                            width: cellSize,
                            height: cellSize,
                            backgroundColor: getColor(colorId),
                            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
                            cursor: 'crosshair',
                        }}
                        onMouseDown={() => handleMouseDown(i)}
                        onMouseEnter={() => handleMouseEnter(i)}
                    />
                ))}
            </div>

            <div className="flex flex-col gap-3 min-w-[160px]">
                <div>
                    <p className="text-xs text-silver uppercase tracking-wide mb-1">Selected</p>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded border border-gray" style={{ backgroundColor: selectedHex }} />
                        <span className="text-sm text-white">{selectedName}</span>
                    </div>
                </div>

                <div>
                    <p className="text-xs text-silver uppercase tracking-wide mb-2">Palette</p>
                    <div className="grid grid-cols-4 gap-1">
                        <button
                            type="button"
                            className={`w-8 h-8 rounded border-2 ${selectedColor === null ? 'border-white' : 'border-gray'}`}
                            style={{ backgroundColor: '#000000' }}
                            title="Erase"
                            onClick={() => setSelectedColor(null)}
                        />
                        {colors.map(color => (
                            <button
                                key={color.id}
                                type="button"
                                className={`w-8 h-8 rounded border-2 ${selectedColor === color.id ? 'border-white' : 'border-gray'}`}
                                style={{ backgroundColor: color.hex }}
                                title={color.name}
                                onClick={() => setSelectedColor(color.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

TileEditor.propTypes = {
    size: PropTypes.number.isRequired,
    pixels: PropTypes.arrayOf(PropTypes.number),
    colors: PropTypes.arrayOf(ColorShape).isRequired,
    onChange: PropTypes.func.isRequired,
};
