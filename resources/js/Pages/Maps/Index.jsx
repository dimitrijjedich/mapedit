import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button';
import LinkButton from '@/Components/LinkButton';
import { Head, router } from '@inertiajs/react';
import PropTypes from 'prop-types';
import { MapShape } from '@/types';

export default function Index({ maps }) {
    function destroy(id) {
        if (confirm('Delete this map?')) {
            router.delete(route('maps.destroy', id));
        }
    }

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-white">Maps</h2>}>
            <Head title="Maps" />

            <div className="py-8 max-w-5xl mx-auto px-4">
                <div className="flex justify-end mb-6">
                    <LinkButton href={route('maps.create')}>New Map</LinkButton>
                </div>

                {maps.length === 0 ? (
                    <div className="flex flex-col items-center gap-4 pt-12">
                        <p className="text-silver text-lg">No maps yet. Create your first one.</p>
                        <LinkButton href={route('maps.create')}>New Map</LinkButton>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3">
                        {maps.map(map => (
                            <div key={map.id} className="bg-dark border border-gray rounded p-4 flex justify-between items-center">
                                <span className="text-white font-medium">{map.name}</span>
                                <div className="flex gap-2">
                                    <LinkButton href={route('maps.edit', map.id)}>Edit</LinkButton>
                                    <Button variant="danger" onClick={() => destroy(map.id)}>Delete</Button>
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
    maps: PropTypes.arrayOf(MapShape).isRequired,
};
