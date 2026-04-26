import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ColorShape, TileShape } from '@/types';

const GRID = 26;
const CELL = 24;

function TileCell({ tile, colors }) {
    const px = CELL / tile.size;
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${tile.size}, ${px}px)`,
                width: CELL,
                height: CELL,
            }}
        >
            {tile.pixels.map((colorId, i) => {
                const hex = colorId === null
                    ? '#000000'
                    : (colors.find(c => c.id === colorId)?.hex ?? '#000000');
                return <div key={i} style={{ width: px, height: px, backgroundColor: hex }} />;
            })}
        </div>
    );
}

TileCell.propTypes = {
    tile: TileShape.isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

export default function MapEditor({ cells: initialCells, tiles, colors, onChange }) {
    const [cells, setCells] = useState(initialCells ?? new Array(GRID * GRID).fill(null));
    const [selectedTile, setSelectedTile] = useState(null);
    const [isPainting, setIsPainting] = useState(false);

    const tileMap = Object.fromEntries(tiles.map(t => [t.id, t]));

    const paint = useCallback((index) => {
        setCells(prev => {
            const updated = [...prev];
            updated[index] = selectedTile;
            onChange(updated);
            return updated;
        });
    }, [selectedTile, onChange]);

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

    return (
        <div className="flex gap-8 items-start" onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
            <div
                className="border-2 border-gray select-none w-fit"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${GRID}, ${CELL}px)`,
                }}
            >
                {cells.map((tileId, i) => {
                    const tile = tileId !== null ? tileMap[tileId] : null;
                    return (
                        <div
                            key={i}
                            style={{
                                width: CELL,
                                height: CELL,
                                backgroundColor: '#000000',
                                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
                                cursor: 'crosshair',
                            }}
                            onMouseDown={() => handleMouseDown(i)}
                            onMouseEnter={() => handleMouseEnter(i)}
                        >
                            {tile && <TileCell tile={tile} colors={colors} />}
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col gap-3 min-w-[160px]">
                <div>
                    <p className="text-xs text-silver uppercase tracking-wide mb-1">Selected</p>
                    {selectedTile === null ? (
                        <div className="flex items-center gap-2">
                            <div style={{ width: CELL, height: CELL }} className="border border-gray bg-black" />
                            <span className="text-sm text-white">Erase</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <TileCell tile={tileMap[selectedTile]} colors={colors} />
                            <span className="text-sm text-white">{tileMap[selectedTile]?.name}</span>
                        </div>
                    )}
                </div>

                <div>
                    <p className="text-xs text-silver uppercase tracking-wide mb-2">Tiles</p>
                    <div className="flex flex-col gap-1">
                        <button
                            type="button"
                            className={`flex items-center gap-2 px-2 py-1 rounded border ${selectedTile === null ? 'border-white' : 'border-gray'}`}
                            onClick={() => setSelectedTile(null)}
                        >
                            <div style={{ width: CELL, height: CELL }} className="bg-black border border-gray" />
                            <span className="text-xs text-white">Erase</span>
                        </button>
                        {tiles.map(tile => (
                            <button
                                key={tile.id}
                                type="button"
                                className={`flex items-center gap-2 px-2 py-1 rounded border ${selectedTile === tile.id ? 'border-white' : 'border-gray'}`}
                                onClick={() => setSelectedTile(tile.id)}
                            >
                                <TileCell tile={tile} colors={colors} />
                                <span className="text-xs text-white">{tile.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

MapEditor.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.number),
    tiles: PropTypes.arrayOf(TileShape).isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
    onChange: PropTypes.func.isRequired,
};
