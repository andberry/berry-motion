export type TBgTextVariants = 'white' | 'black';
export const BgText = ({ text, variant = 'white' }: { text: string; variant?: TBgTextVariants }) => {
    const textColorClass = `text-${variant}`;
    const bgColorClass = variant === 'white' ? `bg-black` : 'bg-white';
    return (
        <div
            className={`${textColorClass} ${bgColorClass} px-6 py-4 inline-block text-lg`}
            dangerouslySetInnerHTML={{
                __html: text,
            }}></div>
    );
};
