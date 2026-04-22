import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button';
import LinkButton from '@/Components/LinkButton';
import { Head, router } from '@inertiajs/react';
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
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-white">Tiles</h2>}>
            <Head title="Tiles" />

            <div className="py-8 max-w-5xl mx-auto px-4">
                <div className="flex justify-end mb-6">
                    <LinkButton href={route('tiles.create')}>New Tile</LinkButton>
                </div>

                {tiles.length === 0 ? (
                    <div className="flex flex-col items-center gap-4 pt-12">
                        <p className="text-silver text-lg">No tiles yet. Create your first one.</p>
                        <LinkButton href={route('tiles.create')}>New Tile</LinkButton>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {tiles.map(tile => (
                            <div key={tile.id} className="bg-dark border border-gray rounded overflow-hidden flex flex-col">
                                <div className="flex justify-center items-center p-4" style={{ backgroundImage: 'linear-gradient(45deg, #bbb 25%, transparent 25%), linear-gradient(-45deg, #bbb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #bbb 75%), linear-gradient(-45deg, transparent 75%, #bbb 75%)', backgroundSize: '24px 24px', backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px', backgroundColor: '#fff' }}>
                                    <TilePreview tile={tile} colors={colors} />
                                </div>
                                <div className="p-3 flex flex-col gap-3">
                                    <div className="flex justify-between items-center">
                                        <p className="font-medium text-white text-sm">{tile.name}</p>
                                        <span className="bg-black text-silver text-xs px-2 py-0.5 rounded-full">{tile.size}×{tile.size}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <LinkButton href={route('tiles.edit', tile.id)} className="flex-1">Edit</LinkButton>
                                        <Button variant="danger" onClick={() => destroy(tile.id)} className="flex-1 justify-center">
                                            Delete
                                        </Button>
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
