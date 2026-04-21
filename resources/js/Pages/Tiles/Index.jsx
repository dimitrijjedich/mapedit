import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import PropTypes from 'prop-types';
import { ColorShape, TileShape } from '@/types';

const PREVIEW_SIZE = 128;

function TilePreview({ tile, colors }) {
    const cellSize = PREVIEW_SIZE / tile.size;

    function getColor(colorId) {
        if (colorId === null) return '#000000';
        return colors.find(c => c.id === colorId)?.hex ?? '#000000';
    }

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${tile.size}, ${cellSize}px)`,
                width: PREVIEW_SIZE,
                height: PREVIEW_SIZE,
            }}
        >
            {tile.pixels.map((colorId, i) => (
                <div key={i} style={{ width: cellSize, height: cellSize, backgroundColor: getColor(colorId) }} />
            ))}
        </div>
    );
}

TilePreview.propTypes = {
    tile: TileShape.isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};

export default function Index({ tiles, colors }) {
    function destroy(id) {
        if (confirm('Delete this tile?')) {
            router.delete(route('tiles.destroy', id));
        }
    }

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800">Tiles</h2>}>
            <Head title="Tiles" />

            <div className="py-8 max-w-5xl mx-auto px-4">
                <div className="flex justify-end mb-6">
                    <Link href={route('tiles.create')} className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700">
                        New Tile
                    </Link>
                </div>

                {tiles.length === 0 ? (
                    <div className="flex flex-col items-center gap-4 pt-12">
                        <p className="text-gray-500 text-lg">No tiles yet. Create your first one.</p>
                        <Link href={route('tiles.create')} className="px-4 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-700">
                            New Tile
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {tiles.map(tile => (
                            <div key={tile.id} className="bg-white border border-gray-200 rounded overflow-hidden flex flex-col">
                                <div className="flex justify-center items-center p-4" style={{ backgroundImage: 'linear-gradient(45deg, #bbb 25%, transparent 25%), linear-gradient(-45deg, #bbb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #bbb 75%), linear-gradient(-45deg, transparent 75%, #bbb 75%)', backgroundSize: '24px 24px', backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px', backgroundColor: '#fff' }}>
                                    <TilePreview tile={tile} colors={colors} />
                                </div>
                                <div className="p-3 flex flex-col gap-3">
                                    <div className="flex justify-between items-center">
                                        <p className="font-medium text-gray-800 text-sm">{tile.name}</p>
                                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">{tile.size}×{tile.size}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link href={route('tiles.edit', tile.id)} className="flex-1 text-center px-3 py-1.5 text-xs bg-gray-800 text-white rounded hover:bg-gray-700">
                                            Edit
                                        </Link>
                                        <button onClick={() => destroy(tile.id)} className="flex-1 px-3 py-1.5 text-xs border border-red-400 text-red-500 rounded hover:bg-red-50">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}

Index.propTypes = {
    tiles: PropTypes.arrayOf(TileShape).isRequired,
    colors: PropTypes.arrayOf(ColorShape).isRequired,
};
