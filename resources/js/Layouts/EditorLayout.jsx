import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Button from '@/Components/Button';
import LinkButton from '@/Components/LinkButton';
import { Head } from '@inertiajs/react';
import PropTypes from 'prop-types';

export default function EditorLayout({ title, saveLabel, backHref, onSubmit, processing, children }) {
    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-white">{title}</h2>}>
            <Head title={title} />

            <div className="py-4 max-w-7xl mx-auto px-4">
                <form onSubmit={onSubmit} className="flex flex-col items-center gap-6">
                    {children}

                    <div className="flex gap-3">
                        <Button type="submit" disabled={processing}>{saveLabel}</Button>
                        <LinkButton href={backHref} variant="secondary">Cancel</LinkButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

EditorLayout.propTypes = {
    title: PropTypes.string.isRequired,
    saveLabel: PropTypes.string.isRequired,
    backHref: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    processing: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};
